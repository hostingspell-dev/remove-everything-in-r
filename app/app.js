const menuContainer = document.querySelector(".menu-container");
const mainContainer = document.querySelector(".main-container");
const menuToggle = document.getElementById("menu-toggle");
const searchNavBtn= document.querySelector(".nav-search-btn");
const searchNav= document.querySelector(".search-area");

menuToggle.addEventListener("click", (e) => {
    if(menuContainer.clientWidth==0){
        menuContainer.style.width="18%";
        menuContainer.style.display="flex";
        mainContainer.style.marginLeft="18%";
    }
    else{
        menuContainer.style.width="0";
        menuContainer.style.display="none";
        mainContainer.style.marginLeft="0";
    }
});

searchNavBtn.addEventListener('click', ()=>{
    if(window.getComputedStyle(searchNav).display=="none"){
        searchNav.style.display="flex";
    }else{
        searchNav.style.display="none";
    }
})
