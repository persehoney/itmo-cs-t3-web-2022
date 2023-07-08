window.notify = function (message) {
    $.notify(message, {
        position: "right bottom",
        className: "success"
    });
}

window.post_request = function (loginOrTitle, passwordOrText, error, action) {
    $.ajax({
        type: "POST",
        url: "",
        dataType: "json",
        data: {
            action: action,
            title: loginOrTitle,
            login: loginOrTitle,
            text: passwordOrText,
            password: passwordOrText
        },
        success: function (response) {
            if (response["error"]) {
                error.text(response["error"]);
            } else if (response["redirect"]) {
                location.href = response["redirect"];
            }
        }
    });
}