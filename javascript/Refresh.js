var count = 0;

function refreshGalleryItems(randomImageIndex) {

  $.each($("img"), function () {
    $(this).removeClass("animateIn");
    $(this).addClass("animateOut");
  });
  $.each($("p"), function () {
    $(this).removeClass("animateIn");
    $(this).addClass("animateOut");
  });
  $.each($("span"), function () {
    $(this).removeClass("icon-noshow");
    $(this).addClass("icon-spinner");
  });
  setTimeout(loadNewData, 1500)
}

function loadNewData() {
  count = 0;
  $.getJSON('https://api.unsplash.com/photos/random/?client_id=3db5ef77cc15f221119e4d4bde44a68b4cc1d1a36ba0a1955b5d120a37c94c58', {
    count: numItemsToGenerate,
    w: 200,
    h: 160
  }, function (data) {
    count = 0;
    $.each($("img"), function () {
      $(this).attr("src", data[count].urls.custom);
      count++;
    });
    $.each($(".name"), function () {
      count = 0;
      $(this).text = data[count].user.name;
      count++;
    });

    count = 0;
    $.each($(".bio"), function () {
      if (data[count].user.bio !== null) {
        console.log("data-text is not null: " + data[count].user.bio);

        console.log(data[count].user.bio + ", " + count);
        $(this).attr("data-text", data[count].user.bio);
        $(this).text(data[count].user.bio);
        count++;
      } else {
        console.log("data-text is null: " + data[count].user.bio);

        console.log(data[count].user.bio + ", " + count);
        $(this).attr("data-text", " ");
        $(this).text(" ");
        count++;
      }
    });
  });
  count = 0;
  setTimeout(showContent, 3000);
}

function showContent() {
  $.each($("span"), function () {
    $(this).removeClass("icon-spinner");
    $(this).addClass("icon-noshow");
  });
  $.each($("img"), function () {
    $(this).removeClass("animateOut");
    $(this).addClass("animateIn");
  });
  $.each($("p"), function () {
    $(this).removeClass("animateOut");
    $(this).addClass("animateIn");
  });

}
