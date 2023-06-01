module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'eslint:recommended'
  ], // 添加 prettier 插件],
  parser: '@babel/eslint-parser',
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      excludedFiles: '*.cz-config.*'
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@babel', 'typescript'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 'off',
    'import/no-import-module-exports': 'off'
  }
}
