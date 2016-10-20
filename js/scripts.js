$(function() {

  var triangleType;

  var calculate = function(side1, side2, side3) {
    if (!side1 || !side2 || !side3) {
      alert("Please enter all 3 sides");
    } else if (
      (side1 + side2 <= side3) ||
      (side1 + side3 <= side2) ||
      (side2 + side3 <= side1)
    ){
      triangleType = "notTriangle";
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

 // begin UI logic

  $("form#tracker").submit(function(event) {
    var inputSide1 = parseInt($("input#side1").val());
    var inputSide2 = parseInt($("input#side2").val());
    var inputSide3 = parseInt($("input#side3").val());

    calculate(inputSide1, inputSide2, inputSide3);

    if (triangleType === "notTriangle") {
      $("#triangleContent").text("This is not a triangle.");
    } else if (triangleType === "equilateral") {
      $("#triangleContent").text("Your triangle is equilateral");
    } else if (triangleType === "isosceles") {
      $("#triangleContent").text("Your triangle is isosceles");
    } else if (triangleType === "scalene") {
      $("#triangleContent").text("Your triangle is scalene");
    }

    event.preventDefault();
  })
})
