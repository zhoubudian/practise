/*
 * @Author: your name
 * @Date: 2021-01-31 22:36:35
 * @LastEditTime: 2021-01-31 22:46:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \back\app.js
 */

const path = require('path')

const history = require('connect-history-api-fallback')

const express = require('express')

const app = express()
app.use(history())

app.use(express.static(path.join(__dirname, '../web')))

app.listen(3300, () => {
  console.log('服务器')
})