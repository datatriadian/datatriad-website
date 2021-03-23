module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'max-len': ['error', 100],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
  },
};
