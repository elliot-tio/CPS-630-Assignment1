var leftWindow = document.getElementById('left-window');
var rightWindow = document.getElementById('right-window');
var htmlContentLeft = '';
var htmlContentRight = '';

function populateWindow(event){
  switch(event.target.value){
    case 'artist1':{
      htmlContentLeft = 'Content for A';
      htmlContentRight = "content for A";
      break;
    }
    case 'artist2':{
      htmlContentLeft = "content for B";
      htmlContentRight = "content for B";
      break;
    }
  }
  leftWindow.innerHTML = htmlContentLeft;
  rightWindow.innerHTML = htmlContentRight;
}
