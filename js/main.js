// $( document ).ready(function(){
//     $( "document" ).scroll(function(){ // задаем функцию при нажатиии на элемент с классом start
//       $( ".text_right" ).animate({
//         width: "90%", // ширина элемента
//         opacity: 0.5, // прозрачность элемента
//         height: "150px", // высота элемента
//         fontSize: "2em", // размер шрифта элемента
//         borderWidth: "5px" // ширина границ элемента
//       });
//     });
//   });

$(function () { 
    var header = $(".fixed_button"); 
    $(window).scroll(function () { 
        var scroll = $(window).scrollTop(); 

        if (scroll >= 6450) { 
            header.removeClass('fixed_button') 
                    .addClass("hide_button"); 
        } else { 
            header.removeClass("hide_button") 
                    .addClass('fixed_button'); 
        } 
    }); 
}); 
