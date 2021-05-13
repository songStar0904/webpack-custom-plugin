class WatcherPlugin {
  constructor(options = {}) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.watchRun.tapAsync('WatcherPlugin', (compliation, cb) => {
      console.log('watch-run', compliation.watchFileSystem.watcher)
      // let mtimes = compliation.watchFileSystem.watcher.mtimes
      // let mtimesKeys = Object.keys(mtimes)
      // if (mtimesKeys.length > 0) {
      //   console.log(`本次一共改动了${mtimesKeys.length}个文件,目录为:`)
      //   console.log(mtimesKeys)
      //   console.log('------------分割线-------------')
      // }
      const fileWatchers = compiler.watchFileSystem.watcher.fileWatchers
      console.log(fileWatchers)
      let paths = fileWatchers
        .map((watcher) => watcher.path)
        .filter((path) => !/(node_modules)/.test(path))

      if (paths.length > 0) {
        console.log(`本次一共改动了${paths.length}个文件,目录为:`)
        console.log(paths)
        console.log('------------分割线-------------')
      }
      cb()
    })
    compiler.hooks.watchClose.tap('WatcherPlugin', () => {
      console.log('watch-close')
    })
  }
}

module.exports = WatcherPlugin
