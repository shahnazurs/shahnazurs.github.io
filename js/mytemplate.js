document.write('\
<nav class="navbar navbar-default">\
<div class="container-fluid">\
<div class="navbar-header">\
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\
    <span class="icon-bar"></span>\
    <span class="icon-bar"></span>\
    <span class="icon-bar"></span> </button>\
    <!-- <a class="navbar-brand" href="#">WebSiteName</a> -->\
</div>\
<div class="collapse navbar-collapse" id="myNavbar">\
    <ul class="nav navbar-nav">\
    <li class="active"><a href="index.html">Home</a></li>\
    <li class="dropdown">\
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tour <span class="caret"></span></a>\
        <ul class="dropdown-menu">\
        <li><a href="tour_ys.html">Yellow Stone National Park</a></li>\
        <li><a href="tour_lv.html">Las Vegas</a></li>\
        <li><a href="tour_page.html">Page, Arizona</a></li>\
        </ul>\
    </li>\
    <li><a href="tour_slc.html">Salt Lake City Snaps</a></li>\
    <li><a href="#">Special Moments</a></li>\
    </ul>\
    <ul class="nav navbar-nav navbar-right"> <li>\
    <!--	<a href="/amreen/ammar.html"><span class="glyphicon glyphicon-fire"></span>&nbsp;&nbsp;Contact Designer</a></li> -->\
        <!-- <button type="button" class="btn btn-info btn-md mybutton" data-toggle="modal" data-target="#myModal">Contact Designer</button>-->\
        <a href="#" data-toggle="modal" data-target="#myModal">Designer?</a>\
</li>\
</ul>\
<!-- Modal -->\
        <div class="modal fade" id="myModal" role="dialog">\
            <div class="modal-dialog"> <!-- Modal content-->\
                <div class="modal-content modalclass">\
                    <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal">&times;</button>\
                        <h4 class="modal-title">Oops... :)</h4>\
                    </div>\
                    <div class="modal-body">\
                        <p>Ahamed Shahnaz [Email: ahamedshahnaz@gmail.com]</p>\
                    </div>\
                    <div class="modal-footer">\
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                    </div>\
                </div> </div>\
        </div>\
</div>\
</div>\
</nav>\
');