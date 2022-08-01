const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: './[name].js',
    library: {
      name: 'Picker',
      type: 'umd',
    } 
  },
}
