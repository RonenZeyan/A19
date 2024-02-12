
let bgButton = document.getElementById('bgButton');
let menuToggle = document.getElementById('menuToggle');
let searchButton = document.getElementById('searchBut');
let searchList = document.getElementById('searchList');
let NotFoundSearch = document.getElementById('NotFoundSearch');
let searchInput = document.getElementById('searchInput');
let virtualGameContent = document.getElementById('virtualGameContent')
let socialInteractionContent = document.getElementById('socialInteractionContent')
let createRoomContent = document.getElementById('createRoomContent')
let home = document.getElementById('Home')
let cnt = 0;


let RoomsArray = ['israel room','apple room','our team room','braude room','microsoft room','samsung room'];

searchInput.addEventListener('click',function(){
    searchList.innerHTML = ''
    searchList.classList.toggle('hidden')
    RoomsArray.forEach((val)=>{
            searchList.innerHTML+= `<button class="roomBut bg-white p-2 rounded-2xl border border-gray-300 hover:bg-gray-100">${val}</button>
            `;
        })
    addEventsToRoomButtons();
})

//Currently the search list displays data in case enter the word "room" to search. otherwise, displayed " not found"
searchButton.addEventListener('click',function(){
    // searchInput.value === 'room' ? searchList.classList.toggle('hidden'): NotFoundSearch.classList.toggle('hidden')
    if(searchInput.value!=='')
    {
    cnt=0;
    searchList.innerHTML = ''
    searchList.classList.toggle('hidden')
    RoomsArray.forEach((val)=>{
        if(val.includes(searchInput.value)){
            searchList.innerHTML+= `<button class="roomBut bg-white p-2 rounded-2xl border border-gray-300 hover:bg-gray-100">${val}</button>
            `;
            cnt = cnt+1;
        }
    })
    if(cnt==0){
        searchList.innerHTML = `<button class="disabled:">not found</button>` 
    }
}
});

// set theme
const toggle = () => {
    //check if the text in bgButton (id) is dark if yes change to light else set dark
    document.documentElement.classList.toggle("dark")
    bgButton.innerText = document.documentElement.classList.contains('dark') ? "light" : "dark" 
    // document.documentElement.classList.toggle("light")            
}

// view
const setView = (v) => {
    // document.querySelector('h1').innerText = v
    // var randomColor = Math.floor(Math.random()*16777215).toString(16)
    // document.querySelector('h1').style.borderBottom = `10px solid #${randomColor}`
    // virtualGameContent.classList.contains('hidden') ? virtualGameContent.classList.add('hidden') : null
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

document.getElementById('virtual').addEventListener('click',()=>{
    document.getElementById('mainPage').classList.add('hidden');
    virtualGameContent.classList.remove('hidden');
    socialInteractionContent.classList.add('hidden');
    createRoomContent.classList.add('hidden');
})

document.getElementById('social').addEventListener('click',()=>{
    document.getElementById('mainPage').classList.add('hidden');
    virtualGameContent.classList.add('hidden');
    socialInteractionContent.classList.remove('hidden');
    createRoomContent.classList.add('hidden');
})

document.getElementById('createRoom').addEventListener('click',()=>{
    createRoomContent.classList.remove('hidden')
    document.getElementById('searchInput').classList.add('pointer-events-none')
    document.getElementById('searchBut').classList.add('cursor-not-allowed')
    document.getElementById('searchBut').setAttribute('disabled','true')
    virtualGameContent.classList.add('hidden')
    socialInteractionContent.classList.add('hidden')
})

document.getElementById('create').addEventListener('click',()=>{
    document.getElementById('searchInput').classList.remove('pointer-events-none')
    document.getElementById('searchBut').classList.remove('cursor-not-allowed')
    document.getElementById('searchBut').removeAttribute('disabled')
    createRoomContent.classList.add('hidden')
    virtualGameContent.classList.add('hidden')
    socialInteractionContent.classList.add('hidden')
})

document.getElementById('cancel').addEventListener('click',()=>{
    document.getElementById('searchInput').classList.remove('pointer-events-none')
    document.getElementById('searchBut').classList.remove('cursor-not-allowed')
    document.getElementById('searchBut').removeAttribute('disabled')
    createRoomContent.classList.add('hidden')
    virtualGameContent.classList.add('hidden')
    socialInteractionContent.classList.add('hidden')
})

const HomeCode = function(){
    createRoomContent.classList.add('hidden');
    virtualGameContent.classList.add('hidden');
    socialInteractionContent.classList.add('hidden')
    document.getElementById('mainPage').classList.contains('hidden') ? document.getElementById('mainPage').classList.toggle('hidden') : null
}

home.addEventListener('click',HomeCode);
document.getElementById('logo').addEventListener('click',HomeCode);

function addEventToButton (butt){
    butt.addEventListener('click',()=>{
        console.log('hello')
    document.getElementById('mainPage').classList.add('hidden');
    virtualGameContent.classList.add('hidden');
    socialInteractionContent.classList.remove('hidden');
    createRoomContent.classList.add('hidden');
    document.getElementById('virtual').classList.remove('hidden');
    document.getElementById('social').classList.remove('hidden');
    document.getElementById('exitRoomBut').classList.remove('hidden');
    });
}

function addEventsToRoomButtons(){
    document.querySelectorAll('.roomBut').forEach((val)=>{
        addEventToButton(val);
    });
}

function displayNavButtons(){
    document.getElementById('virtual').classList.add('hidden');
    document.getElementById('social').classList.add('hidden');
    document.getElementById('exitRoomBut').classList.add('hidden');
    HomeCode()
}


exitRoomBut.addEventListener('click',displayNavButtons);