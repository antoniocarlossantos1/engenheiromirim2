var centroXS = 382;
var centroYS = 190;
var raioS = 40;
var centroXE = 400;
var centroYE = 150;
var raio = 20;
var relogio = 0;
var imageminstruções;
var imagemcreditos;
var imageminiciar;
var imagemfase2;
var imagemmaça
var tela = 0;
var robo = []
var contador = 0;
var tempo = 0;
var robo1
var nivel = 1;
var pontos = 0;
var time = 0
//tela = 1 instruções
//tela = 2 iniciar
//tela = 3 creditos
function telainiciar(){
  background(220);
  image(imageminiciar,0,0,470,260)
    image(robo1,190,70,150,190)
  image(mascote,50,70,150,190)
  if(mouseIsPressed && mouseX>centroXE && mouseX<centroXE+raio && mouseY>centroYE && mouseY<centroYE+raio){
  image(robo[contador%25],190,70,150,190);
      tempo++;
    contador++;
    pontos = 100;
    }
  if(contador == 25) {tela = 4}
  fill(255,0,0);
  ellipse(centroXE,centroYE,2*raio,2*raio);
    fill(0,255,0);
    square(382,190,40);
   fill(0,0,255);
   triangle(380, 110, 420, 110, 398, 60);
}
function telafasedois(){
  if(mouseIsPressed && mouseX>282 && mouseX<282+45 && mouseY>190 && mouseY<190+45){
    tela = 5;
  }  
  background(220);
  image(imagemfase2,0,0,470,260)
  image(mascote2,50,70,150,190)
  image(imagemmaça,190,40,150,50)
  textSize(20);
text('1', 190, 170);
  textSize(20);
text('3', 290, 170);
  textSize(20);
text('2', 390, 170);
  square(382,190,45);
   fill(0,0,255);
  square(282,190,45);
   fill(0,0,255);
  square(182,190,45);
   fill(0,0,255);
}
function telafasetres(){
  background(220);
  image(imagemfase3,0,0,470,260)
  image(mascote3,50,70,150,190)
  if(mouseIsPressed && mouseX>360 && mouseX<360+45 && mouseY>45 && mouseY<45+45){
      tela = 6
    }
}
function telacreditos(){
  background(220);
  image(imagemcreditos,0,0,470,260)
  if(mouseIsPressed && mouseX>40 && mouseX<40+45 && mouseY>220 && mouseY<220+25){
      tela = 0
      stroke(200)
            fill(255);
    }
  rect(40, 220, 30, 25, 10);
  fill('#000040')
  noStroke()
   textSize(20);
text('🠔', 45, 240);
fill(0, 102, 153);
}
function telafinal(){
  background(220);
  image(imagemfasefinal,0,0,470,260)
  
}
function telainstruções(){background(220);
  image(imageminstruções,0,0,470,260)
if(mouseIsPressed && mouseX>40 && mouseX<40+45 && mouseY>220 && mouseY<220+25){
      tela = 0
      stroke(200)
            fill(255);
    }
  rect(40, 220, 30, 25, 10);
  fill('#000040')
  noStroke()
   textSize(20);
text('🠔', 45, 240);
fill(0, 102, 153);}
function preload() {
  imagemfasefinal = loadImage('cenarios Engenheiro Mirim-06.jpg');
  imagemfase3 = loadImage('fasetres.png');
  imagemfase2 = loadImage('fase 2.jpg');
  imagemmaça = loadImage('maça-03.png')
  imagemmenu = loadImage('cenarios Engenheiro Mirim_Prancheta 1 cópia.png');
  imageminstruções = loadImage('Prancheta 7.png');
  imagemcreditos = loadImage('Prancheta 4.png');
  imageminiciar = loadImage('cenarios Engenheiro Mirim png-01.png');
  robo1 = loadImage('robo fixo-01.png');
  mascote = loadImage('mascote EM.png');
  mascote3 = loadImage('mascote EM.png');
  mascote2 = loadImage('mascote EM.png');
  robo[0] = loadImage('robo(1).png');
  robo[1] = loadImage('robo(2).png');
  robo[2] = loadImage('robo(3).png');
  robo[3] = loadImage('robo(4).png');
  robo[4] = loadImage('robo(5).png');
  robo[5] = loadImage('robo(6).png');
  robo[6] = loadImage('robo(7).png');
  robo[7] = loadImage('robo(8).png');
  robo[8] = loadImage('robo(9).png');
  robo[9] = loadImage('robo(10).png');
  robo[10] = loadImage('robo(10).png');
  robo[11] = loadImage('robo(10).png');
  robo[12] = loadImage('robo(10).png');
  robo[13] = loadImage('robo(10).png');
  robo[14] = loadImage('robo(10).png');
  robo[15] = loadImage('robo(10).png');
  robo[16] = loadImage('robo(10).png');
  robo[17] = loadImage('robo(10).png');
  robo[18] = loadImage('robo(10).png');
  robo[19] = loadImage('robo(10).png');
  robo[20] = loadImage('robo(10).png');
  robo[21] = loadImage('robo(10).png');
  robo[22] = loadImage('robo(10).png');
  robo[23] = loadImage('robo(10).png');
  robo[24] = loadImage('robo(10).png');
  robo[25] = loadImage('robo(10).png');
  
}
function setup() {
  createCanvas(470,260);
}
function draw() {
  //menu
  if (tela == 0) {
  background(220);
  image(imagemmenu,0,0,470,260)
    if(mouseX>200 && mouseX<200+85 && mouseY>210 && mouseY<210+25){
      stroke(200)
            fill(255);
    }
  rect(200, 210, 85, 25, 10);
    if(mouseIsPressed && mouseX>200 && mouseX<200+85 && mouseY>210 && mouseY<210+25){
      tela = 2
      stroke(200)
            fill(255);
   
  rect(200, 210, 85, 25, 10);
       }
  fill('#000040')
  noStroke()
   textSize(20);
text('Iniciar', 217, 230);
fill(0, 102, 153);
  fill('#000040')
  noStroke()
   textSize(20);
text('Iniciar', 217, 230);
fill(0, 102, 153);
    
    if(mouseIsPressed && mouseX>80 && mouseX<80+85 && mouseY>210 && mouseY<210+25){
      tela = 1
      stroke(200)
            fill(255);
    }
  rect(80, 210, 85, 25, 10);
  fill('#000040')
  noStroke()
   textSize(19);
text('Instrução', 83, 230);
fill(0, 102, 153);
    
    if(mouseIsPressed && mouseX>320 && mouseX<320+85 && mouseY>210 && mouseY<210+25){
      tela = 3
      stroke(200)
            fill(255);
    }
  rect(320, 210, 85, 25, 10);
  fill('#000040')
  noStroke()
   textSize(20);
text('Créditos', 325, 230);
fill(0, 102, 153);
    if(pontos==100){tela=4}
    
  }
  //instruções
  if (tela == 1) {telainstruções();}
  //iniciar
  if (tela == 2) {telainiciar();}
  //
  if (tela == 3) {telacreditos();}
  //
  if(tela == 4) {telafasedois();}
  //
  if(tela == 5) {telafasetres();}
  //
  if(tela == 6) {telafinal();}
}