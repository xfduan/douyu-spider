// let roomId = 288016;
// let did = '57d9f117a64441b743119c6200011501';
// let time = 1559198664;
// parseInt((new Date).getTime() / 1e3, 10)
const CryptoJS = require('crypto-js');

const VERSION = '220120190530';

function res(roomId, did, time) {
  let i;
  const cb = roomId + did + time + VERSION;
  const rb = CryptoJS.MD5(cb).toString();
  let re = [];
  for (let i = 0; i < rb.length / 8; i++) {
    re[i] = (parseInt(rb.substr(i * 8, 2), 16) & 0xff) |
      ((parseInt(rb.substr(i * 8 + 2, 2), 16) << 8) & 0xff00) |
      ((parseInt(rb.substr(i * 8 + 4, 2), 16) << 24) >>> 8) |
      (parseInt(rb.substr(i * 8 + 6, 2), 16) << 24);
  }
  const k2 = [0x1a16a82b, 0x15f6f3fa, 0x499480, 0x33349a08];
  for (let I = 0; I < 2; I++) {
    let v0 = re[I * 2], v1 = re[I * 2 + 1], sum = 0;
    i = 0;
    const delta = 0x9e3779b9;
    for (i = 0; i < 32; i++) {
      sum += delta;
      v0 += ((v1 << 4) + k2[0]) ^ (v1 + sum) ^ ((v1 >>> 5) + k2[1]);
      v1 += ((v0 << 4) + k2[2]) ^ (v0 + sum) ^ ((v0 >>> 5) + k2[3]);
    }
    re[I * 2] = v0;
    re[I * 2 + 1] = v1;
  }
  re[0] = (re[0] >>> (k2[0] % 16)) | (re[0] << (32 - (k2[0] % 16)));
  re[0] ^= k2[2];
  re[0] += k2[2];
  re[1] ^= k2[1];
  re[1] += k2[3];
  re[1] += k2[1];
  re[1] = (re[1] << (k2[3] % 16)) | (re[1] >>> (32 - (k2[3] % 16)));
  re[2] = (re[2] << (k2[0] % 16)) | (re[2] >>> (32 - (k2[0] % 16)));
  re[2] = (re[2] >>> (k2[2] % 16)) | (re[2] << (32 - (k2[2] % 16)));
  re[2] = (re[2] >>> (k2[0] % 16)) | (re[2] << (32 - (k2[0] % 16)));
  re[2] = (re[2] << (k2[2] % 16)) | (re[2] >>> (32 - (k2[2] % 16)));
  re[3] = (re[3] >>> (k2[1] % 16)) | (re[3] << (32 - (k2[1] % 16)));
  re[3] -= k2[3];
  re[3] += k2[3];
  re[0] ^= k2[0];
  re[0] += k2[2];
  re[0] ^= k2[2];
  re[0] ^= k2[2];
  re[1] -= k2[1];
  re[1] += k2[3];
  re[1] -= k2[3];
  re[1] -= k2[3];
  re[2] -= k2[0];
  re[2] += k2[2];
  re[2] -= k2[2];
  re[3] = (re[3] << (k2[1] % 16)) | (re[3] >>> (32 - (k2[1] % 16)));
  re[3] ^= k2[3];
  re[3] = (re[3] << (k2[3] % 16)) | (re[3] >>> (32 - (k2[3] % 16)));
  re[3] = (re[3] >>> (k2[3] % 16)) | (re[3] << (32 - (k2[3] % 16)));
  {
    const hc = '0123456789abcdef'.split('');
    for (i = 0; i < re.length; i++) {
      let j = 0, s = '';
      for (; j < 4; j++) s += hc[(re[i] >> (j * 8 + 4)) & 15] + hc[(re[i] >> (j * 8)) & 15];
      re[i] = s;
    }
    re = re.join('');
  }
  return 'v=' + VERSION + '&did=' + did + '&tt=' + time + '&sign=' + re;
}

