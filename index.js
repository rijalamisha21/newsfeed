const searchBtn= document.getElementById("search")
const arrow= document.getElementById("arrow-logo")
const fbLogo=document.getElementById("fb-logo")
const dropDown= document.getElementById("mydropDown")
searchBtn.addEventListener("click", function(){
    dropDown.style.display="block";
    arrow.style.display="block";
    fbLogo.style.display="none"
})

// searchBtn.addEventListener("click", function(){
//     dropDown.style.display="block";
// })

arrow.addEventListener("click", function(){
    dropDown.style.display="none";
    arrow.style.display="none";
    fbLogo.style.display="block"
})

const crossLogo= document.querySelectorAll(".cross-logo")
const dropDownList= document.querySelectorAll(".dropdown-list")
for(i=0; i<dropDown.length;i++){
    crossLogo[i].addEventListener("click",function(){
        dropDownList[i].style.display= "none";
    })
}





