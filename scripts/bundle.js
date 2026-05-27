#!/usr/bin/env node
/**
 * Bundle the Spectral CLI into a single file using @vercel/ncc.
 *
 * This script runs from the repo root after `yarn build` has produced
 * packages/cli/dist/index.js. It:
 *   1. Runs ncc to bundle everything into dist/bundle/index.js
 *   2. Removes .d.ts files from the bundle (not needed at runtime)
 *   3. Writes the npm package.json into dist/bundle/
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUNDLE_DIR = path.join(ROOT, "dist", "bundle");
const CLI_ENTRY = path.join(ROOT, "packages", "cli", "dist", "index.js");

// Verify the CLI entry point exists (requires `yarn build` first)
if (!fs.existsSync(CLI_ENTRY)) {
  console.error(
    "Error: packages/cli/dist/index.js not found. Run `yarn build` first."
  );
  process.exit(1);
}

// Create a temp directory outside the Yarn workspace to run ncc from,
// so it doesn't pick up the workspace's local TypeScript installation.
const tmpDir = fs.mkdtempSync(path.join(require("os").tmpdir(), "spectral-ncc-"));
try {
  // Install ncc in the temp dir
  console.log("Installing @vercel/ncc...");
  execSync("npm init -y", { cwd: tmpDir, stdio: "ignore" });
  execSync("npm install @vercel/ncc@0.38.4", { cwd: tmpDir, stdio: "inherit" });

  // Run ncc from the temp dir, pointing at our CLI entry
  console.log("Bundling CLI...");
  const nccBin = path.join(tmpDir, "node_modules", ".bin", "ncc");
  execSync(
    `"${nccBin}" build "${CLI_ENTRY}" -o "${BUNDLE_DIR}" --no-source-map-register --no-cache`,
    { cwd: tmpDir, stdio: "inherit" }
  );

  // Remove .d.ts files from bundle (not needed at runtime)
  const dtsFiles = fs
    .readdirSync(BUNDLE_DIR, { recursive: true })
    .filter((f) => f.endsWith(".d.ts"));
  for (const f of dtsFiles) {
    fs.unlinkSync(path.join(BUNDLE_DIR, f));
  }
  console.log(`Removed ${dtsFiles.length} .d.ts file(s) from bundle.`);

  // Read version from the CLI package
  const cliPkg = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "packages", "cli", "package.json"),
      "utf8"
    )
  );

  // Write package.json for npm publishing
  const bundlePkg = {
    name: "@camunda8/spectral-cli",
    version: cliPkg.version,
    description:
      "Camunda fork of Stoplight Spectral CLI — fixes nimma null-deref, Unicode regex false positives, and adds ruleset-level ignoreUnknownFormat.",
    bin: {
      spectral: "./index.js",
    },
    license: "Apache-2.0",
    repository: {
      type: "git",
      url: "https://github.com/camunda/camunda-spectral",
    },
    homepage: "https://github.com/camunda/camunda-spectral#readme",
    engines: {
      node: ">=18",
    },
  };

  fs.writeFileSync(
    path.join(BUNDLE_DIR, "package.json"),
    JSON.stringify(bundlePkg, null, 2) + "\n"
  );

  console.log(
    `Bundle ready at dist/bundle/ (${(fs.statSync(path.join(BUNDLE_DIR, "index.js")).size / 1024 / 1024).toFixed(1)} MB)`
  );
  console.log(`Package: ${bundlePkg.name}@${bundlePkg.version}`);
} finally {
  // Clean up temp dir
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
