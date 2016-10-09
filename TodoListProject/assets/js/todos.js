//Check Off Specific Todos after clicking

$("li").click(function(){
   $(this).toggleClass("completed");
});

//Delete Todos
$("span").click(function(event){
   
    //($this) here refers to the span
    //$(this).parent() returns the enclosing li
    $(this).parent().fadeOut(500, function(){
        //$(this) here refers to the parent of the span i.e. li
       $(this).remove(); 
    });
    //Prevent event bubbling i.e. propagation of events to the li, container div and body
    event.stopPropagation();
});