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
    const tmpRequest = XMLHttpRequest
    XMLHttpRequest = function () {
      const tmpRequestObj = new tmpRequest()
      tmpRequestObj.addEventListener('readystatechange', event => {
        const {
          readyState,
          response,
          responseURL,
          status
        } = event.target
        if (readyState === 4 && status === 200) {
          if (responseURL.indexOf('/lapi/live/getH5Play/') > -1) {
            const urlArr = responseURL.split('/')
            const roomId = urlArr[urlArr.length - 1]
            const rtmp_url = JSON.parse(response).data.rtmp_url
            const rtmp_live = JSON.parse(response).data.rtmp_live
            const targetUrl = rtmp_url + '/' + rtmp_live
            console.log(roomId + ':' + targetUrl)
            window._roomId = roomId
            window._streamUrl = targetUrl
            uploadRoomInfo(roomId, targetUrl)
          }
        }
      })
      return tmpRequestObj
    }
  }

  function uploadRoomInfo(roomId, streamUrl) {
    $.post('http://localhost:3000/stream',
      {
        roomId: roomId,
        streamUrl: streamUrl
      },
      result => {
        console.log('result: ', result)
      }
    )
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
