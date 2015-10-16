export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

  //BEGIN_CHALLENGE
  isUpperCase(c) {
    return c.toLowerCase() !== c;
  }
  //END_CHALLENGE
}

export class CaesarCipher extends Cipher {

  //BEGIN_CHALLENGE
  constructor(shift, strs = "abcdefghijklmnopqrstuvwxyz") {
    super();
    this.shift = shift;
    this.strs = strs;
  }

  encrypt(str) {
    return str.split("").map(c => {
      const index = this.strs.indexOf(c.toLowerCase());
      if (index === -1) {
        return c;
      } else {
        let index2 = index + this.shift;
        if (index2 >= this.strs.length) {
          index2 -= this.strs.length;
        }
        let result = this.strs.charAt(index2);
        return this.isUpperCase(c) ? result.toUpperCase() : result;
      }
    }).join("");
  }

  decrypt(str) {
    return str.split("").map(c => {
      const index = this.strs.indexOf(c.toLowerCase());
      if (index === -1) {
        return c;
      } else {
        let index2 = index - this.shift;
        if (index2 < 0) {
          index2 += this.strs.length;
        }
        let result = this.strs.charAt(index2);
        return this.isUpperCase(c) ? result.toUpperCase() : result;
      }
    }).join("");
  }
  //END_CHALLENGE
}

