function calculateBrick2(){
    const L = parseFloat(document.getElementById("BrickL").value);
    const B = parseFloat(document.getElementById("BrickB").value);
    const H = parseFloat(document.getElementById("BrickH").value);
    const T = L * B * H;
    const RB = (T * 1350) / 100;
    const RC = (T * 7.8) / 112;
    const RS = (T * 26) / 10000;
    if(RB <= 1 && RC <=1 && RS <=1){
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}no, cement = ${RC.toFixed(2)}bag and sand = ${RS.toFixed(2)} sud. `
    }
    else if(RB <= 1 && RC <= 1){
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}no, cement = ${RC.toFixed(2)}bag and sand = ${RS.toFixed(2)} suds. `
    }
    else if(RB <= 1 && RS <=1){
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}no, cement = ${RC.toFixed(2)}bags and sand = ${RS.toFixed(2)} sud. `
    }
    else if(RS <= 1 && RC <= 1){
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}nos, cement = ${RC.toFixed(2)}bag and sand = ${RS.toFixed(2)} sud. `
    }
    else if(RB <= 1){
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}no, cement = ${RC.toFixed(2)}bags and sand = ${RS.toFixed(2)} suds. `
    }
    else if(RS <= 1){
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}nos, cement = ${RC.toFixed(2)}bags and sand = ${RS.toFixed(2)} sud. `
    }
    else if(RC <= 1){
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}nos, cement = ${RC.toFixed(2)}bag and sand = ${RS.toFixed(2)} suds. `
    }
    else if(!RC || !RS || !RB){
      document.getElementById("Boutput").innerHTML = `Please fill all!!!`
    }
    else{
      document.getElementById("Boutput").innerHTML = `For (${L}x${B}x${H}) size brick wall: total Bricks = ${RB.toFixed(2)}nos, cement = ${RC.toFixed(2)}bags and sand = ${RS.toFixed(2)} suds. `
    }
  }