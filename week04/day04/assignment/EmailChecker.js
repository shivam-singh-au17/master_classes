function userNameValid(email) {
    var atSeprator = email.split("@");
    var userName = atSeprator[0];

    if (userName == "") {
        return false;
    }

    if (userName[0] == ".") {
        return false;
    }
    var valid = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890_.-"
    var validArr = valid.split("")
    for (var i = 0; i < userName.length; i++) {
        if (!validArr.includes(userName[i])) {
            return false;
        }
    }

    var dotSapretor = userName.split(".");
    if (dotSapretor.length = 2) {
        return false
    }
    return true
}

function userDomainValid(email) {
    var atSeprator = email.split("@");
    var domain = atSeprator[1]
    if (domain[0] == ".") {
        return false
    }
    return true

}

function userTldValid(email) {
    var atSeprator = email.split("@");
    var domain = atSeprator[1]
    var dotSapretor = domain.split(".");

    var tld = dotSapretor[dotSapretor.length - 1];

    if (tld.length < 2) {
        return false
    }
    return true
}

function userAllowsValid(email) {
    var atSeprator = email.split("@");

    if (atSeprator !== 2) {
        return false
    }
    return true
}

var email = 'masai.school.com'

if (userNameValid(email) && userDomainValid(email) && userTldValid(email) && userAllowsValid(email)) {
    console.log("Valid");
} else {
    console.log("Not Valid");
}