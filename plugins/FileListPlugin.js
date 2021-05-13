class FileListPlugin {
  constructor(options = {}) {
    this.options = options
    this.filename = options.filename || 'filename.md'
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
      const len = Object.keys(compilation.assets).length
      let content = `# 一共由${len}个文件\n\n`
      for (let filename in compilation.assets) {
        content += `- ${filename}\n`
      }
      compilation.assets[this.filename] = {
        source: () => content,
        size: () => content.length,
      }
    })
  }
}

module.exports = FileListPlugin
