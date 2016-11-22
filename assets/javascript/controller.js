var getURI = function (sParam) {
    "use strict";
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i = i + 1) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
},
    getPage = function (id, callback) {
        "use strict";
        var i;

        $.get("./assets/javascript/model.json", function (data) {
            for (i = 0; i < data.length; i = i + 1) {
                if (data[i].id === id) {
                    callback(data[i]);
                }
            }
        });
    };


    $(document).ready(function () {
       "use strict";

        if (getURI("id") === undefined) {
            getPage(1, function (page) {
                buildPage(page);

            });
        } else if (getURI("id") !== undefined) {
            getPage(parseInt(getURI("id"), 0), function (page) {
                buildPage(page);
            });
        }
    });