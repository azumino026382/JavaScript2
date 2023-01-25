let result = document.getElementById("result"); 

function calculate(target) {
    let targetValue = target.innerHTML

    if (targetValue == "AC") {
        result.innerHTML = "0";
    } else if (targetValue == "=") {
        result.innerHTML = eval(result.innerHTML);
    } else {
        if (result.innerHTML == "0") {
            result.innerHTML = targetValue;
        } else {
            result.innerHTML += targetValue;
        }
        
        
    }
}
