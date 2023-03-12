function calculateVolcon(){
    const L = parseFloat(document.getElementById("VolconL").value);
    const B = parseFloat(document.getElementById("VolconB").value);
    const H = parseFloat(document.getElementById("VolconH").value);
    const N = parseFloat(document.getElementById("VolconN").value);
    const T = L * B * H * N;
    const R = T * 0.0283168;
    document.getElementById("ConVoloutput").innerHTML = `${R.toFixed(2)} m&sup3;`
}