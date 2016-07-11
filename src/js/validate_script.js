/*валидация формы*/
function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null,
        highlightFunction:null,
        unhighlightFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error').removeClass('valid');
                if( typeof(setings.highlightFunction) === 'function' ) {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                if($(element).closest('.form_row').is('.error')){
                    $(element).closest('.form_row').removeClass('error').addClass('valid');
                }
                if( typeof(setings.unhighlightFunction) === 'function' ) {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    $form[0].submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }

        $('[type="password"]',$form).each(function(){
            if($(this).is("#re_password") == true){
                $(this).rules("add", {
                    minlength:3,
                    equalTo:"#password",
                    messages:{
                        equalTo:"Неверный пароль.",
                        minlength:"Недостаточно символов."
                    }
                });
            }
        })
    }
}

/*Отправка формы с вызовом попапа*/
function validationCall(form){

  var thisForm = $(form);
  var formSur = thisForm.serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim() == 'true') {
                thisForm.trigger("reset");
                popNext("#call_success", "call-popup");
            }
            else {
               thisForm.trigger('reset');
            }

        }
    });
}

/* Отправка формы с файлом */
/* не использовать input[type="file"] в форме и не забыть дописать форме enctype="multipart/form-data" */
function validationCallDocument(form){

    var thisForm = $(form);
    var formData = new FormData($(form)[0]);

    formData.append('file', thisForm.find('input[type=file]')[0].files[0]);

    $.ajax({
        url: thisForm.attr('action'),
        type: "POST",
        data: formData,
        contentType:false,
        processData:false,
        cache:false,
        success: function(response) {
            thisForm.trigger("reset");
            popNext("#call_success", "call-popup");
        }
    });

}

/* Отправка формы с файлaми */
/* не использовать input[type="file"] в форме и не забыть дописать форме enctype="multipart/form-data" */
function validationCallDocuments(form){

    var thisForm = $(form);
    var formData = new FormData($(form)[0]);

    $.each(thisForm.find('input[type="file"]')[0].files, function(index, file){
        formData.append('file['+index+']', file);
    });

    $.ajax({
        url: thisForm.attr('action'),
        type: "POST",
        data: formData,
        contentType:false,
        processData:false,
        cache:false,
        success: function(response) {
            thisForm.trigger("reset");
            popNext("#call_success", "call-popup");
        }
    });

}

function popNext(popupId, popupWrap){

    $.fancybox.open(popupId,{
        padding:0,
        fitToView:false,
        wrapCSS:popupWrap,
        autoSize:true,
        afterClose: function(){
            $('form').trigger("reset");
            clearTimeout(timer);
        }
    });

    var timer = null;

    timer = setTimeout(function(){
        $('form').trigger("reset");
        $.fancybox.close(popupId);
    },2000);

}


/*маска на инпуте*/
function Maskedinput(){
    if($('.tel-mask')){
        $('.tel-mask').mask('+9 (999) 999-99-99');
    }
}

/*fansybox на форме*/
function fancyboxForm(){
  $('.fancybox-form').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoResize:true,
    wrapCSS:'fancybox-form',
    'closeBtn' : false,
    fitToView:true,
    padding:'0'
  })
}
function fancyboxForm2(){
    $('.fancybox-form2').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        wrapCSS:'fancybox-wrap2',
        maxWidth	: 670,
        maxHeight	: 437,
        fitToView	: false,
        width		: '90%',
        height		: '90%',

        autoSize	: false,
        padding:'0'
    })
}

//ajax func for programmer

function someAjax(item, someUrl, successFunc, someData){

    $(document).on('click', item, function(e){

        e.preventDefault();

        var itemObject = $(this);
        var ajaxData = null;

        if(typeof someData == 'function'){
            ajaxData = someData(itemObject);
        }else{
            ajaxData = someData;
        }

        console.log(ajaxData);

        $.ajax({
            url:someUrl,
            data:ajaxData,
            method:'POST',
            success : function(data){
                successFunc(data, itemObject);
            }
        });

    });

}

/* example for someAjax func

    write like this
    someAjax('.link', '/programer_item.php', someFuncName, {action:'someAction', item_id:id});

    or

    someAjax('.link','/programer_item.php', someFuncName, someDataFuncName);

    where

    function someDataFuncName(itemObject){

        return {id:itemObject.data('id'), text:itemObject.parents('.parentOfItemObject').data('text')};

        // where itemObject = $('.link') in someAjax func

    }

*/

/* blog scripts */

    function blogLoadMore(){

        $(document).on('click', '.blog-load-more-button', function(e){

            e.preventDefault();

            var clickedButton = $(this);

            if(!clickedButton.is('.loading') && !clickedButton.is('.no-items')){

                clickedButton.addClass('loading');

                $.ajax({
                    url:ajaxUrl,
                    data:{'action':'load_more_blog_items'},
                    method:'POST',
                    success : function(data){

                        var itemsData = data;

                        if(typeof data != 'object'){
                            itemsData = $.parseJSON(data);
                        }

                        blogJson(itemsData, 'items');

                    }
                });

            }

        });

        $(document).on('click','.blog .tag', function(){

            $('.blog-items-row').remove();
            var tagLoad = $(this).attr('data-tag');

            $('.blog-load-more-button').addClass('loading');

            $.ajax({
                url:ajaxUrl,
                data:{'action':'load_tag_items', 'tag_load':tagLoad},
                method:'POST',
                success: function(data){

                    var tagsData = data;

                    if(typeof data != 'object'){
                        tagsData = $.parseJSON(data);
                    }

                    blogJson(tagsData, tagLoad);

                }
            });

        });

        function blogJson(json, param){

            $('.blog-items-main').append(json[param]);

            var timer = 0;
            var addedRowsLength = $('.blog-items-row.added').length;

            $('.blog-items-row.added').each(function(index){
                var itemRow = $(this);
                setTimeout(function(){
                    itemRow.slideDown(300, function(){
                        itemRow.removeClass('added');
                    })
                }, timer);
                timer = timer + 300;

                if(index == (addedRowsLength - 1)){

                    if(json.last == "true"){
                        $('.blog-load-more-button').addClass('no-items');
                        setTimeout(function(){
                            $('.blog-load-more-button').removeClass('loading');
                        }, 300);
                    }else{
                        $('.blog-load-more-button').removeClass('loading no-items');
                    }

                }

            });

        };

    }

/* blog scripts */


$(document).ready(function(){

   validate('#call-popup .contact-form', {submitFunction:validationCall});
   validate('#call-popup2 .contact-form2', {submitFunction:validationCall});
   validate('.profesional-form-main', {submitFunction:validationCall});
   Maskedinput();
   fancyboxForm();
   fancyboxForm2();

   blogLoadMore();

});