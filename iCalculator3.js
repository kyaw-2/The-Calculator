function calculateLean(){

const LeanL = parseFloat(document.getElementById("LeanL").value);
const LeanB = parseFloat(document.getElementById("LeanB").value);
const LeanH = parseFloat(document.getElementById("LeanH").value);
const LeanN = parseFloat(document.getElementById("LeanN").value);
const Lcft = LeanL * LeanB * LeanH * LeanN;
const totalLC = (Lcft * 1440) / 100;
const RLC = totalLC / 112;
const totalLA = (Lcft * 96) / 100;
const totalLS = (Lcft * 48) / 100;
const RLA = totalLA / 100;
const RLS = totalLS / 100;

if(RLC <= 1 && RLA <= 1 && RLS <= 1){
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bag, " + "Aggregate = " + RLA.toFixed(2) + " sud " + ", and Sand = " + RLS.toFixed(2) + " sud."
}
else if( !LeanL || !LeanB || !LeanH || !LeanN){
    document.getElementById("Leanoutput").innerHTML = "Please fill all!!!"
    return;
}
else if(RLC <= 1 && RLA <= 1){
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bag, " + "Aggregate = " + RLA.toFixed(2) + " sud " + ", and Sand = " + RLS.toFixed(2) + " suds."
}
else if(RLC <= 1 && RLS <= 1){
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bag, " + "Aggregate = " + RLA.toFixed(2) + " suds " + ", and Sand = " + RLS.toFixed(2) + " sud."
}
else if(RLA <= 1 && RLS <= 1){
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bags, " + "Aggregate = " + RLA.toFixed(2) + " sud " + ", and Sand = " + RLS.toFixed(2) + " sud."
}
else if(RLC <= 1){
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bag, " + "Aggregate = " + RLA.toFixed(2) + " suds " + ", and Sand = " + RLS.toFixed(2) + " suds."
}
else if(RLA <= 1){
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bags, " + "Aggregate = " + RLA.toFixed(2) + " sud " + ", and Sand = " + RLS.toFixed(2) + " suds."
}
else if(RLS <= 1){
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bags, " + "Aggregate = " + RLA.toFixed(2) + " suds " + ", and Sand = " + RLS.toFixed(2) + " sud."
}
else{
    document.getElementById("Leanoutput").innerHTML = "Total: Cement = " + RLC.toFixed(2) + " bags, " + "Aggregate = " + RLA.toFixed(2) + " suds " + ", and Sand = " + RLS.toFixed(2) + " suds."
}
}