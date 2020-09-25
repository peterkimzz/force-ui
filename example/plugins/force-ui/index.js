import Vue from 'vue'

const isProd = process.env.NODE_ENV === 'production'
// if (isProd) {

// }
// else {

// }
console.log({ isProd })

// import ForceUI from '../../../dist/force-ui.umd.min.js'
// import '../../../dist/force-ui.css'

import ForceUI from 'force-ui'
import 'force-ui/dist/force-ui.css'

Vue.use(ForceUI)