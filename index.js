function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  var rank;
  var track = [];
  const nodelist = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < nodelist.length; i++) {
    rank = parseInt(nodelist[i].innerHTML)
    nodelist[i].innerHTML = (rank + n).toString();
  }
}

function deepestChild() {
  var answer;
  var children = {}
  var counter = 0
  var list = document.querySelectorAll('#grand-node > div')
  for (var i = 0; i < list.length; i++) {
    var current_child = list[i]
    while (current_child.querySelector(':first-child') != null) {
      counter += 1
      current_child = current_child.querySelector(':first-child')
      deepestChild = current_child
      if (children[i] === undefined || children[i] < counter) {
        children[i] = counter
        answer = deepestChild;
        //console.log(document.querySelector('#grand-node div div div div'))
        //console.log(typeof answer)
        return answer;

      }
    }
  }

}

// ----

document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==13) {
  alert("You hit the enter key.");
  } else {
  alert("Oh no you didn't.");
  }
}
