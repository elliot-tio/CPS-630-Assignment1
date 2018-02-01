/* function that populates windows with selection from drop-down lists. Minor bug - when selecting between lists, desired output will not show if item had already been selected. */

function populateWindow(sel){
  var leftWindow = document.getElementById('left-window');
  var rightWindow = document.getElementById('right-window');
  var artists = document.getElementById('artists');
  var htmlContentLeft = '';
  var htmlContentRight = '';

  switch(sel.value){
    case 'Leonardo da Vinci':{
      htmlContentLeft = '<img src="images/leonardo-da-vinci.jpg" alt="Leonardo da Vinci">';
      htmlContentRight = "<p class='name'>Leonardo da Vinci</p>\
      <p>Date of birth/death: April 15, 1452 - May 2, 1519</p>\
      <p>Place of living: Italy</p>\
      <p>Genre: Renaissance</p>\
      <p>Famous artworks: Mona Lisa, The Last Supper</p>";
      break;
    }
    case 'Vincent van Gogh':{
      htmlContentLeft = '<img src="images/van-gogh.jpg" alt="Vincent van Gogh">';
      htmlContentRight = "<p class='name'>Vincent van Gogh</p>\
      <p>Date of birth/death: March 30, 1853 - July 29, 1890</p>\
      <p>Place of living: Netherlands/France</p>\
      <p>Genre: Post-Impressionism</p>\
      <p>Famous artworks: The Starry Night, Sunflowers</p>";
      break;
    }
    case 'Michelangelo':{
      htmlContentLeft = '<img src="images/michelangelo.jpg" alt="Michelangelo">';
      htmlContentRight = "<p class='name'>Michelangelo</p>\
      <p>Date of birth/death: March 6, 1475 - February 18, 1564</p>\
      <p>Place of living: Italy</p>\
      <p>Genre:Renaissance </p>\
      <p>Famous artworks: David, Sistine Chapel ceiling</p>";
      break;
    }
    case 'Claude Monet':{
      htmlContentLeft = '<img src="images/monet.jpg" alt="Claude Monet">';
      htmlContentRight = "<p class='name'>Claude Monet</p>\
      <p>Date of birth/death: November 14, 1840 - December 5, 1926</p>\
      <p>Place of living: France</p>\
      <p>Genre: Impressionism</p>\
      <p>Famous artworks: 'Impression, Sunrise', Water Lilies</p>";
      break;
    }
    case 'Pablo Picasso':{
      htmlContentLeft = '<img src="images/picasso.jpg" alt="Pablo Picasso">';
      htmlContentRight = "<p class='name'>Pablo Picasso</p>\
      <p>Date of birth/death: October 25, 1881 - April 8, 1973</p>\
      <p>Place of living: Spain/France</p>\
      <p>Genre: Cubism, Surrealism</p>\
      <p>Famous artworks: The Old Guitarist, La Vie</p>";
      break;
    }
    case 'Mona Lisa':{
      htmlContentLeft = '<img src="images/realism2.jpg" alt="Mona Lisa">';
      htmlContentRight = "<p>Date of production: c. 1503 - 1506</p>\
      <p>Type of painting: Oil on Poplar Panel</p>\
      <p>Dimensions of painting: 77cm x 53cm</p>\
      <p>Current Location: Musee du Louvre, Paris</p>\
      <p>Artist: Leonardo da Vinci</p>\
      <p>Price: Priceless</p>\
      <p>Genre:Renaissance </p>";
      break;
    }
    case 'De Matteis Triumph of the Immaculate Anagoria':{
      htmlContentLeft = '<img src="images/baroque1.jpg" alt="De Matteis Triumph of the Immaculate Anagoria">';
      htmlContentRight = "<p>Date of production: c. 1710 - 1715</p>\
      <p>Type of painting: N/A</p>\
      <p>Dimensions of painting: N/A</p>\
      <p>Current Location: N/A</p>\
      <p>Artist: Paolo De Matteis</p>\
      <p>Price: ???</p>\
      <p>Genre: Baroque</p>";
      break;
    }
    case 'The Delivery of the Keys to Saint Peter':{
      htmlContentLeft = '<img src="images/renaissance.jpg" alt="The Delivery of the Keys to Saint Peter">';
      htmlContentRight = "<p>Date of production: c. 1481 - 1482</p>\
      <p>Type of painting: Fresco</p>\
      <p>Dimensions of painting: 330cm x 550cm</p>\
      <p>Current Location: Sistine Chapel</p>\
      <p>Artist: Perugino</p>\
      <p>Price: ???</p>\
      <p>Genre: Renaissance</p>";
      break;
    }
    case 'The Starry Night':{
      htmlContentLeft = '<img src="images/starry-night.jpg" alt="The Starry Night">';
      htmlContentRight = "<p>Date of production: 1889</p>\
      <p>Type of painting: Oil on Canvas</p>\
      <p>Dimensions of painting: 73.7cm x 92.1cm</p>\
      <p>Current Location: Museum of Modern Art, New York City</p>\
      <p>Artist: Vincent van Gogh</p>\
      <p>Price: ~$100 - $300 million USD</p>\
      <p>Genre: Post-impressionism</p>";
      break;
    }
    case 'The Creation of Adam':{
      htmlContentLeft = '<img src="images/creation-of-adam.jpg" alt="The Creation of Adam">';
      htmlContentRight = "<p>Date of production: c. 1512</p>\
      <p>Type of painting: Fresco</p>\
      <p>Dimensions of painting: 280cm x 570cm</p>\
      <p>Current Location: Sistine Chapel's ceiling</p>\
      <p>Artist: Michelangelo</p>\
      <p>Price: ???</p>\
      <p>Genre: Renaissance</p>";
      break;
    }
    case 'pick': {
      htmlContentLeft = "Pick an Artwork or Artist from the lists above.";
      htmlContentRight = "Pick an Artwork or Artist from the lists above.";
    }
  }
  leftWindow.innerHTML = htmlContentLeft;
  rightWindow.innerHTML = htmlContentRight;
}
