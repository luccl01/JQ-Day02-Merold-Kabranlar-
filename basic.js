
$('.bell').on('click', function(){
    $('#result').html('You clicked on the Christmas bell')
})


// $('.santa').on('click', function(){
//     $('#result').html('You clicked on the Christmas bell')
// })

$('.santa').on('click', function(){
    //$(this).css('display','none')
    $(this).slideUp(2000);
    // fadeOut(2000);
})



// $('div').css('background-color', 'yellow')