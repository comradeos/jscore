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


$('menu li:even') // выбрать четные элементы списка 0, 2, 4..
$('menu li:odd') // выбрать нечетные элементы списка 1, 3, 5...