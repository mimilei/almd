var root = 'https://www.random.org/integers/';
var polling = true;
var request = {
    'num' : 1,
    'min' : -90,
    'max' : 90,
    'col' : 1,
    'base' : 10,
    'format' : 'plain',
    'rnd' : 'new'
};



function pollServer() {
    queryString = $.param(request)
    $.ajax({
        url: root + '?' + queryString,
        method: 'GET',
        success: function (response) {
            if (polling) {
                console.log(response);
                // data = JSON.parse(response);
                $("#angle").html(Number(response));
                setTimeout(pollServer, 1000);
            }
        }
    });
}



function pause () {
    $("#pause").toggle();
    $("#message").html("Paused").show().delay(500).fadeOut(300);
    $("#resume").toggle();
    polling = false;
}

function resume () {
    polling = true;
    pollServer();
    $("#pause").toggle();
    $("#resume").toggle();
    $("#message").html("Resumed").show().delay(500).fadeOut(300);
}


