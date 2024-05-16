// $(document).ready(function(){
//     $("h1").css("color", "red");
// })

//adding a class to the h1 element
$("h1").addClass("big-title margin-50");

// $("h1").text("Ciao.");
// // $("button").text("Don't click me")
// $("button").html("<em>Hola</em>")

//to get info. about the attribute
// $("img").attr("src")


//to set the attribute of the <a> tag
// $("a").attr("href", "https://www.yahoo.com");


//to change the color of the h1 element when you click on the word/heading
// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

//for the buttons to change the h1 text's color when clicked (using vanilla JS)

// for(var i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "silver";
//     })
// }

//the buttons when clicked change the color of the h1 (JQuery)
// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

//detect key presses in the doc & replaces the h1 element
// $(document).keypress(function(event){
//    $("h1").html(event.key);
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// });

// $("button").on("click", function(){
//     $("h1").toggle();
// });

// $("button").on("click", function(){
//     $("h1").fadeToggle(); //there's fadeIn, fadeOut, fadeToggle
// });

// $("button").on("click", function(){
//     $("h1").slideToggle(); //there's slideUp, slideDown, slideToggle
// });

// $("button").on("click", function(){
//     $("h1").animate({opacity:0.3}); 
// });

// $("button").on("click", function(){
//     $("h1").animate({margin:20}); 
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5}); 
});