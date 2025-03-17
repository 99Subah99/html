function changeText(){

  var heading = document.getElementById ("heading")
  heading.textContent = "You clicked the button"

  var items = document.getElementsByTagName('li');

  for ( var i =0; i< items.length; i++){

    items[i].style.color = 'blue'
  }

}