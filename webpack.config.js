const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: "./src/index.js",
    output: {
      path: __dirname + "/build",
      filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
      extensions: [".jsx", ".css", ".js", ".json", ".svg"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new CopyWebpackPlugin([{ from: "./src/manifest.json", to: "." }])
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules|vendor/,
          use: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                // We use postcss-loader, which have autoprefixer already
                autoprefixer: false,
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: "images/[hash].[ext]"
              }
            },
            {
              loader: "svgo-loader",
              options: {
                plugins: [
                  { removeTitle: true },
                  { convertColors: { shorthex: false } },
                  { convertPathData: false }
                ]
              }
            }
          ]
        }
      ]
    }
  };
};
