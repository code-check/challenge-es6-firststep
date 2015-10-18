import {assert} from 'chai';
import {CaesarCipher} from '../target/cipher';

describe("Q5 - extra", () => {

  it("test1", () => {
    const cipher = new CaesarCipher(5);
    var ret = cipher.encrypt("Hello World!");
    assert.equal(ret , "Mjqqt Btwqi!");
  });

  it("test2", () => {
    const cipher = new CaesarCipher(5);
    var ret = cipher.decrypt("Mjqqt Btwqi!");
    assert.equal(ret , "Hello World!");
  });

  it("test3", () => {
    const cipher = new CaesarCipher(26);
    var ret = cipher.encrypt("Hello World!");
    assert.equal(ret , "Hello World!");
  });

  it("test4", () => {
    const cipher = new CaesarCipher(26);
    var ret = cipher.encrypt("Hello World!");
    assert.equal(ret , "Hello World!");
  });
});

