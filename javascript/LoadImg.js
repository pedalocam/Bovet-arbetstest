var cls = "d-flex flex-column galr";
var imgCls = "img-fluid";
var pNameCls = "des name";
var pBioCls = "des bio";
var spinner = "wrap spinner";

function renderGalleryItems() {
  $.getJSON('https://api.unsplash.com/photos/random/?client_id=458d0170a1acd7f7a38dc3e6166fa2caad9e796404d439d0ef4da50eef8587b1', {
    w: 200,
    h: 160
  }, function (data) {
    var name = data.user.name;
    var bio = "";
    var url = data.urls.custom;
    if (data.user.bio !== null) {
      bio = data.user.bio;
    } else {
      bio = " ";
    }
    var htmlMarkup = '<divclass=""></div></div><div class="' + cls + '"" id="container"><span class="icon-noshow"><i class="fa fa-spinner fa-spin spinCustom"></i></span><img src="' + url + '" class="' + imgCls + '"><p class="' + pNameCls + '" >' + name + '</p><p class="' + pBioCls + ' a" data-text="' + bio + '">' + bio + '</p></div>';

    $('.flex-row').append(htmlMarkup);
  });
}
