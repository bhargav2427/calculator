var expression = "";
// var b = document.getElementsByTagName("button");
var b = document.querySelectorAll("button:not([onclick])");

for (var i = 0; i < b.length - 1; i++) {
  b[i].addEventListener("click", function () {
    showLog(this.innerHTML);
  });
}
document.getElementById("equals").addEventListener("click", function () {
  equals();
});

function equals() {
  document.getElementById("expression").innerHTML = eval(expression);
  expression = eval(expression);
}

function showLog(x) {
  expression += x;
  document.getElementById("expression").innerHTML = expression;
}

function abc() {
  expression = "";
  document.getElementById("expression").innerHTML = "";
}

function backslash() {
  expression = expression.slice(0, expression.length - 1);
  document.getElementById("expression").innerHTML = expression;
  console.log(expression);
}
