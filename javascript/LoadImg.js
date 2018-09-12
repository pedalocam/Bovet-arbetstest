var cls = "d-flex flex-column galr";
var imgCls = "img-fluid";
var pNameCls = "des name";
var pBioCls = "des bio";
var spinner = "wrap spinner";

function renderGalleryItems() {
  $.getJSON('https://api.unsplash.com/photos/random/?client_id=44d8e2275ffe6d074c3c14247cf641cdeebc10b09263b029f6865f9e49415181', {
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
