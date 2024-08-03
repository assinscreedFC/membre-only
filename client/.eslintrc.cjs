module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' ,"ecmaFeatures": {
      "jsx": true
    },},
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "react", "react-hooks"],
  rules: {
    // overrides: [
    //   {
    //     files: ['*.ts', '*.tsx', '*.js'],
    //     parser: '@typescript-eslint/parser',
    //   },
    // ],
    overrides: [
      {
        files: ['*.html', '*.blade.php'],
        parser: '@angular-eslint/template-parser',
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": "error",
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
