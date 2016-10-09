//Check Off Specific Todos after clicking
//Add listeners for li that will be added after the page is loaded
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//Delete Todos
$("ul").on("click", "span", function(event){
   
    //($this) here refers to the span
    //$(this).parent() returns the enclosing li
    $(this).parent().fadeOut(500, function(){
        //$(this) here refers to the parent of the span i.e. li
       $(this).remove(); 
    });
    //Prevent event bubbling i.e. propagation of events to the li, container div and body
    event.stopPropagation();
});

//Create a new Todo
$("input[type='text']").keypress(function(event){
   //Whenever enter key is pressed
    if(event.which === 13){
       //Grab the text in the input
        var textVal = $(this).val();
        //clear the input
        $(this).val("");
        //Add a new li to the ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + textVal + "</li>");
   }
});

//Fade out the input when tasks icon is clicked
$(".fa-tasks").click(function(){
   $("input[type='text']").fadeToggle(); 
});