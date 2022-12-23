pagesList = ["Ad Design", "Banner Design", "Brochure Design", "Book Cover Design", "Calling Card Design", "CD Cover Design", "Certificate Design", "Corporate Identity", "DVD Cover Design", "Folder Design", "Flyer Design", "Illustration", "Invitation Card Design", "Icon Design", "Logo Design", "Label Design", "Menu Design", "Magazine Design", "Newsletter Design", "Postcard Design", "Poster Design", "Photo Restoration", "Software Box Design", "T-shirt Design", "Text Effect Design", "Wallpaper Design"];
linksList = ["ad-design", "banner-design", "brochure-design", "book-cover-design", "calling-card-design", "cd-cover-design", "certificate-design", "corporate-identity", "dvd-cover-design", "folder-design", "flyer-design", "illustration", "invitation-card-design", "icon-design", "logo-design", "label-design", "menu-design", "magazine-design", "newsletter-design", "postcard-design", "poster-design", "photo-restoration", "software-box-design", "t-shirt-design", "text-effect-design", "wallpaper-design"];

var linkCard1 = "<div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12\"><a href=\"/services/graphic-design/";
var linkCard2 = "/\" class=\"card design-card\"><div class=\"card-body\"><h5 class=\"card-text\">";
var linkCard3 = "</h5></div></a></div>";
var linkCardStr = "";

for (var i = 0; i < 26; i++) {
    linkCardStr = linkCardStr + linkCard1 + linksList[i] + linkCard2 + pagesList[i] + linkCard3;
}

document.getElementById("link-row").innerHTML = linkCardStr;