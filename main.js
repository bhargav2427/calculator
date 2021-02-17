var expression = "";
var b = document.getElementsByTagName("button");

for (var i = 0; i < b.length - 2; i++) {
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
  console.log("bhargav");
  document.getElementById("expression").innerHTML = "";
}
