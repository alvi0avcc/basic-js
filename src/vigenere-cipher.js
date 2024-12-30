const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct; 
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charIndex = this.letters.indexOf(char);
      if (charIndex !== -1) {
        const keyCharIndex = this.letters.indexOf(key[keyIndex % key.length]);
        const encryptedCharIndex = (charIndex + keyCharIndex) % this.letters.length;
        result.push(this.letters[encryptedCharIndex]);
        keyIndex++;
      } else {
        result.push(char);
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
  decrypt(cryptedMessage, key) {
    if (!cryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    cryptedMessage = cryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;
    for (let i = 0; i < cryptedMessage.length; i++) {
      const cryptedChar = cryptedMessage[i];
        const encryptedCharIndex = this.letters.indexOf(cryptedChar);
      if (encryptedCharIndex !== -1) {
        const keyCharIndex = this.letters.indexOf(key[keyIndex % key.length]);
        const decryptedCharIndex = (encryptedCharIndex - keyCharIndex + this.letters.length) % this.letters.length;
        result.push(this.letters[decryptedCharIndex]);
        keyIndex++;
      } else {
        result.push(cryptedChar);
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
