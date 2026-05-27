import { isPackageImport } from '../isPackageImport';

describe('isPackageImport util', () => {
  it.each([
    'nimma/legacy',
    'nimma',
    'lodash',
    'lodash/get',
    'lodash/get.js',
    '@stoplight/path',
    '@camunda8/spectral-core',
    '@camunda8/spectral-core/dist/file.js',
  ])('given valid %s package import, should return true', input => {
    expect(isPackageImport(input)).toBe(true);
  });

  it.each(['', '/nimma/legacy', 'path', 'https://esm.sh/@camunda8/spectral-core'])(
    'given invalid %s import, should return false',
    input => {
      expect(isPackageImport(input)).toBe(false);
    },
  );
});
