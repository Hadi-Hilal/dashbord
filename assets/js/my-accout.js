$(document).ready(function () {
    var c = 0;
    var cal = "";
    var userName = false;
    var firstName = false;
    var lastName = false;
    var mobNO = false;
    var verifCode = false;
    var addrs = false;
    var orgName = false;
    var orPhone = false;
    var email = false;
    var aboutorg = false;
    var adrOrg = false ;
    var dateBirth=false;
    var IdNo=false;
    var expiryDate = false;
    var iban = false;

    $("#userName").change(function (ev) {
        if (document.getElementById("userName").value != "" && (userName === false)) {
            userName = true;
            c = c + 6.5;
        } else if(document.getElementById("userName").value == ""){
            userName = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#firstName").change(function (ev) {
        if (document.getElementById("firstName").value != "" && (firstName === false)) {
            firstName = true;
            c = c + 6.5;
        } else if(document.getElementById("firstName").value == "") {
            firstName = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
        // $(".pprog").css("width", cal);
    });

    $("#lastName").change(function (ev) {
        if (document.getElementById("lastName").value != "" && (lastName === false)) {
            lastName = true;
            c = c + 6.5;
        } else if(document.getElementById("lastName").value == "") {
            lastName = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });


    $("#mobNO").change(function (ev) {
        if (document.getElementById("mobNO").value != "" && (mobNO === false)) {
            mobNO = true;
            c = c + 6.5;
        } else if(document.getElementById("mobNO").value == "") {
            mobNO = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#verifCode").change(function (ev) {
        if (document.getElementById("verifCode").value != "" && (verifCode === false)) {
            verifCode = true;
            c = c + 6.5;
        } else if(document.getElementById("verifCode").value == "") {
            verifCode = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#addrs").change(function (ev) {
        if (document.getElementById("addrs").value != "" && (addrs === false)) {
            addrs = true;
            c = c + 6.5;
        } else if(document.getElementById("addrs").value == "") {
            addrs = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#orgName").change(function (ev) {
        if (document.getElementById("orgName").value != "" && (orgName === false)) {
            orgName = true;
            c = c + 6.5;
        } else if(document.getElementById("orgName").value == "") {
            orgName = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#orPhone").change(function (ev) {
        if (document.getElementById("orPhone").value != "" && (orPhone === false)) {
            orPhone = true;
            c = c + 6.5;
        } else if(document.getElementById("orPhone").value == "") {
            orPhone = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#email").change(function (ev) {
        if (document.getElementById("email").value != "" && (email === false)) {
            email = true;
            c = c + 6.5;
        } else if(document.getElementById("email").value == "") {
            email = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#aboutorg").change(function (ev) {
        if (document.getElementById("aboutorg").value != "" && (aboutorg === false)) {
            aboutorg = true;
            c = c + 6.5;
        } else if(document.getElementById("aboutorg").value == "") {
            aboutorg = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#adrOrg").change(function (ev) {
        if (document.getElementById("adrOrg").value != "" && (adrOrg === false)) {
            adrOrg = true;
            c = c + 6.5;
        } else if(document.getElementById("adrOrg").value == "") {
            adrOrg = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#dateBirth").change(function (ev) {
        if (document.getElementById("dateBirth").value != "" && (dateBirth === false)) {
            dateBirth = true;
            c = c + 6.5;
        } else if(document.getElementById("dateBirth").value == "") {
            dateBirth = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    $("#IdNo").change(function (ev) {
        if (document.getElementById("IdNo").value != "" && (IdNo === false)) {
            IdNo = true;
            c = c + 6.5;
        } else if(document.getElementById("IdNo").value == "") {
            IdNo = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    expiryDate

    $("#expiryDate").change(function (ev) {
        if (document.getElementById("expiryDate").value != "" && (expiryDate === false)) {
            expiryDate = true;
            c = c + 6.5;
        } else if(document.getElementById("expiryDate").value == "") {
            expiryDate = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });

    

    $("#iban").change(function (ev) {
        if (document.getElementById("iban").value != "" && (iban === false)) {
            iban = true;
            c = c + 6.5;
        } else if(document.getElementById("iban").value == "") {
            iban = false;
            c = c - 6.5;
        }
        if(c>97){
            c=100;
        }
        cal = c + "%";
        javascript: document.getElementById('res').innerHTML = cal;
        javascript: document.getElementById('res1').innerHTML = cal;
        javascript: document.getElementById('res2').innerHTML = cal;
        javascript: document.getElementById('res3').innerHTML = cal;
        javascript: document.getElementById('res4').innerHTML = cal;
        $(".prog").css("width", cal);
    });
});