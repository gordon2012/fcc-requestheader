const webpack = require('webpack');
const path = require('path');

const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = env => {
  const production = !!(env && env.NODE_ENV && env.NODE_ENV === 'production');

  let plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      process_env: {
        BUILD_TARGET: JSON.stringify('server')
      }
    })
  ];
  if (!production) {
    plugins.push(new StartServerPlugin('server.js'));
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  const index = production
    ? ['./server/index']
    : ['webpack/hot/poll?1000', './server/index'];

  return {
    entry: {
      index
    },
    mode: production ? 'production' : 'development',
    watch: !production,
    target: 'node',
    externals: [
      nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
      })
    ],
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins,
    output: {
      path: path.join(__dirname, '.build'),
      filename: 'server.js'
    }
  };
};
