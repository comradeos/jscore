jQuery('');
$('');

$('#element_id');
$('.element_class');
$('a');

$('nav menu li');
$('.elm_class > div');
$('img + h4'); // все img после которых h4

$('img[height=200]'); // все img с аттрибутом height="200" 
$('img[src^=img/]'); // аттрибут src начинается с img/
$('img[src$=.png]'); // аттрибут src заканчивается на .png 
$('img[src*=№]'); // аттрибут src содержит символ # 
