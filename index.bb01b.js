System.register(["./application.75bfb.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, $p, bcr, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });

      System.import('cc').then((engine) => {
    // engine 初始化后可以动态 import _virtual_cc 模块
    return System.import('virtual:_virtual_cc-Bp5iGE8z');
}).then((_virtualModule) => {
    // _virtualModule 已经加载完成
    application.init(engine).then(() => application.start());
}).catch(console.error);
    }
  };
});
