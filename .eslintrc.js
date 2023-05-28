module.exports = {
  extends: [
    'eslint-config-it-incubator',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:boundaries/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': { typescript: {} },
    'boundaries/elements': [
      { type: 'pages', pattern: 'pages/*' },
      { type: 'module', pattern: 'module/*' },
      { type: 'components', pattern: 'components/*' },
      { type: 'UI', pattern: 'UI/*' },
    ],
    'boundaries/ignore': ['**/*.test.*'],
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { group: 'internal', position: 'after', pattern: '@/module/**' },
          { group: 'internal', position: 'after', pattern: '@/components/**' },
          { group: 'internal', position: 'after', pattern: '@/UI/**' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            message: 'Private imports are prohibited from @/pages, use public imports instead',
            group: ['@/pages/**'],
          },
          {
            message: 'Private imports are prohibited from @/App, use public imports instead',
            group: ['@/module/**'],
          },
          {
            message: 'Private imports are prohibited from @/processes, use public imports instead',
            group: ['@/components/*/**'],
          },
          {
            message: 'Private imports are prohibited from @/pagesLayer, use public imports instead',
            group: ['@/UI/*/**'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/pages'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/module'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/components'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/UI'],
          },
        ],
      },
    ],
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            from: 'pages',
            allow: ['module', 'components', 'UI'],
          },
          {
            from: 'module',
            allow: ['components', 'UI'],
          },
          { from: 'components', allow: ['UI'] },
        ],
      },
    ],
  },
  overrides: [
    { files: ['**/*.test.*', '**/*.scss'], rules: { 'boundaries/element-types': 'off' } },
  ],
}
