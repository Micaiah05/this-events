//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var newMenu = document.getElementsByClassName('navi')

for(var i = 0; i < newMenu.length; i++){
    newMenu[i].addEventListener('click', showContents)
}

function showContents(){
    var display1 = this.querySelector('.inner')
    if (display1.style.display === 'block'){
        display1.style.display = 'none'
    }else{
        display1.style.display = 'block'    
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var secretMenu = document.getElementsByClassName('name')

for(var i = 0; i < secretMenu.length; i++){
    secretMenu[i].addEventListener('click', showSecretMenu)
}

function showSecretMenu(){
    var display2 = this.querySelector('.menu')
    if (display2.style.display === 'block'){
        display2.style.display = 'none';
    }else{
        display2.style.display = 'block'
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



