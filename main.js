let result = document.getElementById("result"); 

function calculate(target) {
    let targetValue = target.innerHTML

    if (targetValue == "AC") {
        result.innerHTML = "0";
    } else if (targetValue == "00")
        if (result.innerHTML == "0") {
            result.innerHTML = "0";
        } else {
            result.innerHTML += targetValue;
    } else if (targetValue == "=") {
        result.innerHTML = eval(result.innerHTML);
    } else if (targetValue == ".") {
        if (result.innerHTML.slice(-1) == ".") {
            let decimal point = result.innerHTML.slice(0, -1);
            result.innerHTML = decimal point + targetValue;
        } else {    
            result.innerHTML += targetValue;
        }
    } else if (targetValue == "+") {
        if (result.innerHTML.slice(-1) == "+") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "-") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "*") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "/") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else {    
            result.innerHTML += targetValue;
        }
    } else if (targetValue == "-") {
        if (result.innerHTML.slice(-1) == "+") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "-") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "*") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "/") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else {    
            result.innerHTML += targetValue;
        }
    } else if (targetValue == "*") {
        if (result.innerHTML.slice(-1) == "+") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "-") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "*") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "/") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else {    
            result.innerHTML += targetValue;
        }
    } else if (targetValue == "/") {
        if (result.innerHTML.slice(-1) == "+") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "-") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "*") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else if (result.innerHTML.slice(-1) == "/") {
            let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;
        } else {    
            result.innerHTML += targetValue;
        }
    } else {
        if (result.innerHTML == "0") {
            result.innerHTML = targetValue;
        } else {
            result.innerHTML += targetValue;
        }
        
        
    }
}

