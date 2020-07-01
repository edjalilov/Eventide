$(document).ready(function () {
    // ====== Валидация формы ====== //
    $('.auth__form, .register__form').submit(function (e) {
        $('.auth__form-input, .register__form-input').each(function () {
            if ($(this).val() == '') {
                $(this).addClass('error');
                e.preventDefault();
            }
        });
        $('input[type=checkbox]').each(function () {
            if ($(this).is(':not(:checked)') && !$('.register__form-input').val() == '') {
                window.alert('Пожалуйста, подтвердите свое согласие с условиями');
                e.preventDefault();
            }
        });
    });

    $('.auth__form-input, .register__form-input').on('input', function () {
        $(this).removeClass('error');
    });

    $('.pass, #confirm_password').on('keyup', function () {
        if ($('.pass').val() == $('#confirm_password').val()) {
            $('.message').html('Пароли совпадают').css('color', 'green');
        } else {
            $('.message').html('Пароли не совпадают').css('color', '#ea4335;');
        }
    });

    // ====== Глазок показать/скрыть пароль ====== //
    let show = document.querySelector('.auth__show');
    let pass = document.querySelector('.pass');
    let openEye = document.querySelector('.auth__show .fa-eye');
    let closeEye = document.querySelector('.auth__show .fa-eye-slash');

    show.addEventListener('click', function (event) {
        event.preventDefault();
        if (pass.type == 'password') {
            pass.type = 'text';
            closeEye.style.display = 'none';
            openEye.style.display = 'block';

        } else {
            pass.type = 'password';
            closeEye.style.display = 'block';
            openEye.style.display = 'none';
        }
    });

    // ====== Модальное окно ====== //
    $('.login-btn').click(function () {
        $('.overlay').show();
        $('.auth').addClass('auth-active');
    });

    $('.overlay').click(function () {
        $('.overlay').hide();
        $('.auth').removeClass('auth-active');
        $('.auth__form-input').val('');
    });

    $('auth__form').submit(function (e) {
        $('.auth__form-input').each(function () {
            if ($(this).val() == '') {
                e.preventDefault();
            }
        });
    });

});

// ====== Анимация заголовка первого уровня ====== //
function write() {
    let text = document.querySelector('h1');
    let str = text.innerHTML;
    text.innerHTML = '';
    let count = 0;
    let timer;

    function print() {
        text.innerHTML += str.charAt(count);
        count++;
        if (str.length == count) {
            clearInterval(timer);
        }
    }
    timer = setInterval(print, 50);
}