var myElement = document.getElementById('myElement');
var contextMenu = document.getElementById('contextMenu');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');

// Function to handle the context menu event
function showContextMenu(event) {
  event.preventDefault();

  // Add a new option to the context menu
  var newOption = document.createElement('li');
  newOption.textContent = 'New Option';
  contextMenu.appendChild(newOption);

  // Position the context menu at the cursor position
  contextMenu.style.left = event.clientX + 'px';
  contextMenu.style.top = event.clientY + 'px';
  contextMenu.style.display = 'block';
}

// Add event listener to show the context menu
myElement.addEventListener('contextmenu', showContextMenu);

// Add event listeners to handle menu item clicks
option1.addEventListener('click', function() {
  console.log('Option 1 clicked!');
  contextMenu.style.display = 'none';
});

option2.addEventListener('click', function() {
  console.log('Option 2 clicked!');
  contextMenu.style.display = 'none';
});

// Event delegation to handle clicks on dynamically added options
contextMenu.addEventListener('click', function(event) {
  var target = event.target;
  if (target.tagName === 'LI') {
    console.log(target.textContent + ' clicked!');
    contextMenu.style.display = 'none';
  }
});