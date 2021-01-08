var waterMarker = require('./vue-waterMark.js')

global.waterMarker = waterMarker

window.Vue && global.Vue.use(waterMarker)
