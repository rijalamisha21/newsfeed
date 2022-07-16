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



