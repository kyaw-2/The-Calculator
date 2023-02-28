function calculateWood(){
    const woodL = parseFloat(document.getElementById("woodL").value);
    const woodB = parseFloat(document.getElementById("woodB").value);
    const woodH = parseFloat(document.getElementById("woodH").value);
    const woodN = parseFloat(document.getElementById("woodN").value);
    
    const totalL = woodL * woodN;
    const R = totalL * woodB * woodH
    const Result = R / 7200;
    if(Result <= 1){
        document.getElementById("woodoutput").innerHTML = Result.toFixed(2) + " ton.";
    }
    else if( !woodL || !woodB || !woodH || !woodN){
        document.getElementById("woodoutput").innerHTML = "Please fill all!!!"
        return;
    }
    else{
        document.getElementById("woodoutput").innerHTML = Result.toFixed(2) + " tons.";
    }
    }