$(function(){
    $('#popup1').makePopup();
    $('#popup2').makePopup();
    $('#popup3').makePopup();
    $('#popup4').makePopup();
    
    $('#subPopup1').makePopup();
    $('#subPopup2').makePopup();
    $('#subPopup3').makePopup();
    
    $('#btn1').on('click', function(){ showPopup('popup1'); });
    $('#btn2').on('click', function(){ showPopup('popup2'); });
    $('#btn3').on('click', function(){ showPopup('popup3'); });
    $('#btn4').on('click', function(){ showPopup('popup4'); });


    $('#popup4btn').on('click', function(){ 
        // hidePopup('popup4'); 
        showPopup('subPopup1'); 
    });

    $('#subPopup1btn').on('click', function(){ 
        // hidePopup('subPopup1'); 
        showPopup('subPopup2'); 
    });
    
    $('#subPopup2btn').on('click', function(){ 
        // hidePopup('subPopup2'); 
        showPopup('subPopup3'); 
    });

    $('#subPopup3btn').on('click', function(){ 
        hidePopup('subPopup3'); 
        hidePopup('subPopup2'); 
        hidePopup('subPopup1'); 
        hidePopup('popup4'); 
    });



    
    let popup5 = new Popup('popup5');
    $('#btn5').on('click', function(){ popup5.show(); });

    let popup4 = new Popup('popup4');
    $('#btn4').on('click', function(){ popup4.show(); });
});

(function($){
    $.fn.makePopup = function(){
        this.find('.popupBackground').click(function(){ 
            $(this).fadeOut(); 
        });

        this.find('.popupContent').on('click', function(e){ 
            e.stopPropagation();
            console.log('click');
        });
    }
})(jQuery);

function showPopup(popupId){
    $(`#${popupId} .popupBackground`).fadeIn();
}

function hidePopup(popupId){
    $(`#${popupId} .popupBackground`).fadeOut();
}

(function($){ 
/*
    тут плагин
*/ 
})(jQuery);



class Popup {
    constructor(popupId){
        this.popupId = popupId;

        $(`#${this.popupId} .popupBackground`).click(() => {
            this.hide();
        });

        $(`#${this.popupId} .popupBackground .popupContent`).click((e) => {
            e.stopPropagation();
        });
    }

    show(){
        $(`#${this.popupId} .popupBackground`).fadeIn();
    }

    hide(){
        $(`#${this.popupId} .popupBackground`).fadeOut();
    }
}