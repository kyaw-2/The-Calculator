function calculateP2() {
    const L2 = parseFloat(document.getElementById("PL2").value);
    const H2 = parseFloat(document.getElementById("PH2").value);
    const S2 = parseFloat(document.getElementById("side2").value);
    const CEMENT_FACTOR2 = 2.25;
    const SAND_FACTOR2 = 7.5;
    const TC2 = (S2 * L2 * H2 * CEMENT_FACTOR2) / 112;
    const TS2 = (S2 * L2 * H2 * SAND_FACTOR2) / 10000;

    if (isNaN(L2) || isNaN(H2) || isNaN(S2) || S2 === "select"){
        document.getElementById("P2output").innerHTML = "Please fill all!!!";
        return;
    }
    else if(TC2 < 1 && TS2 < 1){
        document.getElementById("P2output").innerHTML = `Total Cement = ${TC2.toFixed(2)} bag and Sand = ${TS2.toFixed(2)} sud.`;
    }
    else if(TC2 < 1){
        document.getElementById("P2output").innerHTML = `Total Cement = ${TC2.toFixed(2)} bag and Sand = ${TS2.toFixed(2)} suds.`;
    }
    else if(TS2 < 1){
        document.getElementById("P2output").innerHTML = `Total Cement = ${TC2.toFixed(2)} bags and Sand = ${TS2.toFixed(2)} sud.`;
    }
    else{
        document.getElementById("P2output").innerHTML = `Total Cement = ${TC2.toFixed(2)} bags and Sand = ${TS2.toFixed(2)} suds.`;
    }



    }
    