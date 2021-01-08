(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
var waterMarker = require('./vue-waterMark.js')

global.waterMarker = waterMarker

window.Vue && global.Vue.use(waterMarker)

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./vue-waterMark.js":2}],2:[function(require,module,exports){
var id = '1.23452384164.123412416'

var addWaterMarker = function(str, parentNode, font, textColor,arg) {
  
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  if(arg === 'false') return

  var cas = document.createElement('canvas')
  // parentNode.appendChild(cas)
  cas.width = 240
  cas.height = 120
  cas.style.display = 'none'
  var cans = cas.getContext('2d')
  cans.rotate(-Math.PI / 6)
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'middle'
  cans.fillText(str, 0 , cas.height / 2)
  // parentNode.style.backgroundImage = 'url(' + cas.toDataURL('image/png') + ')'

  var div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '30px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background =
    'url(' + cas.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
}

var waterMarker = {
  inserted: function(el, binding) {
    
    
    addWaterMarker(
      binding.value.text || '',
      el,
      binding.value.font,
      binding.value.textColor,
      binding.arg
    )
  },
  
  componentUpdated(el, binding){
    
    addWaterMarker(
      binding.value.text || '',
      el,
      binding.value.font,
      binding.value.textColor,
      binding.arg
    )
    
  },
 // 只调用一次，指令与元素解绑时调用。
  unbind(){
    if (document.getElementById(id) !== null) {
      document.body.removeChild(document.getElementById(id))
    }
  }
}

if (typeof exports === 'object') {
  module.exports = waterMarker
} else if (typeof define === 'function' && define.amd) {
  define([], function () {
    return waterMarker
  })
}
// export default waterMarker

},{}]},{},[1]);
