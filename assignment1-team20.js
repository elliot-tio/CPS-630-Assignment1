function populateWindow(sel){
  var leftWindow = document.getElementById('left-window');
  var rightWindow = document.getElementById('right-window');
  var artists = document.getElementById('artists');
  var htmlContentLeft = '';
  var htmlContentRight = '';

  switch(sel.value){
    case 'artist1':{
      htmlContentLeft = 'artist 1';
      htmlContentRight = "artist 1";
      break;
    }
    case 'artist2':{
      htmlContentLeft = "artist 2";
      htmlContentRight = "artist 2";
      break;
    }
    case 'artist3':{
      htmlContentLeft = 'artist 3';
      htmlContentRight = "artist 3";
      break;
    }
    case 'artist4':{
      htmlContentLeft = "artist 4";
      htmlContentRight = "artist 4";
      break;
    }
    case 'artist5':{
      htmlContentLeft = 'artist 5';
      htmlContentRight = "artist 5";
      break;
    }
    case 'art1':{
      htmlContentLeft = "art 1";
      htmlContentRight = "art 1";
      break;
    }
    case 'art2':{
      htmlContentLeft = 'art 2';
      htmlContentRight = "art 2";
      break;
    }
    case 'art3':{
      htmlContentLeft = "art 3";
      htmlContentRight = "art 3";
      break;
    }
    case 'art4':{
      htmlContentLeft = 'art 4';
      htmlContentRight = "art 4";
      break;
    }
    case 'art5':{
      htmlContentLeft = "art 5";
      htmlContentRight = "art 5";
      break;
    }
  }
  leftWindow.innerHTML = htmlContentLeft;
  rightWindow.innerHTML = htmlContentRight;
}
