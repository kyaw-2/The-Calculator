function calculateSand(){
    const L = parseFloat(document.getElementById("SandL").value);
   const B = parseFloat(document.getElementById("SandB").value);
   const H = parseFloat(document.getElementById("SandH").value);
   const N = parseFloat(document.getElementById("SandN").value);

   const T = L * B * H * N;
   const R = (T * 125) / 10000;
   if (R <= 1){
    document.getElementById("Sandoutput").innerHTML = R + " sud."
   }
   else if(!L || !B || !H || !N){
    document.getElementById("Sandoutput").innerHTML = "Please fill all!!!"
   }
   else{
    document.getElementById("Sandoutput").innerHTML = R + " suds."
   }
  }