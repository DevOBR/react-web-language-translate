[RADME](./README.md)

# Run eslint

```
npx eslint --init
```

## Terminal options

- to check syntax, find problems and enforce code style
- javascript modules
- react
- use typescript? `yes` or `no`
- execute in browser
- use popular style guide
- standard with no semicolon
- format javascript

## eslint.config.ts

```
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  js.configs.recommended, -> order is important
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      '@stylistic': stylistic
    },
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-no-target-blank': 'off'
    }
  },
  { ignores: ['node_modules', 'dist', 'build'] }
])



```
