class MyWebpackPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.done.tap('MyWebpackPlugin', (compilation) => {
      console.log(this.options.msg)
    })
  }
}

module.exports = MyWebpackPlugin