function res1(xx0, xx1, xx2) {
  var cb = xx0 + xx1 + xx2 + '220120190530';
  var rb = CryptoJS.MD5(cb).toString();
  var re = [];
  for (var i = 0; i < rb.length / 8; i++) re[i] = (parseInt(rb.substr(i * 8, 2), 16) & 0xff) |
    ((parseInt(rb.substr(i * 8 + 2, 2), 16) << 8) & 0xff00) | ((parseInt(rb.substr(i * 8 + 4, 2), 16) << 24) >>> 8) |
    (parseInt(rb.substr(i * 8 + 6, 2), 16) << 24);
  var k2 = [0x389937c7, 0x15f6f3fa, 0x5d9c0, 0x33349a08];
  for (var I = 0; I < 2; I++) {
    var v0 = re[I * 2], v1 = re[I * 2 + 1], sum = 0, i = 0;
    var delta = 0x9e3779b9;
    for (i = 0; i < 32; i++) {
      sum += delta;
      v0 += ((v1 << 4) + k2[0]) ^ (v1 + sum) ^ ((v1 >>> 5) + k2[1]);
      v1 += ((v0 << 4) + k2[2]) ^ (v0 + sum) ^ ((v0 >>> 5) + k2[3]);
    }
    re[I * 2] = v0;
    re[I * 2 + 1] = v1;
  }
  re[0] = (re[0] >>> (k2[0] % 16)) | (re[0] << (32 - (k2[0] % 16)));
  re[0] = (re[0] >>> (k2[2] % 16)) | (re[0] << (32 - (k2[2] % 16)));
  re[0] = (re[0] >>> (k2[2] % 16)) | (re[0] << (32 - (k2[2] % 16)));
  re[1] ^= k2[1];
  re[1] -= k2[3];
  re[1] -= k2[1];
  re[1] = (re[1] << (k2[3] % 16)) | (re[1] >>> (32 - (k2[3] % 16)));
  re[2] = (re[2] << (k2[0] % 16)) | (re[2] >>> (32 - (k2[0] % 16)));
  re[2] ^= k2[2];
  re[2] ^= k2[0];
  re[2] = (re[2] >>> (k2[2] % 16)) | (re[2] << (32 - (k2[2] % 16)));
  re[3] = (re[3] >>> (k2[1] % 16)) | (re[3] << (32 - (k2[1] % 16)));
  re[3] ^= k2[3];
  re[3] = (re[3] << (k2[3] % 16)) | (re[3] >>> (32 - (k2[3] % 16)));
  re[0] ^= k2[0];
  re[0] -= k2[2];
  re[0] = (re[0] >>> (k2[2] % 16)) | (re[0] << (32 - (k2[2] % 16)));
  re[1] -= k2[1];
  re[1] = (re[1] >>> (k2[3] % 16)) | (re[1] << (32 - (k2[3] % 16)));
  re[1] += k2[3];
  re[2] -= k2[0];
  re[2] = (re[2] << (k2[2] % 16)) | (re[2] >>> (32 - (k2[2] % 16)));
  re[2] -= k2[2];
  re[3] = (re[3] << (k2[1] % 16)) | (re[3] >>> (32 - (k2[1] % 16)));
  re[3] += k2[3];
  re[3] = (re[3] << (k2[3] % 16)) | (re[3] >>> (32 - (k2[3] % 16)));
  re[3] ^= k2[3];
  {
    var hc = '0123456789abcdef'.split('');
    for (var i = 0; i < re.length; i++) {
      var j = 0, s = '';
      for (; j < 4; j++) s += hc[(re[i] >> (j * 8 + 4)) & 15] + hc[(re[i] >> (j * 8)) & 15];
      re[i] = s;
    }
    re = re.join('');
  }
  var rt = 'v=220120190530' + '&did=' + xx1 + '&tt=' + xx2 + '&sign=' + re;
  return rt;
}


let roomId = 947848;
let did = '57d9f117a64441b743119c6200011501';
let time = 1559202054 || parseInt((new Date).getTime() / 1e3, 10);
console.log(time);
console.log(res(roomId, did, time));
console.log(res1(roomId, did, time));
// "v=220120190530&did=57d9f117a64441b743119c6200011501&tt=1559202054&sign=4ea143fb9124048158dbf91d210c35db"
