$(document).ready(function () {
    $("#search_input").focus(function () {
        $(".search_input").css({
            "box-shadow": "0 1px 6px 0 rgba(32,33,36,0.28)",
            "border-color": "rgba(223,225,229,0)"
        });
    });

    $("#search_input").blur(function () {
        $(".search_input").css({
            "box-shadow": "none",
            "border": "1px solid #dfe1e5"
        });
    });

    $(".search_input").hover(function () {
        $(this).addClass("elementHovered");
    }, function () {
        $(this).removeClass("elementHovered");
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    $("[autofocus]").on("focus", function () {
        if (this.setSelectionRange) {
            var len = this.value.length * 2;
            this.setSelectionRange(len, len);
        } else {
            this.value = this.value;
        }
        this.scrollTop = 999999;
    }).focus();

    $('#x_clear').click(function () {
        $(this).css('display', 'none');
    });

    $("#other_products").click(function () {
        $('.other_products').toggleClass('show_menu');
        if ($('.other_products').hasClass('show_menu')) {
            $('.main_section ').click(function () {
                $('.other_products').removeClass('show_menu');
            })
        };
    });

    $(document).on('keydown', function (event) {
        if (event.key == "Escape") {
            $('.other_products').removeClass('show_menu');
        }
    });

});

function search_clear() {
    let inputSerach = document.getElementById("search_input");

    let x_btn = document.getElementById("x_clear");
    if (inputSerach.value != "") {
        x_btn.style.display = "flex";
    } else {
        x_btn.style.display = "none";
    }
}