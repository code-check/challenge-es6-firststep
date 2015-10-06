export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

  isUpperCase(c) {
    return c !== c.toLowerCase();
  }
}

export class CaesarCipher extends Cipher {

  constructor(shift, strs = "abcdefghijklmnopqrstuvwxyz") {
    super();
    this.shift = shift;
    this.strs = strs;
  }

  encrypt(str) {
    var ret = "";
    for (let i=0; i<str.length; i++) {
      let c = str.charAt(i);
      let index = this.strs.indexOf(c.toLowerCase());
      if (index === -1) {
        ret += c;
      } else {
        index += this.shift;
        if (index >= this.strs.length) {
          index -= this.strs.length;
        }
        let c2 = this.strs.charAt(index);
        if (this.isUpperCase(c)) {
          c2 = c2.toUpperCase();
        }
        ret += c2;
      }
    }
    return ret;
  }

  decrypt(str) {
    var ret = "";
    for (let i=0; i<str.length; i++) {
      let c = str.charAt(i);
      let index = this.strs.indexOf(c.toLowerCase());
      if (index === -1) {
        ret += c;
      } else {
        index -= this.shift;
        if (index < 0) {
          index += this.strs.length;
        }
        let c2 = this.strs.charAt(index);
        if (this.isUpperCase(c)) {
          c2 = c2.toUpperCase();
        }
        ret += c2;
      }
    }
    return ret;
  }
}

export class SimpleSubstitutionCipher extends Cipher {

  constructor(strs = "abcdefghijklmnopqrstuvwxyz", converted = "zebrascdfghijklmnopqtuvwxy") {
    super();
    this.strs = strs;
    this.converted = converted;
  }

  encrypt(str) {
    var ret = "";
    for (let i=0; i<str.length; i++) {
      let c = str.charAt(i);
      let index = this.strs.indexOf(c.toLowerCase());
      if (index === -1) {
        ret += c;
      } else {
        let c2 = this.converted.charAt(index);
        if (this.isUpperCase(c)) {
          c2 = c2.toUpperCase();
        }
        ret += c2;
      }
    }
    return ret;
  }

  decrypt(str) {
    var ret = "";
    for (let i=0; i<str.length; i++) {
      let c = str.charAt(i);
      let index = this.converted.indexOf(c.toLowerCase());
      if (index === -1) {
        ret += c;
      } else {
        let c2 = this.strs.charAt(index);
        if (this.isUpperCase(c)) {
          c2 = c2.toUpperCase();
        }
        ret += c2;
      }
    }
    return ret;
  }
}

