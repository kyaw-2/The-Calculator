function calculateBrick(){
    const Lth = parseFloat(document.getElementById("Brick2L").value);
    const Hig = parseFloat(document.getElementById("Brick2H").value);
    const Total = Lth * Hig;
    const RBrick = (Total * 550) / 100;
    const RCon = (Total * 2.97) / 112;
    const RSand = (Total * 10) / 10000;
    if(RBrick <= 1 && RCon <=1 && RSand <=1){
      document.getElementById("Brick2output").innerHTML = `For (${Lth}x4.5x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}no, cement = ${RCon.toFixed(2)}bag and sand = ${RSand.toFixed(2)} sud. `
    }
    else if(RBrick <= 1 && RCon <= 1){
      document.getElementById("Brick2output").innerHTML = `For (${Lth}x4.5x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}no, cement = ${RCon.toFixed(2)}bag and sand = ${RSand.toFixed(2)} suds. `
    }
    else if(RBrick <= 1 && RSand <=1){
      document.getElementById("Brick2output").innerHTML = `For (${Lth}x4.5x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}no, cement = ${RCon.toFixed(2)}bags and sand = ${RSand.toFixed(2)} sud. `
    }
    else if(RSand <= 1 && RCon <= 1){
      document.getElementById("Brick2output").innerHTML = `For (${Lth}x4.5x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}nos, cement = ${RCon.toFixed(2)}bag and sand = ${RSand.toFixed(2)} sud. `
    }
    else if(RBrick <= 1){
      document.getElementById("Brick2output").innerHTML = `For (${Lth}x4.5x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}no, cement = ${RCon.toFixed(2)}bags and sand = ${RSand.toFixed(2)} suds. `
    }
    else if(RSand <= 1){
      document.getElementById("Brick2output").innerHTML = `For (${Lth}x4.5x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}nos, cement = ${RCon.toFixed(2)}bags and sand = ${RSand.toFixed(2)} sud. `
    }
    else if(RCon <= 1){
      document.getElementById("Brick2output").innerHTML = `For (${Lth}x4.5x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}nos, cement = ${RCon.toFixed(2)}bag and sand = ${RSand.toFixed(2)} suds. `
    }
    else if(!RCon || !RSand || !RBrick){
      document.getElementById("Brick2output").innerHTML = `Please fill all!!!`
    }
    else{
      document.getElementById("Brick2output").innerHTML = `For (${L}x${B}x${Hig}) size brick wall: total Bricks = ${RBrick.toFixed(2)}nos, cement = ${RCon.toFixed(2)}bags and sand = ${RS.toFixed(2)} suds. `
    }
  }