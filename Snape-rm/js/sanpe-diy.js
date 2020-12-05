// var sidebaraffix = function(){
//     if($('#sidebar').height()&&xb.site_sh){
//         if($('#main').height()>$('#sidebar').height()){
            
//             var footerHeight = 0;
//             if($('#page-footer').length>0){
//                 footerHeight = $('#page-footer').outerHeight(true);
//             }
//             $('#sidebar').affix({
//                 offset:{
//                     top:$('#sidebar').offset().top-xb.site_sh,
//                     bottom:$('#footer').outerHeight(true)+footerHeight+6
//                 }
//             });
//         }
//     }
// }

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
let search=document.getElementById("a-search");
let close=document.getElementById("close");
close.addEventListener("click",()=> {
    top_search.style.padding="0";
    top_search.style.height="0";
    top_search.style.display="none";
})
search.addEventListener("click",()=> {
    top_search.style.height="auto";
    top_search.style.display="block";
    top_search.style.padding="10px 0";
    console.log(123);
})
