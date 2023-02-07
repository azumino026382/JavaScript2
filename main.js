let result = document.getElementById("result"); 

function calculate(target) {
    let targetValue = target.innerHTML

    if (targetValue == "AC") {
        result.innerHTML = "0";
    } else if (targetValue == "00") {
        if (result.innerHTML == "0") {
            result.innerHTML = "0";
        } else {
            result.innerHTML += targetValue;
        }    
    } else if (targetValue == "=") {
        if (result.innerHTML.slice(-1) == ".") {
            return;
        }
        result.innerHTML = eval(result.innerHTML);
    } else if (targetValue == ".") {
        const targetStr = result.innerHTML
        if (targetStr.includes(".")) {
            return;
        } else {
            result.innerHTML += targetValue
        }
        /*if (result.innerHTML.slice(-1) == ".") {
            let decimal point = result.innerHTML.slice(0, -1);
            result.innerHTML = decimal point + targetValue;
        } else {    
            result.innerHTML += targetValue;
        }*/
    } else if (targetValue == "+") {
        if (result.innerHTML.slice(-1) == ".") {
            return;
            /*let slice = result.innerHTML.slice(0, -1);
            result.innerHTML = slice + targetValue;*/
        }
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
        if (result.innerHTML.slice(-1) == ".") {
            return;
        }
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
        if (result.innerHTML.slice(-1) == ".") {
            return;
        }
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
        if (result.innerHTML.slice(-1) == ".") {
            return;
        }
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
        /*if (result.innerHTML.slice(-1) == ".") {
            return;
        }*/
        if (result.innerHTML == "0") {
            result.innerHTML = targetValue;
        } else {
            result.innerHTML += targetValue;
        }
        
        
    }
}

