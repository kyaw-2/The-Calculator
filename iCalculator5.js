function calculatecon124() {
   const con124L = document.getElementById("con124L").value;
   const con124B = document.getElementById("con124B").value;
   const con124H = document.getElementById("con124H").value;
   const con124N = document.getElementById("con124N").value;

   // Check if any of the input fields are empty
   if (!con124L || !con124B || !con124H || !con124N) {
       document.getElementById("con124output").innerHTML = "Please fill all!!!";
       return;
   }

   const Total = con124L * con124B * con124H * con124N;
   const totalC = (Total * 2070) / 100;
   const RC = totalC / 112;
   const RChip = (Total * 92) / 10000;
   const RS = (Total * 46) / 10000;

   if(RC <= 1){
      document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bag, Chipping = " + RChip.toFixed(2) + "suds and Sand = " + RS.toFixed(2) + "suds.";

   }
   else if(RChip <= 1 && RS <= 1){
    document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bags, Chipping = " + RChip.toFixed(2) + "sud and Sand = " + RS.toFixed(2) + "sud.";
   }
   else if(RC <= 1 && RS <= 1){
    document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bag, Chipping = " + RChip.toFixed(2) + "suds and Sand = " + RS.toFixed(2) + "sud.";
   }
   else if(RC <=1 && RChip <= 1 && RS <= 1){
    document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bag, Chipping = " + RChip.toFixed(2) + "sud and Sand = " + RS.toFixed(2) + "sud.";
   }
   else if(RChip <= 1){
      document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bags, Chipping = " + RChip.toFixed(2) + "sud and Sand = " + RS.toFixed(2) + "suds.";

   }
   else if(RS <= 1){
      document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bags, Chipping = " + RChip.toFixed(2) + "suds and Sand = " + RS.toFixed(2) + "sud.";

   }
   else if(RC <= 1 && RChip <= 1){
      document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bags, Chipping = " + RChip.toFixed(2) + "sud and Sand = " + RS.toFixed(2) + "sud.";

   }
   else{
      document.getElementById("con124output").innerHTML = "For " + con124N + " numbers of ("+ con124L + " x " + con124B + " x " + con124H + " ) size concrete: " + "Cement = " + RC.toFixed(2) + "bags, Chipping = " + RChip.toFixed(2) + "suds and Sand =" + RS.toFixed(2) + "suds.";
   }
  }