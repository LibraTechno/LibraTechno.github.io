indexNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

row1str = "<div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3\"><div type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
row2str = "modal\"><div class=\"img-";
row3str = "\"></div></div></div>";
strRow = "";

for (var i = 0; i < indexNumbers.length; i++) {
    strRow = strRow + row1str + indexNumbers[i] + row2str + indexNumbers[i] + row3str;
}

document.getElementById("row").innerHTML = strRow;

imgCodes = ["FDD0001", "FDD0002", "FDD0003", "FDD0004", "FDD0005", "FDD0006", "FDD0007", "FDD0008", "FDD0009", "FDD0010", "FDD0011", "FDD0012"]

pageName = "Folder Design";
pageID = "folder-design";
modal1str = "<div class=\"modal\" id=\"img";
modal2str = "modal\" tabindex=\"-1\" aria-labelledby=\"img";
modal3str = "modal\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"img";
modal4str = "modalLabel\">" + pageName + "</h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div><div class=\"modal-body\"><img src=\"/assets/services/graphic-design/" + pageID + "/";
modal5str = ".jpg\" alt=\"" + pageID + "-img-";
modal6str = "\" width=\"100%\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-outline-success\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
modal7str = "modal\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/></svg></button><span class=\"text-muted\">Code: ";
modal8str = "</span><button type=\"button\" class=\"btn btn-outline-success\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
modal9str = "modal\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/></svg></button></div></div></div></div>";
strModal = "";

for (var i = 0; i < indexNumbers.length; i++) {
    if (i == 0) {
        modal6str = "\" width=\"100%\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-outline-success disabled\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
        strModal = strModal + modal1str + indexNumbers[i] + modal2str + indexNumbers[i] + modal3str + indexNumbers[i] + modal4str + indexNumbers[i] + modal5str + indexNumbers[i] + modal6str + indexNumbers[i-1] + modal7str + imgCodes[i] + modal8str + indexNumbers[i+1] + modal9str;
        modal6str = "\" width=\"100%\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-outline-success\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
        continue;
    }
    if (i == indexNumbers.length-1) {
        modal8str = "</span><button type=\"button\" class=\"btn btn-outline-success disabled\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
        strModal = strModal + modal1str + indexNumbers[i] + modal2str + indexNumbers[i] + modal3str + indexNumbers[i] + modal4str + indexNumbers[i] + modal5str + indexNumbers[i] + modal6str + indexNumbers[i-1] + modal7str + imgCodes[i] + modal8str + indexNumbers[i+1] + modal9str;
        modal8str = "</span><button type=\"button\" class=\"btn btn-outline-success\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
        continue;
    }
    strModal = strModal + modal1str + indexNumbers[i] + modal2str + indexNumbers[i] + modal3str + indexNumbers[i] + modal4str + indexNumbers[i] + modal5str + indexNumbers[i] + modal6str + indexNumbers[i-1] + modal7str + imgCodes[i] + modal8str + indexNumbers[i+1] + modal9str;
}

document.getElementById("modal-div").innerHTML = strModal;