var triangleType;

var calculate = function(side1, side2, side3) {
  if (
    (side1 + side2 <= side3) ||
    (side1 + side3 <= side2) ||
    (side2 + side3 <= side1)
  ){
    triangleType = "Not a triangle";
  } else if (
    (side1 === side2 && side1 === side3)
  ) {
    triangleType = "equilateral";
  } else if (
    (side1 === side2 && side1 !== side3) ||
    (side1 === side2 && side2 !== side3) ||
    (side1 === side3 && side1 !== side2) ||
    (side1 === side3 && side3 !== side2) ||
    (side2 === side3 && side2 !== side1) ||
    (side2 === side3 && side3 !== side1)
  ){
    triangleType = "isosceles";
  } else if (
    (side1 !== side2 !== side3) &&
    (side1 !== side3)
  ) {
    triangleType = "scalene";
  }
}



calculate(5, 5, 6);
console.log(triangleType);



$(function() {
  $("form#tracker").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    event.preventDefault();
  })
})
