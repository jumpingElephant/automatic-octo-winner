(function(window, document, undefined) {

    document.getElementById("paginationElement").addEventListener("pageChange", function(e) {
        console.log("Page Number " + e.currentPage + " is selected");
        var spinner=document.getElementsByTagName('pulse-spinner')[0];
        // debugger;
    });

}(window, document));