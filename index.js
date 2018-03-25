function takeANumber(katzDeliLine, name) {
  var i = 0;
  while (i < katzDeliLine.length) {
    if (katzDeliLine[i] === name) {
      return i + 1;
    }
    i += 1;
  }
  return i;
}