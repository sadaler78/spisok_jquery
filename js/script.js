$(".btn").on("click", function () {
    if($('.form-control').val()) {
        $(".list").append(`<li class='list-group-item'>${$('.form-control').val()}<button class='btn remove'>X</button></li>`);
        $(".remove").on("click", function () {
            $(this).parent().remove()
        })
    }
})