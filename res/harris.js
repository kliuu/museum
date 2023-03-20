"use strict";
// 卖萌标题
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "欢迎来到谢菲尔德回忆博物馆";
    clearTimeout(titleTime);
  } else {
    document.title = "Sheffield Memory Museum.";
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
