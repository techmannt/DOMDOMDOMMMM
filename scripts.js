let numberSquares = 1;  // Start at 1 since we'll be checking to see if there's a square before an ODD square.
let colors = ["red", "yellow", "orange", "green", "violet", "blue", "chocolate", "indigo"];

window.addEventListener('DOMContentLoaded', function () {
  let btn = document.createElement('button');
  let btnText = document.createTextNode('Add square');
  btn.className = "button";
  btn.appendChild(btnText);
  document.body.appendChild(btn);

  let flexDiv = document.createElement('div');
  flexDiv.className = "container";
  document.body.appendChild(flexDiv);

  btn.addEventListener("click", function () {

    let div = document.createElement('div');
    div.id = numberSquares;
    div.className = "divSquare";
    numberSquares++;

    flexDiv.appendChild(div);

    div.addEventListener("mouseover", function () {
      let h2 = document.createElement('h2');
      let h2text = document.createTextNode(div.id);
      h2.id = numberSquares;
      h2.appendChild(h2text);
      div.appendChild(h2);
    })

    div.addEventListener('mouseout', function () {
      var elem = document.getElementById(numberSquares);
      elem.parentNode.removeChild(elem);
    })

    div.addEventListener("click", function () {
      let rnd = Math.floor(Math.random() * 8); // Generate a random number between 0 and 7 since an array is 0-based.
      div.style.backgroundColor = colors[rnd]; // Get the event's target and style it with a color.
    })

    div.addEventListener("dblclick", function(e) {
      if ((div.id % 2) === 0) {  // If the square clicked on is EVEN, then remove the square after the clicked square.
        let element = document.getElementById(div.id);
        let newDivId = div.nextSibling;

        if (newDivId !== null) {  // If we're not at the end of the row of squares, then we can safely remove it.
          flexDiv.removeChild(newDivId);
        } else {
          alert("Danger! You tried to delete a square after the end!");
        }
      } else {  // If the square clicked on is ODD, then remove the square before the clicked square.
        let element = document.getElementById(div.id);
        let newDivId = div.previousSibling;

        if (newDivId !== null) {  // If we're not at the beginning of the row of squares, then we can safely remove it.
          flexDiv.removeChild(newDivId);
        } else {
          alert("Danger! You tried to delete a square before the beginning!");
        }
      }
    })
  });

});
