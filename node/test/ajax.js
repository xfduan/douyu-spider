var A = XMLHttpRequest
var https = []
var C = function () {
  var a = new A()
  a.addEventListener('readystatechange', event => {
    const {
      readyState,
      response,
      responseURL,
      status
    } = event.target
    if (readyState === 4 && status === 200) {
      // console.log(event)
      https.push({ response: response, responseURL: responseURL })
      if (responseURL.indexOf('/lapi/live/getH5Play/') > -1) {
        console.log(response)
        const { rtmp_url, rtmp_live } = response.data
        console.log(`${rtmp_url}/${rtmp_live}`)
      }
    }
  })
  return a
}
XMLHttpRequest = C
