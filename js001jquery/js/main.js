/*
jQuery('');
$('');

$('#element_id');  // все теги с id = element_id
$('.element_class'); // все теги с классом element_class
$('a'); // все теги a

$('nav menu li');
$('.elm_class > div');
$('img + h4'); // все img после которых h4

$('img[height=200]'); // все img с аттрибутом height="200" 
$('img[src^=img/]'); // аттрибут src начинается с img/
$('img[src$=.png]'); // аттрибут src заканчивается на .png 
$('img[src*=№]'); // аттрибут src содержит символ # 

$('menu li:even') // выбрать четные элементы списка 0, 2, 4..
$('menu li:odd') // выбрать нечетные элементы списка 1, 3, 5...

$('img:not(.logo img)') // выбрать все img кроме того, что находится в теге с классом logo
$('li:has(a)') // выбрать все li внутри которых размещается тег a
$('p:contains(client)') // выбрать все p внутри которых содержится слово client 

$('li:first') // выбрать первый элемент li
$('li:last') // выбрать последний элемент li

$('div:hidden') // выбрать все div которые скрыты
$('div:visibility') // выбрать все div которые видимые
*/



/*
$(document).ready(function(){
    // весь код
    var tagP = $('.mainText p'); // получить элемент
    console.log(tagP.text());

    tagP.text("Новый текст "); // установить новый текст
    console.log(tagP.text());

    tagP.hide(500); // скрыть тег р
    tagP.show(500); // показать тег р (показать с анимацией за 2 секунды)

    // пример использования цепных функций
    tagP.hide(2000).show(2000)
    
    // пример использования цепных функций
    tagP.hide(2000).text("Измененный").show(2000)
});
*/


$(function(){
    let element = $('.icons > div');
    element.hide(5000);

    let block = $('.mainText');
    console.log(block.width());
    block.width(500);
    console.log(block.width());
});