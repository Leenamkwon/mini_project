$(document).ready(function() {
  $(".open__button").on("click", function() {
    $(".header__menu").addClass("active");
  });
  $(".open__button").on("keypress", function(e) {
    if (e.which === 13) {
      $(".header__menu").addClass("active");
    }
  });
  $(".close__button").on("click", function() {
    $(".header__menu").removeClass("active");
  });

  $(".info_btn").on("click", function() {
    $(this)
      .next()
      .addClass("on");
    return;
  });
  $(".info_close").on("click", function() {
    $(this)
      .parent(".item__info")
      .removeClass("on");
    return;
  });
});
