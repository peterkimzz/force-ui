import Vue from 'vue'
let ForceUI

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  ForceUI = require('force-ui').default
  require('force-ui/dist/force-ui.css')
}
else {
  ForceUI = require('../../../src').default
}

Vue.use(ForceUI)