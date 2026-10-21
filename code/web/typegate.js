const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0DTP28typegate8typegate11ParseResult2Ok(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28typegate8typegate11ParseResult2Ok.prototype.$tag = 0;
function _M0DTP28typegate8typegate11ParseResult3Err(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate11ParseResult3Err.prototype.$tag = 1;
function _M0DTP28typegate8typegate9JsonValue4Null() {}
_M0DTP28typegate8typegate9JsonValue4Null.prototype.$tag = 0;
const _M0DTP28typegate8typegate9JsonValue4Null__ = new _M0DTP28typegate8typegate9JsonValue4Null();
function _M0DTP28typegate8typegate9JsonValue4Bool(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate9JsonValue4Bool.prototype.$tag = 1;
function _M0DTP28typegate8typegate9JsonValue6Number(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate9JsonValue6Number.prototype.$tag = 2;
function _M0DTP28typegate8typegate9JsonValue3Str(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate9JsonValue3Str.prototype.$tag = 3;
function _M0DTP28typegate8typegate9JsonValue3Arr(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate9JsonValue3Arr.prototype.$tag = 4;
function _M0DTP28typegate8typegate9JsonValue3Obj(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate9JsonValue3Obj.prototype.$tag = 5;
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0DTP28typegate8typegate6Schema3Any() {}
_M0DTP28typegate8typegate6Schema3Any.prototype.$tag = 0;
const _M0DTP28typegate8typegate6Schema3Any__ = new _M0DTP28typegate8typegate6Schema3Any();
function _M0DTP28typegate8typegate6Schema5SNull() {}
_M0DTP28typegate8typegate6Schema5SNull.prototype.$tag = 1;
const _M0DTP28typegate8typegate6Schema5SNull__ = new _M0DTP28typegate8typegate6Schema5SNull();
function _M0DTP28typegate8typegate6Schema5SBool() {}
_M0DTP28typegate8typegate6Schema5SBool.prototype.$tag = 2;
const _M0DTP28typegate8typegate6Schema5SBool__ = new _M0DTP28typegate8typegate6Schema5SBool();
function _M0DTP28typegate8typegate6Schema7SNumber() {}
_M0DTP28typegate8typegate6Schema7SNumber.prototype.$tag = 3;
const _M0DTP28typegate8typegate6Schema7SNumber__ = new _M0DTP28typegate8typegate6Schema7SNumber();
function _M0DTP28typegate8typegate6Schema7SString() {}
_M0DTP28typegate8typegate6Schema7SString.prototype.$tag = 4;
const _M0DTP28typegate8typegate6Schema7SString__ = new _M0DTP28typegate8typegate6Schema7SString();
function _M0DTP28typegate8typegate6Schema6SArray(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate6Schema6SArray.prototype.$tag = 5;
function _M0DTP28typegate8typegate6Schema7SObject(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP28typegate8typegate6Schema7SObject.prototype.$tag = 6;
function _M0DTP28typegate8typegate6Schema5SEnum(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate6Schema5SEnum.prototype.$tag = 7;
function _M0DTP28typegate8typegate6Schema8SPattern(param0) {
  this._0 = param0;
}
_M0DTP28typegate8typegate6Schema8SPattern.prototype.$tag = 8;
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array4pushGUsRP28typegate8typegate6SchemaEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FP28typegate8typegate9is__digit(c) {
  const n = c;
  return n >= 48 && n <= 57;
}
function _M0FP28typegate8typegate7ch__str(c) {
  return _M0IPC14char4CharPB4Show10to__string(c);
}
function _M0FP28typegate8typegate8hex__val(c) {
  const n = c;
  return n >= 48 && n <= 57 ? n - 48 | 0 : n >= 97 && n <= 102 ? (n - 97 | 0) + 10 | 0 : n >= 65 && n <= 70 ? (n - 65 | 0) + 10 | 0 : 0;
}
function _M0FP28typegate8typegate8skip__ws(s, i) {
  const k = new _M0TPB8MutLocalGiE(i);
  while (true) {
    if (k.val < s.length) {
      const _tmp = k.val;
      const c = _tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob();
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 32) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 9) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 10) || _M0IPC16uint166UInt16PB2Eq5equal(c, 13)))) {
        k.val = k.val + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return k.val;
}
function _M0FP28typegate8typegate14parse__literal(s, i) {
  if (s.length >= (i + 4 | 0)) {
    let t;
    if (_M0IPC16uint166UInt16PB2Eq5equal(i >>> 0 < s.length ? s.charCodeAt(i) : $oob(), 116)) {
      let _tmp;
      const _tmp$2 = i + 1 | 0;
      if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob(), 114)) {
        let _tmp$3;
        const _tmp$4 = i + 2 | 0;
        if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob(), 117)) {
          const _tmp$5 = i + 3 | 0;
          _tmp$3 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob(), 101);
        } else {
          _tmp$3 = false;
        }
        _tmp = _tmp$3;
      } else {
        _tmp = false;
      }
      t = _tmp;
    } else {
      t = false;
    }
    if (t) {
      return new _M0DTP28typegate8typegate11ParseResult2Ok(new _M0DTP28typegate8typegate9JsonValue4Bool(true), i + 4 | 0);
    }
    let _tmp;
    if (_M0IPC16uint166UInt16PB2Eq5equal(i >>> 0 < s.length ? s.charCodeAt(i) : $oob(), 110)) {
      let _tmp$2;
      const _tmp$3 = i + 1 | 0;
      if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 117)) {
        let _tmp$4;
        const _tmp$5 = i + 2 | 0;
        if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob(), 108)) {
          const _tmp$6 = i + 3 | 0;
          _tmp$4 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$6 >>> 0 < s.length ? s.charCodeAt(_tmp$6) : $oob(), 108);
        } else {
          _tmp$4 = false;
        }
        _tmp$2 = _tmp$4;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      return new _M0DTP28typegate8typegate11ParseResult2Ok(_M0DTP28typegate8typegate9JsonValue4Null__, i + 4 | 0);
    }
  }
  if (s.length >= (i + 5 | 0)) {
    let _tmp;
    if (_M0IPC16uint166UInt16PB2Eq5equal(i >>> 0 < s.length ? s.charCodeAt(i) : $oob(), 102)) {
      let _tmp$2;
      const _tmp$3 = i + 1 | 0;
      if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 97)) {
        let _tmp$4;
        const _tmp$5 = i + 2 | 0;
        if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob(), 108)) {
          let _tmp$6;
          const _tmp$7 = i + 3 | 0;
          if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$7 >>> 0 < s.length ? s.charCodeAt(_tmp$7) : $oob(), 115)) {
            const _tmp$8 = i + 4 | 0;
            _tmp$6 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$8 >>> 0 < s.length ? s.charCodeAt(_tmp$8) : $oob(), 101);
          } else {
            _tmp$6 = false;
          }
          _tmp$4 = _tmp$6;
        } else {
          _tmp$4 = false;
        }
        _tmp$2 = _tmp$4;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      return new _M0DTP28typegate8typegate11ParseResult2Ok(new _M0DTP28typegate8typegate9JsonValue4Bool(false), i + 5 | 0);
    }
  }
  return new _M0DTP28typegate8typegate11ParseResult3Err("invalid literal");
}
function _M0FP28typegate8typegate15str__to__double(s) {
  const n = s.length;
  const i = new _M0TPB8MutLocalGiE(0);
  const neg = new _M0TPB8MutLocalGdE(1);
  let _tmp;
  if (i.val < n) {
    const _tmp$2 = i.val;
    _tmp = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob(), 45);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    neg.val = -1;
    i.val = i.val + 1 | 0;
  } else {
    let _tmp$2;
    if (i.val < n) {
      const _tmp$3 = i.val;
      _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 43);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      i.val = i.val + 1 | 0;
    }
  }
  const int_part = new _M0TPB8MutLocalGdE(0);
  while (true) {
    let _tmp$2;
    if (i.val < n) {
      const _tmp$3 = i.val;
      _tmp$2 = _M0FP28typegate8typegate9is__digit(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob());
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      const _tmp$3 = int_part.val * 10;
      const _tmp$4 = i.val;
      int_part.val = _tmp$3 + (((_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob()) - 48 | 0) + 0);
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const frac_part = new _M0TPB8MutLocalGdE(0);
  const frac_scale = new _M0TPB8MutLocalGdE(1);
  let _tmp$2;
  if (i.val < n) {
    const _tmp$3 = i.val;
    _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 46);
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    i.val = i.val + 1 | 0;
    while (true) {
      let _tmp$3;
      if (i.val < n) {
        const _tmp$4 = i.val;
        _tmp$3 = _M0FP28typegate8typegate9is__digit(_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob());
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        const _tmp$4 = frac_part.val * 10;
        const _tmp$5 = i.val;
        frac_part.val = _tmp$4 + (((_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob()) - 48 | 0) + 0);
        frac_scale.val = frac_scale.val * 10;
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const value = new _M0TPB8MutLocalGdE(int_part.val + frac_part.val / frac_scale.val);
  let _tmp$3;
  if (i.val < n) {
    let _tmp$4;
    const _tmp$5 = i.val;
    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob(), 101)) {
      _tmp$4 = true;
    } else {
      const _tmp$6 = i.val;
      _tmp$4 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$6 >>> 0 < s.length ? s.charCodeAt(_tmp$6) : $oob(), 69);
    }
    _tmp$3 = _tmp$4;
  } else {
    _tmp$3 = false;
  }
  if (_tmp$3) {
    i.val = i.val + 1 | 0;
    const exp_neg = new _M0TPB8MutLocalGbE(false);
    let _tmp$4;
    if (i.val < n) {
      const _tmp$5 = i.val;
      _tmp$4 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob(), 45);
    } else {
      _tmp$4 = false;
    }
    if (_tmp$4) {
      exp_neg.val = true;
      i.val = i.val + 1 | 0;
    } else {
      let _tmp$5;
      if (i.val < n) {
        const _tmp$6 = i.val;
        _tmp$5 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$6 >>> 0 < s.length ? s.charCodeAt(_tmp$6) : $oob(), 43);
      } else {
        _tmp$5 = false;
      }
      if (_tmp$5) {
        i.val = i.val + 1 | 0;
      }
    }
    const exp = new _M0TPB8MutLocalGiE(0);
    while (true) {
      let _tmp$5;
      if (i.val < n) {
        const _tmp$6 = i.val;
        _tmp$5 = _M0FP28typegate8typegate9is__digit(_tmp$6 >>> 0 < s.length ? s.charCodeAt(_tmp$6) : $oob());
      } else {
        _tmp$5 = false;
      }
      if (_tmp$5) {
        const _tmp$6 = Math.imul(exp.val, 10) | 0;
        const _tmp$7 = i.val;
        exp.val = _tmp$6 + ((_tmp$7 >>> 0 < s.length ? s.charCodeAt(_tmp$7) : $oob()) - 48 | 0) | 0;
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const mult = new _M0TPB8MutLocalGdE(1);
    const c = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (c.val < exp.val) {
        mult.val = mult.val * 10;
        c.val = c.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (exp_neg.val) {
      value.val = value.val / mult.val;
    } else {
      value.val = value.val * mult.val;
    }
  }
  return value.val * neg.val;
}
function _M0FP28typegate8typegate13parse__number(s, i) {
  const k = new _M0TPB8MutLocalGiE(i);
  const buf = new _M0TPB8MutLocalGsE("");
  while (true) {
    if (k.val < s.length) {
      const _tmp = k.val;
      const c = _tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob();
      if (_M0FP28typegate8typegate9is__digit(c) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 45) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 43) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 46) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 101) || _M0IPC16uint166UInt16PB2Eq5equal(c, 69)))))) {
        buf.val = `${buf.val}${_M0FP28typegate8typegate7ch__str(c)}`;
        k.val = k.val + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP28typegate8typegate11ParseResult2Ok(new _M0DTP28typegate8typegate9JsonValue6Number(_M0FP28typegate8typegate15str__to__double(buf.val)), k.val);
}
function _M0FP28typegate8typegate11parse__hex4(s, i) {
  const v = new _M0TPB8MutLocalGiE(0);
  const k = new _M0TPB8MutLocalGiE(i);
  while (true) {
    if (k.val < (i + 4 | 0)) {
      const _tmp = Math.imul(v.val, 16) | 0;
      const _tmp$2 = k.val;
      v.val = _tmp + _M0FP28typegate8typegate8hex__val(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob()) | 0;
      k.val = k.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return v.val;
}
function _M0FP28typegate8typegate13parse__string(s, i) {
  const k = new _M0TPB8MutLocalGiE(i + 1 | 0);
  const buf = new _M0TPB8MutLocalGsE("");
  while (true) {
    if (k.val >= s.length) {
      return new _M0DTP28typegate8typegate11ParseResult3Err("unterminated string");
    }
    const _tmp = k.val;
    const c = _tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob();
    if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
      return new _M0DTP28typegate8typegate11ParseResult2Ok(new _M0DTP28typegate8typegate9JsonValue3Str(buf.val), k.val + 1 | 0);
    } else {
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
        if ((k.val + 1 | 0) >= s.length) {
          return new _M0DTP28typegate8typegate11ParseResult3Err("bad escape");
        }
        const _tmp$2 = k.val + 1 | 0;
        const e = _tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob();
        if (_M0IPC16uint166UInt16PB2Eq5equal(e, 110)) {
          buf.val = `${buf.val}\n`;
          k.val = k.val + 2 | 0;
        } else {
          if (_M0IPC16uint166UInt16PB2Eq5equal(e, 116)) {
            buf.val = `${buf.val}\t`;
            k.val = k.val + 2 | 0;
          } else {
            if (_M0IPC16uint166UInt16PB2Eq5equal(e, 114)) {
              buf.val = `${buf.val}\r`;
              k.val = k.val + 2 | 0;
            } else {
              if (_M0IPC16uint166UInt16PB2Eq5equal(e, 98)) {
                buf.val = `${buf.val}\b`;
                k.val = k.val + 2 | 0;
              } else {
                if (_M0IPC16uint166UInt16PB2Eq5equal(e, 102)) {
                  buf.val = `${buf.val}\f`;
                  k.val = k.val + 2 | 0;
                } else {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(e, 34)) {
                    buf.val = `${buf.val}\"`;
                    k.val = k.val + 2 | 0;
                  } else {
                    if (_M0IPC16uint166UInt16PB2Eq5equal(e, 92)) {
                      buf.val = `${buf.val}\\`;
                      k.val = k.val + 2 | 0;
                    } else {
                      if (_M0IPC16uint166UInt16PB2Eq5equal(e, 47)) {
                        buf.val = `${buf.val}/`;
                        k.val = k.val + 2 | 0;
                      } else {
                        if (_M0IPC16uint166UInt16PB2Eq5equal(e, 117)) {
                          if ((k.val + 6 | 0) >= s.length) {
                            return new _M0DTP28typegate8typegate11ParseResult3Err("bad unicode escape");
                          }
                          const hex = _M0FP28typegate8typegate11parse__hex4(s, k.val + 2 | 0);
                          buf.val = `${buf.val}${_M0IPC14char4CharPB4Show10to__string(hex)}`;
                          k.val = k.val + 6 | 0;
                        } else {
                          return new _M0DTP28typegate8typegate11ParseResult3Err("unknown escape");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        buf.val = `${buf.val}${_M0FP28typegate8typegate7ch__str(c)}`;
        k.val = k.val + 1 | 0;
      }
    }
    continue;
  }
}
function _M0FP28typegate8typegate12parse__value(s, i) {
  if (i >= s.length) {
    return new _M0DTP28typegate8typegate11ParseResult3Err("unexpected end of input");
  } else {
    const c = i >>> 0 < s.length ? s.charCodeAt(i) : $oob();
    return _M0IPC16uint166UInt16PB2Eq5equal(c, 123) ? _M0FP28typegate8typegate13parse__object(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 91) ? _M0FP28typegate8typegate12parse__array(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 34) ? _M0FP28typegate8typegate13parse__string(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 116) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 102) || _M0IPC16uint166UInt16PB2Eq5equal(c, 110)) ? _M0FP28typegate8typegate14parse__literal(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 45) || _M0FP28typegate8typegate9is__digit(c) ? _M0FP28typegate8typegate13parse__number(s, i) : new _M0DTP28typegate8typegate11ParseResult3Err("unexpected character");
  }
}
function _M0FP28typegate8typegate12parse__array(s, i) {
  const k = new _M0TPB8MutLocalGiE(i + 1 | 0);
  const items = [];
  while (true) {
    k.val = _M0FP28typegate8typegate8skip__ws(s, k.val);
    if (k.val >= s.length) {
      return new _M0DTP28typegate8typegate11ParseResult3Err("unterminated array");
    }
    const _tmp = k.val;
    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob(), 93)) {
      return new _M0DTP28typegate8typegate11ParseResult2Ok(new _M0DTP28typegate8typegate9JsonValue3Arr(items), k.val + 1 | 0);
    }
    let e;
    _L: {
      _L$2: {
        let v;
        let j;
        _L$3: {
          const _bind = _M0FP28typegate8typegate12parse__value(s, k.val);
          if (_bind.$tag === 0) {
            const _Ok = _bind;
            const _v = _Ok._0;
            const _j = _Ok._1;
            v = _v;
            j = _j;
            break _L$3;
          } else {
            const _Err = _bind;
            const _e = _Err._0;
            e = _e;
            break _L$2;
          }
        }
        _M0MPC15array5Array4pushGUsRP28typegate8typegate6SchemaEE(items, v);
        k.val = _M0FP28typegate8typegate8skip__ws(s, j);
        let _tmp$2;
        if (k.val < s.length) {
          const _tmp$3 = k.val;
          _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 44);
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          k.val = k.val + 1 | 0;
        }
        break _L;
      }
      return new _M0DTP28typegate8typegate11ParseResult3Err(e);
    }
    continue;
  }
}
function _M0FP28typegate8typegate13parse__object(s, i) {
  const k = new _M0TPB8MutLocalGiE(i + 1 | 0);
  const fields = [];
  while (true) {
    k.val = _M0FP28typegate8typegate8skip__ws(s, k.val);
    if (k.val >= s.length) {
      return new _M0DTP28typegate8typegate11ParseResult3Err("unterminated object");
    }
    const _tmp = k.val;
    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob(), 125)) {
      return new _M0DTP28typegate8typegate11ParseResult2Ok(new _M0DTP28typegate8typegate9JsonValue3Obj(fields), k.val + 1 | 0);
    }
    let e;
    _L: {
      _L$2: {
        let key;
        let j;
        _L$3: {
          const _bind = _M0FP28typegate8typegate13parse__string(s, k.val);
          if (_bind.$tag === 0) {
            const _Ok = _bind;
            const _x = _Ok._0;
            if (_x.$tag === 3) {
              const _Str = _x;
              const _key = _Str._0;
              const _j = _Ok._1;
              key = _key;
              j = _j;
              break _L$3;
            } else {
              return new _M0DTP28typegate8typegate11ParseResult3Err("object key must be string");
            }
          } else {
            const _Err = _bind;
            const _e = _Err._0;
            e = _e;
            break _L$2;
          }
        }
        k.val = _M0FP28typegate8typegate8skip__ws(s, j);
        let _tmp$2;
        if (k.val >= s.length) {
          _tmp$2 = true;
        } else {
          const _tmp$3 = k.val;
          _tmp$2 = _M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 58);
        }
        if (_tmp$2) {
          return new _M0DTP28typegate8typegate11ParseResult3Err("expected ':' in object");
        }
        k.val = _M0FP28typegate8typegate8skip__ws(s, k.val + 1 | 0);
        let e$2;
        _L$4: {
          _L$5: {
            let v;
            let j2;
            _L$6: {
              const _bind = _M0FP28typegate8typegate12parse__value(s, k.val);
              if (_bind.$tag === 0) {
                const _Ok = _bind;
                const _v = _Ok._0;
                const _j2 = _Ok._1;
                v = _v;
                j2 = _j2;
                break _L$6;
              } else {
                const _Err = _bind;
                const _e = _Err._0;
                e$2 = _e;
                break _L$5;
              }
            }
            _M0MPC15array5Array4pushGUsRP28typegate8typegate6SchemaEE(fields, { _0: key, _1: v });
            k.val = _M0FP28typegate8typegate8skip__ws(s, j2);
            let _tmp$3;
            if (k.val < s.length) {
              const _tmp$4 = k.val;
              _tmp$3 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob(), 44);
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              k.val = k.val + 1 | 0;
            }
            break _L$4;
          }
          return new _M0DTP28typegate8typegate11ParseResult3Err(e$2);
        }
        break _L;
      }
      return new _M0DTP28typegate8typegate11ParseResult3Err(e);
    }
    continue;
  }
}
function _M0FP28typegate8typegate5parse(s) {
  const i = _M0FP28typegate8typegate8skip__ws(s, 0);
  let e;
  _L: {
    let v;
    let j;
    _L$2: {
      const _bind = _M0FP28typegate8typegate12parse__value(s, i);
      if (_bind.$tag === 0) {
        const _Ok = _bind;
        const _v = _Ok._0;
        const _j = _Ok._1;
        v = _v;
        j = _j;
        break _L$2;
      } else {
        const _Err = _bind;
        const _e = _Err._0;
        e = _e;
        break _L;
      }
    }
    const k = _M0FP28typegate8typegate8skip__ws(s, j);
    return k === s.length ? new _M0DTP28typegate8typegate11ParseResult2Ok(v, k) : new _M0DTP28typegate8typegate11ParseResult3Err("trailing characters after JSON value");
  }
  return new _M0DTP28typegate8typegate11ParseResult3Err(e);
}
function _M0FP28typegate8typegate6equals(a, b) {
  let x;
  let y;
  _L: {
    let x$2;
    let y$2;
    _L$2: {
      let x$3;
      let y$3;
      _L$3: {
        let x$4;
        let y$4;
        _L$4: {
          let x$5;
          let y$5;
          _L$5: {
            switch (a.$tag) {
              case 0: {
                if (b.$tag === 0) {
                  return true;
                } else {
                  return false;
                }
              }
              case 1: {
                const _Bool = a;
                const _x = _Bool._0;
                if (b.$tag === 1) {
                  const _Bool$2 = b;
                  const _y = _Bool$2._0;
                  x$5 = _x;
                  y$5 = _y;
                  break _L$5;
                } else {
                  return false;
                }
              }
              case 2: {
                const _Number = a;
                const _x$2 = _Number._0;
                if (b.$tag === 2) {
                  const _Number$2 = b;
                  const _y = _Number$2._0;
                  x$4 = _x$2;
                  y$4 = _y;
                  break _L$4;
                } else {
                  return false;
                }
              }
              case 3: {
                const _Str = a;
                const _x$3 = _Str._0;
                if (b.$tag === 3) {
                  const _Str$2 = b;
                  const _y = _Str$2._0;
                  x$3 = _x$3;
                  y$3 = _y;
                  break _L$3;
                } else {
                  return false;
                }
              }
              case 4: {
                const _Arr = a;
                const _x$4 = _Arr._0;
                if (b.$tag === 4) {
                  const _Arr$2 = b;
                  const _y = _Arr$2._0;
                  x$2 = _x$4;
                  y$2 = _y;
                  break _L$2;
                } else {
                  return false;
                }
              }
              default: {
                const _Obj = a;
                const _x$5 = _Obj._0;
                if (b.$tag === 5) {
                  const _Obj$2 = b;
                  const _y = _Obj$2._0;
                  x = _x$5;
                  y = _y;
                  break _L;
                } else {
                  return false;
                }
              }
            }
          }
          return x$5 === y$5;
        }
        return x$4 === y$4;
      }
      return x$3 === y$3;
    }
    return _M0FP28typegate8typegate11arr__equals(x$2, y$2);
  }
  return _M0FP28typegate8typegate11obj__equals(x, y);
}
function _M0FP28typegate8typegate11arr__equals(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    const i = new _M0TPB8MutLocalGiE(0);
    const ok = new _M0TPB8MutLocalGbE(true);
    while (true) {
      if (i.val < a.length && ok.val) {
        if (!_M0FP28typegate8typegate6equals(_M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(a, i.val), _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(b, i.val))) {
          ok.val = false;
        }
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return ok.val;
  }
}
function _M0FP28typegate8typegate11obj__equals(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    const i = new _M0TPB8MutLocalGiE(0);
    const ok = new _M0TPB8MutLocalGbE(true);
    while (true) {
      if (i.val < a.length && ok.val) {
        let ka;
        let va;
        _L: {
          const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(a, i.val);
          const _ka = _bind._0;
          const _va = _bind._1;
          ka = _ka;
          va = _va;
          break _L;
        }
        let kb;
        let vb;
        _L$2: {
          const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(b, i.val);
          const _kb = _bind._0;
          const _vb = _bind._1;
          kb = _kb;
          vb = _vb;
          break _L$2;
        }
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(ka, kb) || !_M0FP28typegate8typegate6equals(va, vb)) {
          ok.val = false;
        }
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return ok.val;
  }
}
function _M0FP28typegate8typegate15char__in__class(pat, pi, pe, c) {
  const k = new _M0TPB8MutLocalGiE(pi + 1 | 0);
  const neg = new _M0TPB8MutLocalGbE(false);
  let _tmp;
  if (k.val < pe) {
    const _tmp$2 = k.val;
    _tmp = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$2 >>> 0 < pat.length ? pat.charCodeAt(_tmp$2) : $oob(), 94);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    neg.val = true;
    k.val = k.val + 1 | 0;
  }
  const matched = new _M0TPB8MutLocalGbE(false);
  while (true) {
    if (k.val < (pe - 1 | 0)) {
      let _tmp$2;
      if ((k.val + 2 | 0) < (pe - 1 | 0)) {
        const _tmp$3 = k.val + 1 | 0;
        _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < pat.length ? pat.charCodeAt(_tmp$3) : $oob(), 45);
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        let _tmp$3;
        const _tmp$4 = k.val;
        if (c >= (_tmp$4 >>> 0 < pat.length ? pat.charCodeAt(_tmp$4) : $oob())) {
          const _tmp$5 = k.val + 2 | 0;
          _tmp$3 = c <= (_tmp$5 >>> 0 < pat.length ? pat.charCodeAt(_tmp$5) : $oob());
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          matched.val = true;
        }
        k.val = k.val + 3 | 0;
      } else {
        const _tmp$3 = k.val;
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, _tmp$3 >>> 0 < pat.length ? pat.charCodeAt(_tmp$3) : $oob())) {
          matched.val = true;
        }
        k.val = k.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return neg.val ? !matched.val : matched.val;
}
function _M0FP28typegate8typegate16find__class__end(pat, pi) {
  const k = new _M0TPB8MutLocalGiE(pi + 1 | 0);
  let _tmp;
  if (k.val < pat.length) {
    const _tmp$2 = k.val;
    _tmp = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$2 >>> 0 < pat.length ? pat.charCodeAt(_tmp$2) : $oob(), 94);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    k.val = k.val + 1 | 0;
  }
  let _tmp$2;
  if (k.val < pat.length) {
    const _tmp$3 = k.val;
    _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < pat.length ? pat.charCodeAt(_tmp$3) : $oob(), 93);
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    k.val = k.val + 1 | 0;
  }
  while (true) {
    if (k.val < pat.length) {
      const _tmp$3 = k.val;
      if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < pat.length ? pat.charCodeAt(_tmp$3) : $oob(), 93)) {
        return k.val + 1 | 0;
      }
      k.val = k.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function _M0FP28typegate8typegate12single__char(pc, tc) {
  return _M0IPC16uint166UInt16PB2Eq5equal(pc, 46) || _M0IPC16uint166UInt16PB2Eq5equal(pc, tc);
}
function _M0FP28typegate8typegate11match__here(pat, pi, text, ti) {
  let _tmp = pat;
  let _tmp$2 = pi;
  let _tmp$3 = text;
  let _tmp$4 = ti;
  while (true) {
    const pat$2 = _tmp;
    const pi$2 = _tmp$2;
    const text$2 = _tmp$3;
    const ti$2 = _tmp$4;
    if (pi$2 >= pat$2.length) {
      return true;
    } else {
      if (_M0IPC16uint166UInt16PB2Eq5equal(pi$2 >>> 0 < pat$2.length ? pat$2.charCodeAt(pi$2) : $oob(), 36)) {
        return ti$2 === text$2.length;
      } else {
        let _tmp$5;
        if ((pi$2 + 1 | 0) < pat$2.length) {
          const _tmp$6 = pi$2 + 1 | 0;
          _tmp$5 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$6 >>> 0 < pat$2.length ? pat$2.charCodeAt(_tmp$6) : $oob(), 42);
        } else {
          _tmp$5 = false;
        }
        if (_tmp$5) {
          return _M0FP28typegate8typegate11match__star(pi$2 >>> 0 < pat$2.length ? pat$2.charCodeAt(pi$2) : $oob(), pat$2, pi$2 + 2 | 0, text$2, ti$2);
        } else {
          let _tmp$6;
          if ((pi$2 + 1 | 0) < pat$2.length) {
            const _tmp$7 = pi$2 + 1 | 0;
            _tmp$6 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$7 >>> 0 < pat$2.length ? pat$2.charCodeAt(_tmp$7) : $oob(), 43);
          } else {
            _tmp$6 = false;
          }
          if (_tmp$6) {
            return _M0FP28typegate8typegate11match__plus(pi$2 >>> 0 < pat$2.length ? pat$2.charCodeAt(pi$2) : $oob(), pat$2, pi$2 + 2 | 0, text$2, ti$2);
          } else {
            let _tmp$7;
            if ((pi$2 + 1 | 0) < pat$2.length) {
              const _tmp$8 = pi$2 + 1 | 0;
              _tmp$7 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$8 >>> 0 < pat$2.length ? pat$2.charCodeAt(_tmp$8) : $oob(), 63);
            } else {
              _tmp$7 = false;
            }
            if (_tmp$7) {
              if (_M0FP28typegate8typegate11match__here(pat$2, pi$2 + 2 | 0, text$2, ti$2)) {
                return true;
              } else {
                let _tmp$8;
                if (ti$2 < text$2.length) {
                  let _tmp$9;
                  if (_M0FP28typegate8typegate12single__char(pi$2 >>> 0 < pat$2.length ? pat$2.charCodeAt(pi$2) : $oob(), ti$2 >>> 0 < text$2.length ? text$2.charCodeAt(ti$2) : $oob())) {
                    _tmp$2 = pi$2 + 2 | 0;
                    _tmp$4 = ti$2 + 1 | 0;
                    continue;
                  } else {
                    _tmp$9 = false;
                  }
                  _tmp$8 = _tmp$9;
                } else {
                  _tmp$8 = false;
                }
                return _tmp$8;
              }
            } else {
              if (_M0IPC16uint166UInt16PB2Eq5equal(pi$2 >>> 0 < pat$2.length ? pat$2.charCodeAt(pi$2) : $oob(), 91)) {
                return _M0FP28typegate8typegate12match__class(pat$2, pi$2, text$2, ti$2);
              } else {
                if (ti$2 < text$2.length && _M0FP28typegate8typegate12single__char(pi$2 >>> 0 < pat$2.length ? pat$2.charCodeAt(pi$2) : $oob(), ti$2 >>> 0 < text$2.length ? text$2.charCodeAt(ti$2) : $oob())) {
                  _tmp$2 = pi$2 + 1 | 0;
                  _tmp$4 = ti$2 + 1 | 0;
                  continue;
                } else {
                  return false;
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0FP28typegate8typegate12match__class(pat, pi, text, ti) {
  const end = _M0FP28typegate8typegate16find__class__end(pat, pi);
  return end < 0 ? false : end < pat.length && (_M0IPC16uint166UInt16PB2Eq5equal(end >>> 0 < pat.length ? pat.charCodeAt(end) : $oob(), 42) || (_M0IPC16uint166UInt16PB2Eq5equal(end >>> 0 < pat.length ? pat.charCodeAt(end) : $oob(), 43) || _M0IPC16uint166UInt16PB2Eq5equal(end >>> 0 < pat.length ? pat.charCodeAt(end) : $oob(), 63))) ? _M0FP28typegate8typegate19match__class__quant(pat, pi, end, end >>> 0 < pat.length ? pat.charCodeAt(end) : $oob(), text, ti) : ti < text.length && _M0FP28typegate8typegate15char__in__class(pat, pi, end, ti >>> 0 < text.length ? text.charCodeAt(ti) : $oob()) ? _M0FP28typegate8typegate11match__here(pat, end, text, ti + 1 | 0) : false;
}
function _M0FP28typegate8typegate19match__class__quant(pat, pi, end, q, text, ti) {
  let _tmp = pat;
  let _tmp$2 = pi;
  let _tmp$3 = end;
  let _tmp$4 = q;
  let _tmp$5 = text;
  let _tmp$6 = ti;
  while (true) {
    const pat$2 = _tmp;
    const pi$2 = _tmp$2;
    const end$2 = _tmp$3;
    const q$2 = _tmp$4;
    const text$2 = _tmp$5;
    const ti$2 = _tmp$6;
    if (_M0IPC16uint166UInt16PB2Eq5equal(q$2, 42)) {
      const k = new _M0TPB8MutLocalGiE(ti$2);
      while (true) {
        if (k.val <= text$2.length) {
          if (_M0FP28typegate8typegate11match__here(pat$2, end$2 + 1 | 0, text$2, k.val)) {
            return true;
          }
          let _tmp$7;
          if (k.val < text$2.length) {
            const _tmp$8 = k.val;
            _tmp$7 = _M0FP28typegate8typegate15char__in__class(pat$2, pi$2, end$2, _tmp$8 >>> 0 < text$2.length ? text$2.charCodeAt(_tmp$8) : $oob());
          } else {
            _tmp$7 = false;
          }
          if (_tmp$7) {
            k.val = k.val + 1 | 0;
          } else {
            break;
          }
          continue;
        } else {
          break;
        }
      }
      return false;
    } else {
      if (_M0IPC16uint166UInt16PB2Eq5equal(q$2, 43)) {
        if (ti$2 < text$2.length && _M0FP28typegate8typegate15char__in__class(pat$2, pi$2, end$2, ti$2 >>> 0 < text$2.length ? text$2.charCodeAt(ti$2) : $oob())) {
          _tmp$4 = 42;
          _tmp$6 = ti$2 + 1 | 0;
          continue;
        } else {
          return false;
        }
      } else {
        return _M0FP28typegate8typegate11match__here(pat$2, end$2 + 1 | 0, text$2, ti$2) || ti$2 < text$2.length && (_M0FP28typegate8typegate15char__in__class(pat$2, pi$2, end$2, ti$2 >>> 0 < text$2.length ? text$2.charCodeAt(ti$2) : $oob()) && _M0FP28typegate8typegate11match__here(pat$2, end$2 + 1 | 0, text$2, ti$2 + 1 | 0));
      }
    }
  }
}
function _M0FP28typegate8typegate11match__plus(c, pat, pi, text, ti) {
  return ti < text.length && _M0FP28typegate8typegate12single__char(c, ti >>> 0 < text.length ? text.charCodeAt(ti) : $oob()) ? _M0FP28typegate8typegate11match__star(c, pat, pi, text, ti + 1 | 0) : false;
}
function _M0FP28typegate8typegate11match__star(c, pat, pi, text, ti) {
  const k = new _M0TPB8MutLocalGiE(ti);
  while (true) {
    if (k.val <= text.length) {
      if (_M0FP28typegate8typegate11match__here(pat, pi, text, k.val)) {
        return true;
      }
      let _tmp;
      if (k.val < text.length) {
        const _tmp$2 = k.val;
        _tmp = _M0FP28typegate8typegate12single__char(c, _tmp$2 >>> 0 < text.length ? text.charCodeAt(_tmp$2) : $oob());
      } else {
        _tmp = false;
      }
      if (_tmp) {
        k.val = k.val + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP28typegate8typegate12regex__match(pattern, text) {
  if (pattern.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < pattern.length ? pattern.charCodeAt(0) : $oob(), 94)) {
    return _M0FP28typegate8typegate11match__here(pattern, 1, text, 0);
  } else {
    const ti = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (ti.val <= text.length) {
        if (_M0FP28typegate8typegate11match__here(pattern, 0, text, ti.val)) {
          return true;
        }
        ti.val = ti.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
}
function _M0FP28typegate8typegate14validate__enum(vals, v) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < vals.length) {
      if (_M0FP28typegate8typegate6equals(_M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(vals, i.val), v)) {
        return undefined;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return "value not in enum";
}
function _M0FP28typegate8typegate10find__prop(props, key) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < props.length) {
      let k;
      let s;
      _L: {
        const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(props, i.val);
        const _k = _bind._0;
        const _s = _bind._1;
        k = _k;
        s = _s;
        break _L;
      }
      if (k === key) {
        return s;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP28typegate8typegate10has__field(fields, key) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < fields.length) {
      let k;
      _L: {
        const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(fields, i.val);
        const _k = _bind._0;
        k = _k;
        break _L;
      }
      if (k === key) {
        return true;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP28typegate8typegate8validate(schema, value) {
  _L: {
    let re;
    let s;
    _L$2: {
      let vals;
      let v;
      _L$3: {
        let req;
        let props;
        let fields;
        _L$4: {
          let item;
          let items;
          _L$5: {
            switch (schema.$tag) {
              case 0: {
                return undefined;
              }
              case 1: {
                if (value.$tag === 0) {
                  return undefined;
                } else {
                  break _L;
                }
              }
              case 2: {
                if (value.$tag === 1) {
                  return undefined;
                } else {
                  break _L;
                }
              }
              case 3: {
                if (value.$tag === 2) {
                  return undefined;
                } else {
                  break _L;
                }
              }
              case 4: {
                if (value.$tag === 3) {
                  return undefined;
                } else {
                  break _L;
                }
              }
              case 5: {
                const _SArray = schema;
                const _item = _SArray._0;
                if (value.$tag === 4) {
                  const _Arr = value;
                  const _items = _Arr._0;
                  item = _item;
                  items = _items;
                  break _L$5;
                } else {
                  break _L;
                }
              }
              case 6: {
                const _SObject = schema;
                const _props = _SObject._0;
                const _req = _SObject._1;
                if (value.$tag === 5) {
                  const _Obj = value;
                  const _fields = _Obj._0;
                  req = _req;
                  props = _props;
                  fields = _fields;
                  break _L$4;
                } else {
                  break _L;
                }
              }
              case 7: {
                const _SEnum = schema;
                const _vals = _SEnum._0;
                vals = _vals;
                v = value;
                break _L$3;
              }
              default: {
                const _SPattern = schema;
                const _re = _SPattern._0;
                if (value.$tag === 3) {
                  const _Str = value;
                  const _s = _Str._0;
                  re = _re;
                  s = _s;
                  break _L$2;
                } else {
                  break _L;
                }
              }
            }
          }
          return _M0FP28typegate8typegate15validate__array(item, items);
        }
        return _M0FP28typegate8typegate16validate__object(props, req, fields);
      }
      return _M0FP28typegate8typegate14validate__enum(vals, v);
    }
    return _M0FP28typegate8typegate12regex__match(re, s) ? undefined : "string does not match pattern";
  }
  return "type mismatch";
}
function _M0FP28typegate8typegate15validate__array(item, items) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < items.length) {
      let e;
      _L: {
        _L$2: {
          const _bind = _M0FP28typegate8typegate8validate(item, _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(items, i.val));
          if (_bind === undefined) {
            i.val = i.val + 1 | 0;
          } else {
            const _Some = _bind;
            const _e = _Some;
            e = _e;
            break _L$2;
          }
          break _L;
        }
        return `array item ${_M0MPC13int3Int18to__string_2einner(i.val, 10)}: ${e}`;
      }
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP28typegate8typegate16validate__object(props, req, fields) {
  const r = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (r.val < req.length) {
      if (!_M0FP28typegate8typegate10has__field(fields, _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(req, r.val))) {
        return `missing required field: ${_M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(req, r.val)}`;
      }
      r.val = r.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const f = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (f.val < fields.length) {
      let key;
      let val;
      _L: {
        const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(fields, f.val);
        const _key = _bind._0;
        const _val = _bind._1;
        key = _key;
        val = _val;
        break _L;
      }
      let schema;
      _L$2: {
        _L$3: {
          const _bind = _M0FP28typegate8typegate10find__prop(props, key);
          if (_bind === undefined) {
            f.val = f.val + 1 | 0;
          } else {
            const _Some = _bind;
            const _schema = _Some;
            schema = _schema;
            break _L$3;
          }
          break _L$2;
        }
        let e;
        _L$4: {
          _L$5: {
            const _bind = _M0FP28typegate8typegate8validate(schema, val);
            if (_bind === undefined) {
              f.val = f.val + 1 | 0;
            } else {
              const _Some = _bind;
              const _e = _Some;
              e = _e;
              break _L$5;
            }
            break _L$4;
          }
          return `field '${key}': ${e}`;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP28typegate8typegate10get__field(fields, key) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < fields.length) {
      let k;
      let v;
      _L: {
        const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(fields, i.val);
        const _k = _bind._0;
        const _v = _bind._1;
        k = _k;
        v = _v;
        break _L;
      }
      if (k === key) {
        return v;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP28typegate8typegate8get__str(fields, key) {
  let s;
  _L: {
    const _bind = _M0FP28typegate8typegate10get__field(fields, key);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.$tag === 3) {
        const _Str = _x;
        const _s = _Str._0;
        s = _s;
        break _L;
      } else {
        return undefined;
      }
    }
  }
  return s;
}
function _M0FP28typegate8typegate15parse__required(fields) {
  const result = [];
  let items;
  _L: {
    const _bind = _M0FP28typegate8typegate10get__field(fields, "required");
    if (_bind === undefined) {
      return result;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.$tag === 4) {
        const _Arr = _x;
        const _items = _Arr._0;
        items = _items;
        break _L;
      } else {
        return result;
      }
    }
  }
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < items.length) {
      let s;
      _L$2: {
        _L$3: {
          const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(items, i.val);
          if (_bind.$tag === 3) {
            const _Str = _bind;
            const _s = _Str._0;
            s = _s;
            break _L$3;
          }
          break _L$2;
        }
        _M0MPC15array5Array4pushGUsRP28typegate8typegate6SchemaEE(result, s);
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP28typegate8typegate10from__json(schema) {
  let fields;
  _L: {
    if (schema.$tag === 5) {
      const _Obj = schema;
      const _fields = _Obj._0;
      fields = _fields;
      break _L;
    } else {
      return _M0DTP28typegate8typegate6Schema3Any__;
    }
  }
  let typ;
  const _bind = _M0FP28typegate8typegate8get__str(fields, "type");
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _t = _Some;
    typ = _t;
  }
  if (typ === "object") {
    const props = _M0FP28typegate8typegate12parse__props(fields);
    const req = _M0FP28typegate8typegate15parse__required(fields);
    return new _M0DTP28typegate8typegate6Schema7SObject(props, req);
  } else {
    if (typ === "array") {
      let item_schema;
      _L$2: {
        const _bind$2 = _M0FP28typegate8typegate10get__field(fields, "items");
        if (_bind$2 === undefined) {
          return new _M0DTP28typegate8typegate6Schema6SArray(_M0DTP28typegate8typegate6Schema3Any__);
        } else {
          const _Some = _bind$2;
          const _item_schema = _Some;
          item_schema = _item_schema;
          break _L$2;
        }
      }
      let item;
      _L$3: {
        const _bind$2 = _M0FP28typegate8typegate10from__json(item_schema);
        if (_bind$2 === undefined) {
          return undefined;
        } else {
          const _Some = _bind$2;
          const _item = _Some;
          item = _item;
          break _L$3;
        }
      }
      return new _M0DTP28typegate8typegate6Schema6SArray(item);
    } else {
      if (typ === "string") {
        let re;
        _L$2: {
          const _bind$2 = _M0FP28typegate8typegate8get__str(fields, "pattern");
          if (_bind$2 === undefined) {
            return _M0DTP28typegate8typegate6Schema7SString__;
          } else {
            const _Some = _bind$2;
            const _re = _Some;
            re = _re;
            break _L$2;
          }
        }
        return new _M0DTP28typegate8typegate6Schema8SPattern(re);
      } else {
        return typ === "number" ? _M0DTP28typegate8typegate6Schema7SNumber__ : typ === "boolean" ? _M0DTP28typegate8typegate6Schema5SBool__ : typ === "null" ? _M0DTP28typegate8typegate6Schema5SNull__ : _M0DTP28typegate8typegate6Schema3Any__;
      }
    }
  }
}
function _M0FP28typegate8typegate12parse__props(fields) {
  const result = [];
  let props;
  _L: {
    const _bind = _M0FP28typegate8typegate10get__field(fields, "properties");
    if (_bind === undefined) {
      return result;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.$tag === 5) {
        const _Obj = _x;
        const _props = _Obj._0;
        props = _props;
        break _L;
      } else {
        return result;
      }
    }
  }
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < props.length) {
      let key;
      let val;
      _L$2: {
        const _bind = _M0MPC15array5Array2atGRP28typegate8typegate9JsonValueE(props, i.val);
        const _key = _bind._0;
        const _val = _bind._1;
        key = _key;
        val = _val;
        break _L$2;
      }
      let s;
      _L$3: {
        _L$4: {
          const _bind = _M0FP28typegate8typegate10from__json(val);
          if (_bind === undefined) {
            i.val = i.val + 1 | 0;
          } else {
            const _Some = _bind;
            const _s = _Some;
            s = _s;
            break _L$4;
          }
          break _L$3;
        }
        _M0MPC15array5Array4pushGUsRP28typegate8typegate6SchemaEE(result, { _0: key, _1: s });
        i.val = i.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP28typegate8typegate19is__literal__prefix(w) {
  return _M0MPC16string6String11has__prefix("true", new _M0TPC16string10StringView(w, 0, w.length)) || (_M0MPC16string6String11has__prefix("false", new _M0TPC16string10StringView(w, 0, w.length)) || _M0MPC16string6String11has__prefix("null", new _M0TPC16string10StringView(w, 0, w.length)));
}
function _M0FP28typegate8typegate3sub(s, i, j) {
  const buf = new _M0TPB8MutLocalGsE("");
  const k = new _M0TPB8MutLocalGiE(i);
  while (true) {
    if (k.val < j) {
      const _tmp = buf.val;
      const _tmp$2 = k.val;
      buf.val = `${_tmp}${_M0FP28typegate8typegate7ch__str(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob())}`;
      k.val = k.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function _M0FP28typegate8typegate17classify__literal(s, i) {
  const n = s.length;
  const k = new _M0TPB8MutLocalGiE(i);
  while (true) {
    if (k.val < n && k.val < (i + 5 | 0)) {
      const _tmp = k.val;
      const c = _tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob();
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 116) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 114) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 117) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 101) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 102) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 97) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 108) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 115) || _M0IPC16uint166UInt16PB2Eq5equal(c, 110))))))))) {
        k.val = k.val + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const word = _M0FP28typegate8typegate3sub(s, i, k.val);
  return _M0FP28typegate8typegate19is__literal__prefix(word) ? (word === "true" || (word === "false" || word === "null") ? { _0: 2, _1: k.val } : { _0: 1, _1: k.val }) : { _0: 0, _1: i };
}
function _M0FP28typegate8typegate16classify__number(s, i) {
  const k = new _M0TPB8MutLocalGiE(i);
  while (true) {
    if (k.val < s.length) {
      const _tmp = k.val;
      const c = _tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob();
      if (_M0FP28typegate8typegate9is__digit(c) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 45) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 43) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 46) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 101) || _M0IPC16uint166UInt16PB2Eq5equal(c, 69)))))) {
        k.val = k.val + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return { _0: 2, _1: k.val };
}
function _M0FP28typegate8typegate16classify__string(s, i) {
  const k = new _M0TPB8MutLocalGiE(i + 1 | 0);
  while (true) {
    if (k.val >= s.length) {
      return { _0: 1, _1: k.val };
    }
    const _tmp = k.val;
    const c = _tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob();
    if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
      return { _0: 2, _1: k.val + 1 | 0 };
    } else {
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
        if ((k.val + 1 | 0) >= s.length) {
          return { _0: 1, _1: k.val + 1 | 0 };
        }
        k.val = k.val + 2 | 0;
      } else {
        k.val = k.val + 1 | 0;
      }
    }
    continue;
  }
}
function _M0FP28typegate8typegate15classify__value(s, i) {
  if (i >= s.length) {
    return { _0: 1, _1: i };
  } else {
    const c = i >>> 0 < s.length ? s.charCodeAt(i) : $oob();
    return _M0IPC16uint166UInt16PB2Eq5equal(c, 123) ? _M0FP28typegate8typegate16classify__object(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 91) ? _M0FP28typegate8typegate15classify__array(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 34) ? _M0FP28typegate8typegate16classify__string(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 116) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 102) || _M0IPC16uint166UInt16PB2Eq5equal(c, 110)) ? _M0FP28typegate8typegate17classify__literal(s, i) : _M0IPC16uint166UInt16PB2Eq5equal(c, 45) || _M0FP28typegate8typegate9is__digit(c) ? _M0FP28typegate8typegate16classify__number(s, i) : { _0: 0, _1: i };
  }
}
function _M0FP28typegate8typegate15classify__array(s, i) {
  const k = new _M0TPB8MutLocalGiE(i + 1 | 0);
  while (true) {
    k.val = _M0FP28typegate8typegate8skip__ws(s, k.val);
    if (k.val >= s.length) {
      return { _0: 1, _1: k.val };
    }
    const _tmp = k.val;
    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob(), 93)) {
      return { _0: 2, _1: k.val + 1 | 0 };
    }
    let vst;
    let vend;
    _L: {
      const _bind = _M0FP28typegate8typegate15classify__value(s, k.val);
      const _vst = _bind._0;
      const _vend = _bind._1;
      vst = _vst;
      vend = _vend;
      break _L;
    }
    if (vst !== 2) {
      return { _0: vst, _1: vend };
    }
    k.val = _M0FP28typegate8typegate8skip__ws(s, vend);
    let _tmp$2;
    if (k.val < s.length) {
      const _tmp$3 = k.val;
      _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 44);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      k.val = k.val + 1 | 0;
    }
    continue;
  }
}
function _M0FP28typegate8typegate16classify__object(s, i) {
  const k = new _M0TPB8MutLocalGiE(i + 1 | 0);
  while (true) {
    k.val = _M0FP28typegate8typegate8skip__ws(s, k.val);
    if (k.val >= s.length) {
      return { _0: 1, _1: k.val };
    }
    const _tmp = k.val;
    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob(), 125)) {
      return { _0: 2, _1: k.val + 1 | 0 };
    }
    let kst;
    let kend;
    _L: {
      const _bind = _M0FP28typegate8typegate16classify__string(s, k.val);
      const _kst = _bind._0;
      const _kend = _bind._1;
      kst = _kst;
      kend = _kend;
      break _L;
    }
    if (kst !== 2) {
      return { _0: kst, _1: kend };
    }
    k.val = _M0FP28typegate8typegate8skip__ws(s, kend);
    if (k.val >= s.length) {
      return { _0: 1, _1: k.val };
    }
    const _tmp$2 = k.val;
    if (_M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob(), 58)) {
      return { _0: 0, _1: k.val };
    }
    k.val = _M0FP28typegate8typegate8skip__ws(s, k.val + 1 | 0);
    let vst;
    let vend;
    _L$2: {
      const _bind = _M0FP28typegate8typegate15classify__value(s, k.val);
      const _vst = _bind._0;
      const _vend = _bind._1;
      vst = _vst;
      vend = _vend;
      break _L$2;
    }
    if (vst !== 2) {
      return { _0: vst, _1: vend };
    }
    k.val = _M0FP28typegate8typegate8skip__ws(s, vend);
    let _tmp$3;
    if (k.val < s.length) {
      const _tmp$4 = k.val;
      _tmp$3 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob(), 44);
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      k.val = k.val + 1 | 0;
    }
    continue;
  }
}
function _M0FP28typegate8typegate8classify(s) {
  const i = _M0FP28typegate8typegate8skip__ws(s, 0);
  const _bind = _M0FP28typegate8typegate15classify__value(s, i);
  const _st = _bind._0;
  return _st;
}
function _M0FP28typegate8typegate18valid__next__chars(s) {
  const candidates = "{}[]\",:0123456789-+.eEtruefalsn \t\n\r";
  const result = new _M0TPB8MutLocalGsE("");
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < candidates.length) {
      const _tmp = i.val;
      const c = _tmp >>> 0 < candidates.length ? candidates.charCodeAt(_tmp) : $oob();
      if (_M0FP28typegate8typegate8classify(`${s}${_M0FP28typegate8typegate7ch__str(c)}`) !== 0) {
        result.val = `${result.val}${_M0FP28typegate8typegate7ch__str(c)}`;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result.val;
}
function _M0FP28typegate8typegate14validate__json(schema_json, data_json) {
  let e;
  _L: {
    let schema_val;
    _L$2: {
      const _bind = _M0FP28typegate8typegate5parse(schema_json);
      if (_bind.$tag === 0) {
        const _Ok = _bind;
        const _schema_val = _Ok._0;
        schema_val = _schema_val;
        break _L$2;
      } else {
        const _Err = _bind;
        const _e = _Err._0;
        e = _e;
        break _L;
      }
    }
    let schema;
    _L$3: {
      const _bind = _M0FP28typegate8typegate10from__json(schema_val);
      if (_bind === undefined) {
        return "invalid schema";
      } else {
        const _Some = _bind;
        const _schema = _Some;
        schema = _schema;
        break _L$3;
      }
    }
    let e$2;
    _L$4: {
      let data_val;
      _L$5: {
        const _bind = _M0FP28typegate8typegate5parse(data_json);
        if (_bind.$tag === 0) {
          const _Ok = _bind;
          const _data_val = _Ok._0;
          data_val = _data_val;
          break _L$5;
        } else {
          const _Err = _bind;
          const _e = _Err._0;
          e$2 = _e;
          break _L$4;
        }
      }
      const _bind = _M0FP28typegate8typegate8validate(schema, data_val);
      if (_bind === undefined) {
        return "";
      } else {
        const _Some = _bind;
        const _e = _Some;
        return _e;
      }
    }
    return `data parse error: ${e$2}`;
  }
  return `schema parse error: ${e}`;
}
function _M0FP28typegate8typegate12regex__check(pattern, text) {
  return _M0FP28typegate8typegate12regex__match(pattern, text);
}
function _M0FP28typegate8typegate14classify__json(text) {
  return _M0FP28typegate8typegate8classify(text);
}
function _M0FP28typegate8typegate11next__chars(text) {
  return _M0FP28typegate8typegate18valid__next__chars(text);
}
function _M0FP28typegate8typegate11json__valid(text) {
  const _bind = _M0FP28typegate8typegate5parse(text);
  if (_bind.$tag === 0) {
    return true;
  } else {
    return false;
  }
}
export { _M0FP28typegate8typegate14validate__json as validate_json, _M0FP28typegate8typegate12regex__check as regex_check, _M0FP28typegate8typegate14classify__json as classify_json, _M0FP28typegate8typegate11next__chars as next_chars, _M0FP28typegate8typegate11json__valid as json_valid }
//# sourceMappingURL=typegate.js.map
