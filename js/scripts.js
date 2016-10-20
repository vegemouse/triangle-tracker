$(function() {

  var triangleType;

  var calculate = function(side1, side2, side3) {
    if (!side1 || !side2 || !side3) {
      alert("Please enter all 3 sides, if you entered zero that is not a length");
    } else if (
      (side1 + side2 <= side3) ||
      (side1 + side3 <= side2) ||
      (side2 + side3 <= side1)
    ){
      $("#triangleContent").text("This is not a triangle.");
    } else if (
      (side1 === side2 && side1 === side3)
    ) {
      $("#triangleContent").text("Your triangle is equilateral");
    } else if (
      (side1 === side2 && side1 !== side3) ||
      (side1 === side2 && side2 !== side3) ||
      (side1 === side3 && side1 !== side2) ||
      (side1 === side3 && side3 !== side2) ||
      (side2 === side3 && side2 !== side1) ||
      (side2 === side3 && side3 !== side1)
    ){
      $("#triangleContent").text("Your triangle is isosceles");
    } else if (
      (side1 !== side2 !== side3) &&
      (side1 !== side3)
    ) {
      $("#triangleContent").text("Your triangle is scalene");
    }
  }

 // begin UI logic

  $("form#tracker").submit(function(event) {
    var inputSide1 = parseInt($("input#side1").val());
    var inputSide2 = parseInt($("input#side2").val());
    var inputSide3 = parseInt($("input#side3").val());

    calculate(inputSide1, inputSide2, inputSide3);

    event.preventDefault();
  })
})
