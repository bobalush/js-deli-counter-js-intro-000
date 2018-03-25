// var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  }
var i = 0;
var results = "";
  while (i < line.length) {
    results = `${i+1}. ${line[i],}`;
    i += 1;
  }
  return `The line is currently: ${results}.`;
}
