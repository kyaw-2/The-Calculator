function calculateP() {
    const Lp = parseFloat(document.getElementById("PL").value);
    const Hp = parseFloat(document.getElementById("PH").value);
    const Sp = parseFloat(document.getElementById("side").value);
    const CEMENT_FACTOR = 1.5;
    const SAND_FACTOR = 5;
    const TCp = (Sp * Lp * Hp * CEMENT_FACTOR) / 112;
    const TSp = (Sp * Lp * Hp * SAND_FACTOR) / 10000;

    if (isNaN(Lp) || isNaN(Hp) || isNaN(Sp) || Sp === "select"){
        document.getElementById("Poutput").innerHTML = "Please fill all!!!";
        return;
    }
    else if(TCp < 1 && TSp < 1){
        document.getElementById("Poutput").innerHTML = `Total Cement = ${TCp.toFixed(2)} bag and Sand = ${TSp.toFixed(2)} sud.`;
    }
    else if(TCp < 1){
        document.getElementById("Poutput").innerHTML = `Total Cement = ${TCp.toFixed(2)} bag and Sand = ${TSp.toFixed(2)} suds.`;
    }
    else if(TSp < 1){
        document.getElementById("Poutput").innerHTML = `Total Cement = ${TCp.toFixed(2)} bags and Sand = ${TSp.toFixed(2)} sud.`;
    }
    else{
        document.getElementById("Poutput").innerHTML = `Total Cement = ${TCp.toFixed(2)} bags and Sand = ${TSp.toFixed(2)} suds.`;
    }



    }
    
    
  