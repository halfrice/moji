const path = require("path")

exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~styles": path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
