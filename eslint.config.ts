import type { Linter } from 'eslint'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-plugin-prettier/recommended'

const config: Linter.Config[] = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ['.next/', 'node_modules/'],
  },
  prettier,
]

export default config
