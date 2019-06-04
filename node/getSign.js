// let roomId = 288016;
// let did = '57d9f117a64441b743119c6200011501';
// let time = 1559198664;
// parseInt((new Date).getTime() / 1e3, 10)
const CryptoJS = require('crypto-js')

function sign(xx0, xx1, xx2) {
  var cb = xx0 + xx1 + xx2 + '220120190604'
  var rb = CryptoJS.MD5(cb).toString()
  var re = []
  for (var i = 0; i < rb.length / 8; i++) re[i] = (parseInt(rb.substr(i * 8, 2), 16) & 0xff) |
    ((parseInt(rb.substr(i * 8 + 2, 2), 16) << 8) & 0xff00) | ((parseInt(rb.substr(i * 8 + 4, 2), 16) << 24) >>> 8) |
    (parseInt(rb.substr(i * 8 + 6, 2), 16) << 24)
  var k2 = [0x1a16a82b, 0xa4e5bc8, 0x499480, 0x33afa8d0]
  for (var I = 0; I < 2; I++) {
    var v0 = re[I * 2], v1 = re[I * 2 + 1], sum = 0, i = 0
    var delta = 0x9e3779b9
    for (i = 0; i < 32; i++) {
      sum += delta
      v0 += ((v1 << 4) + k2[0]) ^ (v1 + sum) ^ ((v1 >>> 5) + k2[1])
      v1 += ((v0 << 4) + k2[2]) ^ (v0 + sum) ^ ((v0 >>> 5) + k2[3])
    }
    re[I * 2] = v0
    re[I * 2 + 1] = v1
  }
  re[0] -= k2[0]
  re[0] ^= k2[2]
  re[0] ^= k2[0]
  re[0] -= k2[2]
  re[1] -= k2[1]
  re[1] += k2[3]
  re[1] = (re[1] >>> (k2[3] % 16)) | (re[1] << (32 - (k2[3] % 16)))
  re[2] -= k2[0]
  re[2] = (re[2] >>> (k2[2] % 16)) | (re[2] << (32 - (k2[2] % 16)))
  re[2] = (re[2] >>> (k2[2] % 16)) | (re[2] << (32 - (k2[2] % 16)))
  re[3] += k2[1]
  re[3] -= k2[3]
  re[3] ^= k2[3]
  re[0] += k2[0]
  re[0] += k2[2]
  re[0] += k2[0]
  re[0] += k2[2]
  re[0] -= k2[2]
  re[1] = (re[1] << (k2[1] % 16)) | (re[1] >>> (32 - (k2[1] % 16)))
  re[1] += k2[3]
  re[1] += k2[1]
  re[1] = (re[1] << (k2[3] % 16)) | (re[1] >>> (32 - (k2[3] % 16)))
  re[1] = (re[1] << (k2[3] % 16)) | (re[1] >>> (32 - (k2[3] % 16)))
  re[2] = (re[2] << (k2[0] % 16)) | (re[2] >>> (32 - (k2[0] % 16)))
  re[2] += k2[2]
  re[2] = (re[2] >>> (k2[2] % 16)) | (re[2] << (32 - (k2[2] % 16)))
  re[3] -= k2[1]
  re[3] ^= k2[3]
  re[3] ^= k2[1]
  re[3] -= k2[3]
  re[3] = (re[3] >>> (k2[3] % 16)) | (re[3] << (32 - (k2[3] % 16)))
  {
    var hc = '0123456789abcdef'.split('')
    for (var i = 0; i < re.length; i++) {
      var j = 0, s = ''
      for (; j < 4; j++) s += hc[(re[i] >> (j * 8 + 4)) & 15] + hc[(re[i] >> (j * 8)) & 15]
      re[i] = s
    }
    re = re.join('')
  }
  var rt = 'v=220120190604' + '&did=' + xx1 + '&tt=' + xx2 + '&sign=' + re
  return rt
}

let roomId = 16166
let did = '9e94b0aecbd1d2bd312c209d00001501'
let time = 1559624804 || parseInt((new Date).getTime() / 1e3, 10)
console.log(time)
console.log(sign(roomId, did, time))
