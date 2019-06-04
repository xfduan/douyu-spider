const CryptoJS = require('crypto-js')
const VERSION = '220120190604'

const getSign = (roomId, did, time, k) => {
  let i
  const cb = roomId + did + time + '220120190604'
  const rb = CryptoJS.MD5(cb).toString()
  let re = []
  for (i = 0; i < rb.length / 8; i++) re[i] = (parseInt(rb.substr(i * 8, 2), 16) & 0xff) |
    ((parseInt(rb.substr(i * 8 + 2, 2), 16) << 8) & 0xff00) | ((parseInt(rb.substr(i * 8 + 4, 2), 16) << 24) >>> 8) |
    (parseInt(rb.substr(i * 8 + 6, 2), 16) << 24)
  for (let I = 0; I < 2; I++) {
    let v0 = re[I * 2], v1 = re[I * 2 + 1], sum = 0
    i = 0
    const delta = 0x9e3779b9
    for (i = 0; i < 32; i++) {
      sum += delta
      v0 += ((v1 << 4) + k[0]) ^ (v1 + sum) ^ ((v1 >>> 5) + k[1])
      v1 += ((v0 << 4) + k[2]) ^ (v0 + sum) ^ ((v0 >>> 5) + k[3])
    }
    re[I * 2] = v0
    re[I * 2 + 1] = v1
  }
  re[0] -= k[0]
  re[0] -= k[2]
  re[0] -= k[0]
  re[0] -= k[2]
  re[1] -= k[1]
  re[1] -= k[3]
  re[1] -= k[3]
  re[1] += k[3]
  re[2] -= k[0]
  re[2] ^= k[2]
  re[2] ^= k[2]
  re[3] += k[1]
  re[3] ^= k[3]
  re[3] ^= k[3]
  re[0] += k[0]
  re[0] ^= k[2]
  re[0] ^= k[0]
  re[0] -= k[2]
  re[1] = (re[1] << (k[1] % 16)) | (re[1] >>> (32 - (k[1] % 16)))
  re[1] += k[3]
  re[1] += k[1]
  re[1] = (re[1] << (k[3] % 16)) | (re[1] >>> (32 - (k[3] % 16)))
  re[2] = (re[2] << (k[0] % 16)) | (re[2] >>> (32 - (k[0] % 16)))
  re[2] = (re[2] >>> (k[2] % 16)) | (re[2] << (32 - (k[2] % 16)))
  re[2] += k[2]
  re[3] -= k[1]
  re[3] = (re[3] << (k[3] % 16)) | (re[3] >>> (32 - (k[3] % 16)))
  re[3] = (re[3] << (k[1] % 16)) | (re[3] >>> (32 - (k[1] % 16)))
  re[3] ^= k[3]
  {
    const hc = '0123456789abcdef'.split('')
    for (i = 0; i < re.length; i++) {
      let j = 0, s = ''
      for (; j < 4; j++) s += hc[(re[i] >> (j * 8 + 4)) & 15] + hc[(re[i] >> (j * 8)) & 15]
      re[i] = s
    }
    re = re.join('')
  }
  return `v=${VERSION}&did=${did}&tt=${time}&sign=${re}`
}

let roomId = 3567314
let did = '6855e8f7c977455b9f42a82100061501'
let time = 1559630092 || parseInt((new Date).getTime() / 1e3, 10)
const k2 = [0x6cab48e4, 0xa4e5bc8, 0x28bec0, 0x33afa8d0]

console.log(getSign(roomId, did, time, k2))
