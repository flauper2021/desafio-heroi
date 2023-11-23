let nomeHeroi = "Roland";
let xpHeroi = 9000;
let nivelHeroi;

if(xpHeroi < 1000){
    nivelHeroi = "Ferro";
}else if(xpHeroi >=1000 && xpHeroi <= 2000){
    nivelHeroi = "Bronze"
}else if(xpHeroi >=2001 && xpHeroi <= 5000){
    nivelHeroi = "Prata"
}else if(xpHeroi >=5001 && xpHeroi <= 7000){
    nivelHeroi = "Ouro"
}else if(xpHeroi >=7001 && xpHeroi <= 10000){
    nivelHeroi = "Platina"
}else if(xpHeroi >=10001 && xpHeroi <= 14000){
    nivelHeroi = "Ascendente"
}else if(xpHeroi >=14001 && xpHeroi <= 20000){
    nivelHeroi = "Imortal"
}else{
    nivelHeroi = "Radiante"
}


console.log("O nome do herói é "+ nomeHeroi + ", ele tem " + xpHeroi +
" de experiência, sendo um aventureiro de nível "+ nivelHeroi + ".");

