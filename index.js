const project=document.getElementById("skill");
const nav=Array.from(document.getElementsByClassName("nav"));
const skills=Array.from(document.getElementsByClassName("start"));
function fillwidth(){
    var coordinates=project.getBoundingClientRect();
    console.log(coordinates.top);
    if(coordinates.top<=200){
    skills.forEach(skill =>{
        skill.setAttribute("class", "fill");
    });
}
    if(coordinates.top<=-260 || coordinates.top>=500){
    skills.forEach(skill =>{
        skill.removeAttribute("class", "fill");
    });
}
}

document.addEventListener("scroll", fillwidth);

nav.forEach(element => {
    element.addEventListener("click",(event)=>{
        
        event.preventDefault();
        let ele=document.getElementById(element.innerHTML);
        let interval=setInterval(()=>{
            let length=ele.getBoundingClientRect();
            if(length.top<=15){
                clearInterval(interval);
                if(element.innerHTML==="Skill"){
                    fillwidth();
                }
                return;
            }
            else if(element.innerHTML==="Contact Me" && length.top<=200){
                clearInterval(interval);
                return;
            }

            window.scrollBy(0,50);
        },35);
    })
});




