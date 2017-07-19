# date utils

moment = require 'moment'

module.exports =

  format: (date, format = 'YYYY-MM-DD HH:mm:ss') ->
    moment(date).format(format)
