const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let finalString = "";
  for (let i = 0; i < expr.length; i += 10) {
    let tenPart = expr.slice(i, i + 10);
    // console.log(tenPart);
    let dotString = "";
    if (tenPart == "**********") {
      finalString += " ";
    } else {
      for (let i = 0; i <= 10; i += 2) {
        let sim = tenPart.slice(i, i + 2);
        if (sim == "10") {
          dotString += ".";
        } else if (sim == "11") {
          dotString += "-";
        }
      }
    //   console.log(dotString);
      finalString += MORSE_TABLE[dotString];
    }
  }
  return finalString;
}

module.exports = {
  decode,
};
