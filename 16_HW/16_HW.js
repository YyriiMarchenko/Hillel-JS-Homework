const $window = $(window);

$window.on("resize", function () {
  console.log($window.width());
  if ($window.width() <= 768) {
    $("#myModal").addClass("modal fade in").css({
      display: "block",
      "padding-left": "11px",
    });
  }
});

const $btn = $(".close");
$btn.on("click", function () {
  $("#myModal").addClass("modal fade ").css({
    display: "none",
  });
});
