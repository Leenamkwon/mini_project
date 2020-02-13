$(document).ready(function() {
    
    function tab(e){
        const keycode = e.keyCode
        if(13==keycode || 34==keycode || 'click'){
            $('.open__button').on('click', function() {
                $('.header__menu').addClass('active');
            });
            $('.close__button').on('click', function() {
                $('.header__menu').removeClass('active');
            });
            
            
            $('.info_btn').on('click', function(){
                $(this).next().addClass('on');
                return;
            });
            $('.info_close').on('click', function() {
                $(this).parent('.item__info').removeClass('on');
                return;
            })
        }
     }


});