// 抓包分析使用，查看 websocket 传递的具体内容
function codeToStr(code) {
  if (code.length === 2) {
    return String.fromCharCode(parseInt(code, 16))
  } else {
    return codeToStr(code.substr(0, 2)) + codeToStr(code.substr(2))
  }
}

function hexToStr(hex) {
  return hex.split(' ').map(code => codeToStr(code)).join('')
}

const str = '1400 0000 1400 0000 B102 0000 7479 7065 403D 6D72 6B6C 2F00'
console.log(hexToStr(str))
