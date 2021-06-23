const count = document.getElementById("count");
const sfx = new Audio("../sound/Blip_Select18.wav");

i = 0;

function func() {
    i += 1
    count.innerHTML = i;
    sfx.play();
}