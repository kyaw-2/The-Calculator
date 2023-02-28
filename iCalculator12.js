function calculateConTop(){
    const Ltop = parseFloat(document.getElementById("ConTopL").value);
    const Btop = parseFloat(document.getElementById("ConTopB").value);
    const Ntop = parseFloat(document.getElementById("ConTopN").value);
    const topTotal = Ltop * Btop * Ntop;
    const RC = (2.59 * topTotal) / 112;
    const RS = (5.75 * topTotal) / 10000;
    const RA = (11.5 * topTotal) / 10000;
    if(RC < 1 && RS < 1 & RA < 1){
        document.getElementById("ConTopoutput").innerHTML = `Toatal: cement = ${RC.toFixed(2)}bag, sand = ${RS.toFixed(2)} sud and aggregate = ${RA.toFixed(2)} sud.`
    }
    else if(RC < 1 && RS < 1){
        document.getElementById("ConTopoutput").innerHTML = `Toatal: cement = ${RC.toFixed(2)}bag, sand = ${RS.toFixed(2)} sud and aggregate = ${RA.toFixed(2)} suds.`
    }
    else if(RC < 1 && RA < 1){
        document.getElementById("ConTopoutput").innerHTML = `Toatal: cement = ${RC.toFixed(2)}bag, sand = ${RS.toFixed(2)} suds and aggregate = ${RA.toFixed(2)} sud.`
    }
    else if(RS < 1 && RA < 1){
        document.getElementById("ConTopoutput").innerHTML = `Toatal: cement = ${RC.toFixed(2)}bags, sand = ${RS.toFixed(2)} sud and aggregate = ${RA.toFixed(2)} sud.`
    }
    else{
        document.getElementById("ConTopoutput").innerHTML = `Toatal: cement = ${RC.toFixed(2)}bags, sand = ${RS.toFixed(2)} suds and aggregate = ${RA.toFixed(2)} suds.`
    }
  }