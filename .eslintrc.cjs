// .eslintrc.cjs
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      // Prettier와 충돌하는 규칙을 비활성화하고 Prettier 규칙을 적용합니다.
      'plugin:prettier/recommended' 
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
      // React 18+에서 Fast Refresh를 위한 규칙
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Prettier 규칙을 ESLint 오류로 만듭니다.
      'prettier/prettier': 'error', 
    },
  };