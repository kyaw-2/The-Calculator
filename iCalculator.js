function calculate() {
  const diameterTonMap = {
    6: { coefficient: 0.149, showNos: false },
    6.5: { coefficient: 0.175, showNos: false },
    8: { coefficient: 0.265, showNos: false },
    9.5: { coefficient: 0.374, showNos: false },
    10: { coefficient: 0.414, showNos: false },
    12: { coefficient: 0.595, showNos: false },
    12.7: { coefficient: 0.668, showNos: false },
    13: { coefficient: 0.668, showNos: false },
    15.9: { coefficient: 1.047, showNos: false },
    16: { coefficient: 1.06, showNos: true },
    18: { coefficient: 1.342, showNos: false },
    19.1: { coefficient: 1.511, showNos: false },
    20: { coefficient: 1.656, showNos: false },
    22: { coefficient: 2.004, showNos: false },
    22.2: { coefficient: 2.041, showNos: false },
    24: { coefficient: 2.385, showNos: false },
    25: { coefficient: 2.588, showNos: false }
  };

  const diameter = parseFloat(document.getElementById("diameter").value);
  const feet = parseFloat(document.getElementById("feet").value);
  const ton = diameterTonMap[diameter] ? diameterTonMap[diameter].coefficient * feet / 2240 : NaN;
  const nos = diameterTonMap[diameter] && diameterTonMap[diameter].showNos ? feet / 39.33 : NaN;

  if (!isNaN(ton) && !isNaN(nos)) {
    document.getElementById("output").innerHTML = nos.toFixed(2) + " numbers of rebars and " + ton.toFixed(2) + " ton.";
  } 
  else if( !diameter || !feet){
    document.getElementById("output").innerHTML = "Please fill all!!!"
    return;
}
  else if (!isNaN(ton)) {
    document.getElementById("output").innerHTML = ton.toFixed(2) + " ton.";
  } 
  else {
    document.getElementById("output").innerHTML = "Invalid diameter. Please enter a valid diameter.";
  }

  var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function() {
    var allInputs = document.getElementsByClassName("all");
    for (var i = 0; i < allInputs.length; i++) {
      allInputs[i].value = "";
    }
  });
    
  document.getElementById("feet").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      calculate();
    }
  });
}
