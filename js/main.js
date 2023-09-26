$(function () {
  $(".gallery__slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").addClass("menu__list--active");
  });
  $(".menu__list-link").on("click", function () {
    $(".menu__list").removeClass("menu__list--active");
  });
});
