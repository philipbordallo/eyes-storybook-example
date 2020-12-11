const CircularDependencyPlugin = require('circular-dependency-plugin')


module.exports = {
  webpackFinal: async (config) => {
    config.plugins.push(new CircularDependencyPlugin())

    return config;
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
