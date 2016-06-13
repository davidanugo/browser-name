'use strict';

module.exports = function() {
  let browserName = '';

  if (window.opr || window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
    browserName = 'Opera';
  } else if (typeof InstallTrigger !== 'undefined') {
    browserName = 'Firefox';
  } else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
             && navigator.userAgent.indexOf('Chrome') < 0 && navigator.userAgent.indexOf('CriOS') < 0) {
    browserName = 'Safari';
  } else if (document.documentMode) {
    browserName = 'IE';
  } else if (window.StyleMedia) {
    browserName = 'Edge';
  } else if (window.chrome || navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('CriOS') >= 0) {
    browserName = 'Chrome';
  }

  return browserName;
}
