const button=document.querySelector("button");
const darkTheme="dark-theme";
const icon="bxs-toggle-right";


const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon') 



if(selectedTheme){
    document.body.classList[selectedTheme=== 'dark' ? 'add' : 'remove'](darkTheme)
    button.classList[selectedIcon=== 'bxs-toggle-right' ? 'add' : 'remove'](icon)
}

button.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    button.classList.toggle(icon)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}) 


const getCurrentTheme=()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon=()=>button.classList.contains(icon) ? 'bxs-toggle-right': 'bx-toggle-left'



