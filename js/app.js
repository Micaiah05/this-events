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



/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



