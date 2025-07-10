import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        tsx: true
      }
    },
    env: {
      browser: true,
      node: true,
      es6: true
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    extends: [
      'next/core-web-vitals',
      'plugin:@next/next/recommended',
      'plugin:react/recommended',
      'prettier'
    ],
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@next/next/no-img-element': 'off'
    },
    plugins: ['react', 'prettier']
  })
];

export default eslintConfig;
