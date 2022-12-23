pagesList = ["Web Development", "Software Development", "Offshore Services", "Multimedia", "Printmedia", "Embedded Systems", "ERP", "SAP", "Website Design", "Template Design", "Web based Application", "Website Maintainance", "SEO", "Custom Website", "Ecommerce Website", "Mortgage Website", "Real Estate Website", "Online Development"];
linksList = ["web-development", "software-development", "offshore-services", "multimedia", "printmedia", "embedded-systems", "erp", "sap", "website-design", "template-design", "web-based-application", "website-maintainance", "seo", "custom-website", "ecommerce-website", "mortgage-website", "real-estate-website", "online-development"];

var linkCard1 = "<div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12\"><a href=\"/services/web-design/";
var linkCard2 = "/\" class=\"card design-card\"><div class=\"card-body\"><h5 class=\"card-text\">";
var linkCard3 = "</h5></div></a></div>";
var linkCardStr = "";

for (var i = 0; i < 18; i++) {
    linkCardStr = linkCardStr + linkCard1 + linksList[i] + linkCard2 + pagesList[i] + linkCard3;
}

document.getElementById("link-row").innerHTML = linkCardStr;