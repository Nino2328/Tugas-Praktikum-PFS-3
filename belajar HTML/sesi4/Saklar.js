function Saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    
    if (toggle1.checked) {
        Lampu1.src = "Aset/images/On.gif";
    } else {
        Lampu1.src = "Aset/images/Off.gif";
    }
    if (toggle2.checked) {
        Lampu2.src = "Aset/images/On.gif";
    } else {
        Lampu2.src = "Aset/images/Off.gif";
    }
    if (toggle3.checked) {
        Lampu3.src = "Aset/images/On.gif";
    } else {
        Lampu3.src = "Aset/images/Off.gif";
    }
}