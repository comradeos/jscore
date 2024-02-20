console.log( $().jquery );

$('#button').on('click', function(){
    $('#link').eq(0).trigger('click');
});