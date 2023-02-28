function calculateConFloor(){
    const conL = parseFloat(document.getElementById("ConFL").value);
    const conB = parseFloat(document.getElementById("ConFB").value);
    const conH = parseFloat(document.getElementById("ConFH").value);
    const conT = conL * conB * conH;
    const conRC = (14.4 * conT) / 112;
    const conRSt = (96 * conT) / 10000;
    const conRSa = (48 * conT) / 10000;
    if(conRC < 1 && conRSt < 1 && conRSa < 1){
      document.getElementById("ConFlooroutput").innerHTML = `Total cement = ${conRC.toFixed(2)}bag, 1.5" thick stone Ballast = ${conRSt.toFixed(2)} sud and sand = ${conRSa.toFixed(2)} sud. `;
    }
    else if(conRC < 1 && conRSt < 1){
      document.getElementById("ConFlooroutput").innerHTML = `Total cement = ${conRC.toFixed(2)}bag, 1.5" thick stone Ballast = ${conRSt.toFixed(2)} sud and sand = ${conRSa.toFixed(2)} suds. `;
    }
    else if(conRC < 1 && conRSa < 1){
      document.getElementById("ConFlooroutput").innerHTML = `Total cement = ${conRC.toFixed(2)}bag, 1.5" thick stone Ballast = ${conRSt.toFixed(2)} suds and sand = ${conRSa.toFixed(2)} sud. `;
    }
    else if(conRSt < 1 && conRSa < 1){
      document.getElementById("ConFlooroutput").innerHTML = `Total cement = ${conRC.toFixed(2)}bags, 1.5" thick stone Ballast = ${conRSt.toFixed(2)} sud and sand = ${conRSa.toFixed(2)} sud. `;
    }
    else if(!conL || !conB || !conH){
      document.getElementById("ConFlooroutput").innerHTML = `Please fill all!!!`;
    
    }
    else{
      document.getElementById("ConFlooroutput").innerHTML = `Total cement = ${conRC.toFixed(2)}bags, 1.5" thick stone Ballast = ${conRSt.toFixed(2)} suds and sand = ${conRSa.toFixed(2)} suds. `;
    }
  }