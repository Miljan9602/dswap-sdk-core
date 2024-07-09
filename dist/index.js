
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dswap-sdk-core.cjs.production.min.js')
} else {
  module.exports = require('./dswap-sdk-core.cjs.development.js')
}
