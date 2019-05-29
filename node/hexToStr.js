function codeToStr(code) {
  if (code.length === 2) {
    return String.fromCharCode(parseInt(code, 16));
  } else {
    return codeToStr(code.substr(0, 2)) + codeToStr(code.substr(2));
  }
}

function hexToStr(hex) {
  return hex.split(' ').map(code => codeToStr(code)).join('');
}

const str = '8D00 0000 8D00 0000 B202 0000 7479 7065 403D 6B65 6570 6C69 7665 2F74 6963 6B40 3D31 3535 3931 3138 3535 342F 7563 403D 3133 3931 3734 332F 7261 7040 3D30 2F68 6F74 403D 3133 3931 3734 332F 6168 6F74 403D 302F 6B64 403D 3965 6134 6364 6465 3137 6535 3464 3436 3965 3139 3661 3330 6239 6137 3838 3761 2F73 716E 403D 312F 6375 7240 3D31 3535 3931 3138 3535 352F 00';
console.log(hexToStr(str));
