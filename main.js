//filtro

$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter");
        if(value == "todos"){
            $(".post-box").show("1000");
        }
        else{
            $(".post-box").not("." + value).hide ("1000");
            $(".post-box").filter("." + value).show("1000");
        }
    });

    //active btn
    $(".filter-item").click(function(){
       $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

    //header  Background scroll
    let header =  document.querySelector("header")

    window.addEventListener("scroll",() => {
        header.classList.toggle("shadow", window.scrollY > 0);
    });


    
  

    
