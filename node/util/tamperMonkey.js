// ==UserScript==
// @name         斗鱼拦截视频流地址
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  get live stream
// @author       三十文
// @match        https://www.douyu.com/*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  var $ = $ || window.$

  function injectAjax() {
    var tmpRequest = XMLHttpRequest
    // window.https = []
    var targetRequest = function () {
      var tmpRequestObj = new tmpRequest()
      tmpRequestObj.addEventListener('readystatechange', event => {
        const {
          readyState,
          response,
          responseURL,
          status
        } = event.target
        if (readyState === 4 && status === 200) {
          // window.https.push({ response: response, responseURL: responseURL })
          if (responseURL.indexOf('/lapi/live/getH5Play/') > -1) {
            const rtmp_url = JSON.parse(response).data.rtmp_url
            const rtmp_live = JSON.parse(response).data.rtmp_live
            const targetUrl = rtmp_url + '/' + rtmp_live
            console.log(targetUrl)
            window.streamUrl = targetUrl
          }
        }
      })
      return tmpRequestObj
    }
    XMLHttpRequest = targetRequest
  }

  injectAjax()
  console.log('inject ajax method success')

  const intervalCheck = setInterval(() => {
    let node = $('.reload-76970c')[0]
    if (node) {
      node.click()
      clearInterval(intervalCheck)
    }
  }, 1000)
})()
