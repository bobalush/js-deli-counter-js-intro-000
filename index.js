// var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  var i = 0;
  while (i < katzDeliLine.length) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i} in line.`;
    }
    i += 1;
  }
}
