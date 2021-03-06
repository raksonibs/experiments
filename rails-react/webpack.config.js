module.exports = {
  entry: "./app/assets/javascripts/frontend/main.jsx",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query:{presets:['es2015','react']}}
    ]    
  }
}

// resolve when trying to resolve dependencies