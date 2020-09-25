import Vue from 'vue'

console.log('node_env: ', process.env.NODE_ENV)

import ForceUI from '../../../dist/force-ui.umd.min.js'
import '../../../dist/force-ui.css'

// import ForceUI from '../../../src'

Vue.use(ForceUI)