var bc = require('base-converter');

b = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const decToGeneric = function(n, b) {
  if (typeof n != 'number') {
    throw new ConversionError("Expected valid number");
  }
  if (typeof b == 'number' && b > 1 && b <= 36) {
    // Fallback to native base conversion
    return n.toString(b);
  }
  var result = '';
  var bLen = b.length; while (n != 0) {
    var q = n % bLen;
    // bug fix here for non integer modulo results
    result = b[Math.round(q)] + result;
    n = (n - q) / bLen;
  }

  return result;
}

const decTo62 = function(n) {
  return decToGeneric(n, b);
}


const guid = require('uuid').v4().split('-').join('');
console.log(decTo62(bc.hexToDec(guid)));
