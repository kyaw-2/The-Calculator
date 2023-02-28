function calculatehc() {
    const length = parseFloat(document.getElementById("hcL").value);
    const breadth = parseFloat(document.getElementById("hcB").value);
    const height = parseFloat(document.getElementById("hcH").value);
    const number = parseFloat(document.getElementById("hcN").value);
    const size = length * breadth * height;
    const hcResult = size * number;
    const hcR = hcResult / 100;
    if(hcR <= 1){
      document.getElementById("hcoutput").innerHTML = "Total number of hardcore is " + hcR.toFixed(2) + " Sud.";
    }
    else if( !length || !breadth || !height || !number){
      document.getElementById("hcoutput").innerHTML = "Please fill all!!!"
      return;
  }
    else{
      document.getElementById("hcoutput").innerHTML = "Total number of hardcore is " + hcR.toFixed(2) + " Suds.";
    }
}