indow.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.
	
}

// function openTab(tabName) {
//   var i, tabContent, tabButton;
//   tabContent = document.getElementsByClassName("tab-pane");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].classList.remove("active");
//   }
//   tabButton = document.getElementsByClassName("filter-button");
//   for (i = 0; i < tabButton.length; i++) {
//     tabButton[i].classList.remove("active");
//   }
//   document.getElementById(tabName).classList.add("active");
//   event.currentTarget.classList.add("active");
// }

function openTab(tabName) {
  var tabContent = document.getElementsByClassName("tab-pane");
  var tabButton = document.getElementsByClassName("filter-button");
  for (var i = 0; i < tabContent.length; i++) {
    if (tabContent[i].id === tabName) {
      tabContent[i].classList.add("active");
    } else {
      tabContent[i].classList.remove("active");
    }
  }
  for (var j = 0; j < tabButton.length; j++) {
    if (tabButton[j].classList.contains(tabName + "-button")) {
      tabButton[j].classList.add("active");
    } else {
      tabButton[j].classList.remove("active");
    }
  }
  return false;
}