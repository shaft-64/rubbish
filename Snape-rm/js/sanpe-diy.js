

$(document).ready(function(){
    $(".page-sidebar #sidebar").affix({
        offset: {
            top:0,
            bottom:218
     	}
    });
    $(".article-sidebar #sidebar").affix({
        offset: {
            top:200,
            bottom:208
     	}
    });
});

let top_search=document.getElementById("search-panel");
let searchIcon=document.getElementById("a-search");
let closeIcon=document.getElementById("a-close");
searchIcon.addEventListener("click",()=> {
    top_search.className="top-search";
});
closeIcon.addEventListener("click",()=>{
    top_search.className="top-search-hidden";
});
