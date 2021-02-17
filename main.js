var expression = "";
var b = document.getElementsByTagName("button");

//b.splice(b.length - 1, b.length);

for (var i = 0; i < b.length - 1; i++) {
  b[i].addEventListener("click", function () {
    showLog(this.innerHTML);
  });
}
document.getElementById("equals").addEventListener("click", function () {
  // console.log(expression);
  equals();
});

function equals() {
  console.log(eval(expression));
  // console.log("pressed");
}

function showLog(x) {
  expression += x;
  console.log(expression);
}
