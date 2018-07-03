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

const main = document.getElementById('app')
main.addEventListener('click', function(event) {
  alert('I was clicked!')
})

// Keys for A, B, and C keys.
const alphabet = ['a', 'b', 'c'];
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
