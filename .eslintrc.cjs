module.exports = {
  root: true,
  extends: [
    "@nuxt/eslint-config",
    "plugin:tailwindcss/recommended",
  ],

  rules: {
    'no-console': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
  }
};