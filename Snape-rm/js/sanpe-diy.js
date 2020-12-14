$(document).ready(function(){
    $(".page-sidebar #sidebar").affix({
        offset: {
            top:0,
            bottom:170
     	}
    });
    $(".article-sidebar #sidebar").affix({
        offset: {
            top:200,
            bottom:164
     	}
    });
});

let top_search=document.getElementById("search-panel");
let searchIcon=document.getElementById("a-search");
let closeIcon=document.getElementById("a-close");
let switchs=document.getElementById("a-mode");
let sm=document.getElementById("sun-moon");
searchIcon.addEventListener("click",()=> {
    top_search.className="top-search";
});
closeIcon.addEventListener("click",()=>{
    top_search.className="top-search-hidden";
});
switchs.addEventListener("click",()=>{

    if(sm.getAttribute("class")=="fa fa-moon"){
        console.log("......")
        sm.classList("fa","fa-sun")
    }
    if(sm.getAttribute("class")=="fa fa-sun"){
        sm.className="fa fa-moon";
    }
})