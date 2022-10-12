var starBtn=  document.querySelector("#main-section-button")

var formSection= document.querySelector("#form-section");

var icon= document.querySelector("#close-icon")
console.log(icon);

starBtn.addEventListener("click", function(){
    if(formSection.style.display === "flex"){
        form.Section.style.display="none";
    }else{
        formSection.style.display="flex";
    }
})

icon.addEventListener("click", function(){
    formSection.setAttribute("style","display:none;");
})

