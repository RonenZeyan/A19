
let bgButton = document.getElementById('bgButton');
let menuToggle = document.getElementById('menuToggle');

// set theme
const toggle = () => {
    //check if the text in bgButton (id) is dark if yes change to light else set dark
    document.documentElement.classList.toggle("dark")
    bgButton.innerText = document.documentElement.classList.contains('dark') ? "light" : "dark" 
    // document.documentElement.classList.toggle("light")            
}

// view
const setView = (v) => {
    document.querySelector('h1').innerText = v
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.querySelector('h1').style.borderBottom = `10px solid #${randomColor}`
    toggleMenu(true)
}

// menu
const toggleMenu = (hide) => {
    if (!hide) {
        document.querySelector('#ddMenu').classList.toggle('hidden')
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden')
        })
    }
    else {
        document.querySelector('#ddMenu').classList.add('hidden')
        document.querySelectorAll('svg')[0].classList.remove('hidden')
        document.querySelectorAll('svg')[1].classList.add('hidden')                    
    }
}
menuToggle.addEventListener('click',function(){
    const isHidden = document.querySelector('#ddMenu').classList.contains('hidden');
    toggleMenu(!isHidden);
});

bgButton.addEventListener('click',function(){
    toggle();
});
document.querySelectorAll('.VirtualGames').forEach(function(element) {
element.addEventListener('click',function(){
    setView('Virtual Games');
});
})
document.querySelectorAll('.cooperativeChallenge').forEach(function(element) {
element.addEventListener('click',function(){
    setView('Cooperative Challenge');
});
})
document.querySelectorAll('.SocialInteraction').forEach(function(element) {
element.addEventListener('click',function(){
    setView('Social Interaction');
});
})
