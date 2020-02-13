$(document).ready(function() {
            
            // 초기화 
            $('.header__menu').find('a').prop('tabindex', '-1');
            $('.close_button').find('i').prop('tabindex', '-1');
            $('.info_close').prop('tabindex', '-1');
            
            // 메뉴 버튼
            $('.open__button').on('click', function() {
                $('.header__menu').addClass('active');
                $('.header__menu').find('a').prop('tabindex', '0');
                $('.close_button').find('i').prop('tabindex', '0');
            });

            $('.close__button').on('click', function() {
                $('.header__menu').removeClass('active');
            });
            
            // 메인 영억
            $('.info_btn').on('click', function(){
                $(this).next().addClass('on');
                $('.info_close').prop('tabindex', '0');
                return;
            });

            $('.info_close').on('click', function() {
                $(this).parent('.item__info').removeClass('on');
                return;
            });
              
            $(document).keypress(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == "13") {
                    $('.header__menu').addClass('active');  
                }
            });
});