
// button hover effect

$("a").hover(function(){
    $(this).css("font-size", "36px");
    }, function(){
    $(this).css("font-size", "16px");
});

// contact click animation

$("#email").click( function(){
  $("#email").animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  });
});
