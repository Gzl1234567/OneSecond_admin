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

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      excludedFiles: '*.cz-config.*'
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['react', '@babel', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 'off',
    'import/no-import-module-exports': 'off'
  }
}
