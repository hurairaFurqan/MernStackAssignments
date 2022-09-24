let arrOfDigits = [];
let s_data = "";
let op = "";
let hist = [];
function display(digit) {
  //arrOfDigits.push(digit);
  document.getElementById("result").value += digit;
}
function splitSimpleEq() {
  arrOfDigits = s_data.split(op);
}

function checkOP() {
  s_data = document.getElementById("result").value;
  if (s_data.includes("+")) {
    op = "+";
  } else if (s_data.includes("-")) {
    op = "-";
  } else if (s_data.includes("*")) {
    op = "*";
  } else if (s_data.includes("/")) {
    op = "/";
  }
}

function calculate() {
  checkOP();
  console.log("Raw Data is:" + s_data + " and operator is:" + op);
  if (s_data.includes("[") && s_data.includes("]")) {
    s_data = s_data.substring(1, s_data.length - 2);
    console.log(
      "After removing brackets" + s_data + " and type is" + typeof s_data
    );
  }
  if (s_data.includes(",")) {
    arrOfDigits = s_data.split(",");
    console.log(
      "After removing comma" +
        arrOfDigits +
        "first index of array is:" +
        typeof arrOfDigits
    );
  } else {
    splitSimpleEq();
    console.log(
      "After removing op:" +
        arrOfDigits +
        "first index of array is:" +
        arrOfDigits[0]
    );
  }

  switch (op) {
    case "+":
      var result1 = arrOfDigits.reduce(add);
      document.getElementById("result").value += "=" + result1;
      hist.push(document.getElementById("result").value);
      break;

    case "-":
      var result2 = arrOfDigits.reduce(subtract);
      document.getElementById("result").value += "=" + result2;
      hist.push(document.getElementById("result").value)
      break;

    case "*":
      var result3 = arrOfDigits.reduce(multiply);
      document.getElementById("result").value += "=" + result3;
      hist.push(document.getElementById("result").value)
      break;

    case "/":
      var result4 = arrOfDigits.reduce(divide);
      document.getElementById("result").value += "=" + result4;
      hist.push(document.getElementById("result").value)
      break;

    default:
      document.getElementById("result").value = "No operator Selected";
      break;
  }
}

function add(total, num) {
  return total + num;
}

function subtract(total, num) {
  return total - num;
}
function multiply(total, num) {
  return total * num;
}
function divide(total, num) {
  return total / num;
}

function clearScreen() {
  arrOfDigits = [];
  s_data = "";
  op = "";
  document.getElementById("result").value = "";
}

function history() {
    document.getElementById("displayHistory").innerHTML += hist;
}
