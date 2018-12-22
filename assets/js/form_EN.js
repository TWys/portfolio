var name_status;
var mail_status;

function nameValidation() {
    var name = document.getElementById('form_name').value;
    name_status = 0;
    if (name.length >= 1) {
        if (name.length <= 3) {
            document.getElementById('form_name').style.border = "1px solid red";
            document.getElementById('send_form_status').innerHTML = "Please insert at least 4 characters in 'Name' box";
            document.getElementById('send_form_status').style.color = "red";
        }
        else {
            document.getElementById('form_name').style.border = "1px solid green";
            document.getElementById('send_form_status').innerHTML = "";
            name_status = 1;
            showButton();
        }
    }
    else {
        document.getElementById('send_form_status').innerHTML = "";
        document.getElementById('form_name').style.border = "none";
    }
}

function mailValidation() {
    var email = document.getElementById('form_mail').value;
    if (email.length >= 1) {
        var regexp = /([-\w.]{2,})+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
        if (regexp.test(email) === false) {
            document.getElementById('form_mail').style.border = "1px solid red";
            document.getElementById('send_form_status').innerHTML = "Incorrect email address. Please correct it.";
            document.getElementById('send_form_status').style.color = "red";
        }
        else {
            document.getElementById('form_mail').style.border = "1px solid green";
            document.getElementById('send_form_status').innerHTML = "";
            mail_status = 1;
            showButton();
        }
    }
    else {
        document.getElementById('send_form_status').innerHTML = "";
        document.getElementById('form_mail').style.border = "none";
    }

}

function showButton() {
    if (mail_status == 1 && name_status == 1) {
        document.getElementById('form_button').className = 'center-block';
        return 1;
    }
}

$(document).ready(function () {

    $("html").on("click", "#form_button", function (e) {
        e.preventDefault();
        $("#send_form_status").html('').hide();
        var data = $("#form1").serialize();
        $.post("/send_form_EN.php", data, function (res) {
            $("#send_form_status").html(res.msg).show();
            if (res.status == 1) {
                $("#form1")[0].reset();
                $("#send_form_status").css('color', 'green');
                $("#form_name").css('border', 'none');
                $("#form_mail").css('border', 'none');
                $("#form_button").addClass('hidden');
            }
            if (res.status == 0) {
                $("#send_form_status").css('color', 'red');
            }
        });
    });


});