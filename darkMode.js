
let bgButton = document.getElementById('bgButton');


// set theme
const toggle = () => {
    //check if the text in bgButton (id) is dark if yes change to light else set dark
    document.documentElement.classList.toggle("dark")
    bgButton.innerText = document.documentElement.classList.contains('dark') ? "light" : "dark" 
    // document.documentElement.classList.toggle("light")            
}

bgButton.addEventListener('click',function(){
    toggle();
});