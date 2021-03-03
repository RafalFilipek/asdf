const path = require("path");

const withPreconstruct = require("@preconstruct/next");

module.exports = withPreconstruct({
  webpack: (config, { defaultLoaders, ...rest }) => {
    const babelLoader = { ...defaultLoaders.babel };

    const resolvedBaseUrl = path.resolve(config.context, "../../");
    babelLoader.options.cwd = path.resolve(babelLoader.options.cwd, "../..");
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        include: [resolvedBaseUrl],
        use: babelLoader,
        exclude: (excludePath) => {
          return /node_modules/.test(excludePath);
        },
      },
    ];

    return config;
  },
});
