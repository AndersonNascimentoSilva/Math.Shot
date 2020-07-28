//Matrícula: 20200069469
//Link do video  prova 2: https://youtu.be/5nbUCnMxEhE
//Link do video  prova 3 Gameplay:https://youtu.be/9jQU3iBKhG4
//Link do video  prova 3 Código:https://youtu.be/DcxeX_h11jM


//Tela
var Tela=0
//Menu
var JX=100
var JY=115
var JL=300
var JA=70
var OX=100
var OY=215
var OL=300
var OA=70
var CX=100
var CY=315
var CL=300
var CA=70
var VX=11
var VY=4
var VL=116
var VA=116
var PX=150
var PY=35
var PL=200
var PA=30

//configurações
//pontos
var Pontos = 0
//Tempo
var Tempo=0
var T=0
//Animação
var Arma= []

//Jogo
var RX
var RY
var RX1
var RY1
var RX2
var RY2
var RX3
var RY3
var RX4
var RY4

var cont11=0
var cont12=0
var cont13=0
var cont14=0
var cont15=0
var cont16=0
var cont17=0
var cont18=0


//Velocidade 1
var lv1x=3
var lv1y=3

var lv11x=3+0.2
var lv11y=3+0.2

var lv12x=3-0.2
var lv12y=3-0.2

//Velocidade 2

var lv2x=5
var lv2y=5

var lv21x=5+0.2
var lv21y=5+0.2

var lv22x=5-0.2
var lv22y=5-0.2

var lv23x=5+0.5
var lv23y=5+0.5

//Velocidade nivel 3

var lv3x=6
var lv3y=6

var lv31x=6+0.2
var lv31y=6+0+2

var lv32x=6-0.2
var lv32y=6-0.2

var lv33x=6+0.5
var lv33y=6+0.5

var lv34x=6-0.5
var lv34y=6-0.5

//

function preload(){
//Imagem
parabens = loadImage('Parabains.png');
prof = loadImage('prof.jpeg');
eu = loadImage('eu.jpg');
mira = loadImage('mira.png');
buraco = loadImage('buraco.png');
Tela0 = loadImage('Tela0.png');
creditos = loadImage('creditos.png');
como_jogar = loadImage('como_jogar.png');
erro = loadImage('erro.png');
parabens = loadImage('parabens.png');
mesa = loadImage('mesa.jpeg');
jogo = loadImage('jogo.png');
Fim = loadImage('fim.png')
  
  p2 = loadImage('p2.png')
  p3 = loadImage('p3.png')
  p4 = loadImage('p4.png')
  p5 = loadImage('p5.png')
  p6 = loadImage('p6.png')
  p7 = loadImage('p7.png')
  p8 = loadImage('p8.png')
  
  
//Fonte
font = loadFont('Adumu.ttf');
//Animação  
Arma[0] = loadImage('Arma (1).png');
Arma[1] = loadImage('Arma (2).png');
//Som                   
soundFormats('mp3')
shot=loadSound('shot')
  
}
function setup() {
  createCanvas(900, 900);
  frameRate(60)
}
function draw() {
//Menu
 if(Tela==0){
   background("#778899");
image(Tela0,0,0,900,900)
 

  if ( mouseX > 191 && mouseX < 191 + JL  && mouseY > 275 && mouseY < 275 + JA){
      if(mouseIsPressed){
      Tela = 1.1
  }
  }

  OX=191
  OY=470
  if ( mouseX > OX && mouseX < OX + OL  && mouseY > OY && mouseY < OY + OA+5){
      if(mouseIsPressed){
      Tela = 2
      }
  }

  CX=191
  CY=630
  if ( mouseX > CX && mouseX < CX + CL  && mouseY > CY && mouseY < CY + CA+5){
    if(mouseIsPressed){
      Tela = 3;
    }
  }
 }
//Como jogar
if(Tela==2)
{
  image(como_jogar,0,0,900,900 );
    if ( mouseX > VX && mouseX < VX + VL  && mouseY > VY && mouseY < VY + VA){
    if(mouseIsPressed){
      Tela = 0;
    }}}
//Créditos
if(Tela==3)
{
  image(creditos,0,0,900,900 );
 
  if ( mouseX > VX && mouseX < VX + VL  && mouseY > VY && mouseY < VY + VA){
    if(mouseIsPressed){
      Tela = 0;
    }}

}  
//Tela de parabens
if(Tela==69) 
{ background("#070003")
 image(parabens, 0, 0,900 ,900 );
  
}
  

//
//Fase 1
if(Tela==1.1)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont11<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont11++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 50, 50);

  RX=RX+lv1x
  RY=RY+lv1y
  
  if(RX>865)
    lv1x*=-1
  if(RY>685)
    lv1y*=-1
  
  if(RX<35)
    lv1x*=-1
  if(RY<175)
    lv1y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=1.2
      Pontos=Pontos+1
       Tempo=0
     }}
fill("#169605")
textSize(25)
text("14", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 50, 50);

  RX1=RX1+lv11x
  RY1=RY1+lv11y
  
  if(RX1>865)
    lv11x*=-1
  if(RY1>685)
    lv11y*=-1
  
  if(RX1<35)
    lv11x*=-1
  if(RY1<175)
    lv11y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.1
     }}
fill("#169605")
textSize(25)
text("21", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 50, 50);

  RX2=RX2+lv12x
  RY2=RY2+lv12y
  
  if(RX2>865)
    lv12x*=-1
  if(RY2>685)
    lv12y*=-1
  
  if(RX2<35)
    lv12x*=-1
  if(RY2<175)
    lv12y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.1
     }}
fill("#169605")
textSize(25)
text("9", RX2-15, RY2+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (30-T),647, 110)
  if(T==30)
  { Tela=666.1
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
  textSize(40)
  fill("#FFFFFF")
  text("Responda 2*7=",180,80)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  

//Erro fase 1
if(Tela==666.1)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.1;
      Tempo=0;
    }}
  if(T==30)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//
  
//
//Fase 2
if(Tela==1.2)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont12<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont12++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 50, 50);

  RX=RX+lv1x
  RY=RY+lv1y
  
  if(RX>865)
    lv1x*=-1
  if(RY>685)
    lv1y*=-1
  
  if(RX<35)
    lv1x*=-1
  if(RY<175)
    lv1y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=1.3
      Pontos=Pontos+1
       Tempo=0
     }}
fill("#169605")
textSize(25)
text("6,8", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 50, 50);

  RX1=RX1+lv11x
  RY1=RY1+lv11y
  
  if(RX1>865)
    lv11x*=-1
  if(RY1>685)
    lv11y*=-1
  
  if(RX1<35)
    lv11x*=-1
  if(RY1<175)
    lv11y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.2
     }}
fill("#169605")
textSize(25)
text("6,5", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 50, 50);

  RX2=RX2+lv12x
  RY2=RY2+lv12y
  
  if(RX2>865)
    lv12x*=-1
  if(RY2>685)
    lv12y*=-1
  
  if(RX2<35)
    lv12x*=-1
  if(RY2<175)
    lv12y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.2
     }}
fill("#169605")
textSize(25)
text("6,2", RX2-15, RY2+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (35-T),647, 110)
  if(T==35)
  { Tela=666.2
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
  image(p2,100,0,545,145)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  
//Erro fase 2
if(Tela==666.2)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.2;
      Tempo=0;
    }}
  if(T==35)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//
  
//
//Fase3
if(Tela==1.3)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont13<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont13++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 50, 50);

  RX=RX+lv2x
  RY=RY+lv2y
  
  if(RX>865)
    lv2x*=-1
  if(RY>685)
    lv2y*=-1
  
  if(RX<35)
    lv2x*=-1
  if(RY<175)
    lv2y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=1.4
      Pontos=Pontos+1
       Tempo=0
     }}
fill("#169605")
textSize(25)
text("10,8", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 50, 50);

  RX1=RX1+lv21x
  RY1=RY1+lv21y
  
  if(RX1>865)
    lv21x*=-1
  if(RY1>685)
    lv21y*=-1
  
  if(RX1<35)
    lv21x*=-1
  if(RY1<175)
    lv21y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.3
     }}
fill("#169605")
textSize(25)
text("8,8", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 50, 50);

  RX2=RX2+lv22x
  RY2=RY2+lv22y
  
  if(RX2>865)
    lv22x*=-1
  if(RY2>685)
    lv22y*=-1
  
  if(RX2<35)
    lv22x*=-1
  if(RY2<175)
    lv22y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.3
     }}
fill("#169605")
textSize(25)
text("11", RX2-15, RY2+5)

//R Errada 3
 
 fill("#960516")
 ellipse(RX3,RY3, 50, 50);

  RX3=RX3+lv23x
  RY3=RY3+lv23y
  
  if(RX3>865)
    lv23x*=-1
  if(RY3>685)
    lv23y*=-1
  
  if(RX3<35)
    lv23x*=-1
  if(RY3<175)
    lv23y*=-1
 
  if ( mouseX > RX3-25 && mouseX < RX3 + 33  && mouseY > RY3-25 && mouseY < RY3+33){
     if (mouseIsPressed) {
    Tela=666.3
     }}
fill("#169605")
textSize(25)
text("9,2", RX3-15, RY3+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (40-T),647, 110)
  if(T==40)
  { Tela=666.3
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
image(p3,100,0,545,145)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  
//Erro fase 3
if(Tela==666.3)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.3;
      Tempo=0;
    }}
  if(T==40)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//

//
//Fase4
if(Tela==1.4)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont14<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont14++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 50, 50);

  RX=RX+lv2x
  RY=RY+lv2y
  
  if(RX>865)
    lv2x*=-1
  if(RY>685)
    lv2y*=-1
  
  if(RX<35)
    lv2x*=-1
  if(RY<175)
    lv2y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=1.5
      Pontos=Pontos+1
       Tempo=0
     }}
fill("#169605")
textSize(25)
text("1,2", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 50, 50);

  RX1=RX1+lv21x
  RY1=RY1+lv21y
  
  if(RX1>865)
    lv21x*=-1
  if(RY1>685)
    lv21y*=-1
  
  if(RX1<35)
    lv21x*=-1
  if(RY1<175)
    lv21y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.4
     }}
fill("#169605")
textSize(25)
text("0,8", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 50, 50);

  RX2=RX2+lv22x
  RY2=RY2+lv22y
  
  if(RX2>865)
    lv22x*=-1
  if(RY2>685)
    lv22y*=-1
  
  if(RX2<35)
    lv22x*=-1
  if(RY2<175)
    lv22y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.4
     }}
fill("#169605")
textSize(25)
text("0,5", RX2-15, RY2+5)

//R Errada 3
 
 fill("#960516")
 ellipse(RX3,RY3, 50, 50);

  RX3=RX3+lv23x
  RY3=RY3+lv23y
  
  if(RX3>865)
    lv23x*=-1
  if(RY3>685)
    lv23y*=-1
  
  if(RX3<35)
    lv23x*=-1
  if(RY3<175)
    lv23y*=-1
 
  if ( mouseX > RX3-25 && mouseX < RX3 + 33  && mouseY > RY3-25 && mouseY < RY3+33){
     if (mouseIsPressed) {
    Tela=666.4
     }}
fill("#169605")
textSize(25)
text("2", RX3-15, RY3+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (45-T),647, 110)
  if(T==45)
  { Tela=666.4
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
  image(p4,100,0,545,145)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  
//Erro fase 4
if(Tela==666.4)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.4;
      Tempo=0;
    }}
  if(T==45)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//

//
//Fase 5
if(Tela==1.5)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont15<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont15++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 50, 50);

  RX=RX+lv2x
  RY=RY+lv2y
  
  if(RX>865)
    lv2x*=-1
  if(RY>685)
    lv2y*=-1
  
  if(RX<35)
    lv2x*=-1
  if(RY<175)
    lv2y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=1.6
      Pontos=Pontos+1
       Tempo=0
     }}
fill("#169605")
textSize(25)
text("16,2", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 50, 50);

  RX1=RX1+lv31x
  RY1=RY1+lv31y
  
  if(RX1>865)
    lv31x*=-1
  if(RY1>685)
    lv31y*=-1
  
  if(RX1<35)
    lv31x*=-1
  if(RY1<175)
    lv31y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.5
     }}
fill("#169605")
textSize(25)
text("18,4", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 50, 50);

  RX2=RX2+lv32x
  RY2=RY2+lv32y
  
  if(RX2>865)
    lv32x*=-1
  if(RY2>685)
    lv32y*=-1
  
  if(RX2<35)
    lv32x*=-1
  if(RY2<175)
    lv32y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.5
     }}
fill("#169605")
textSize(20)
text("14,6", RX2-15, RY2+5)

//R Errada 3
 
 fill("#960516")
 ellipse(RX3,RY3, 50, 50);

  RX3=RX3+lv33x
  RY3=RY3+lv33y
  
  if(RX3>865)
    lv33x*=-1
  if(RY3>685)
    lv33y*=-1
  
  if(RX3<35)
    lv33x*=-1
  if(RY3<175)
    lv33y*=-1
 
  if ( mouseX > RX3-25 && mouseX < RX3 + 33  && mouseY > RY3-25 && mouseY < RY3+33){
     if (mouseIsPressed) {
    Tela=666.5
     }}
fill("#169605")
textSize(25)
text("12", RX3-15, RY3+5)

//R Errada 4
 
 fill("#960516")
 ellipse(RX4,RY4, 50, 50);

  RX4=RX4+lv34x
  RY4=RY4+lv34y
  
  if(RX4>865)
    lv34x*=-1
  if(RY4>685)
    lv34y*=-1
  
  if(RX4<35)
    lv34x*=-1
  if(RY4<175)
    lv34y*=-1
 
  if ( mouseX > RX4-25 && mouseX < RX4 + 33  && mouseY > RY4-25 && mouseY < RY4+33){
     if (mouseIsPressed) {
    Tela=666.5
     }}
fill("#169605")
textSize(25)
text("17,1", RX4-15, RY4+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (50-T),647, 110)
  if(T==50)
  { Tela=666.5
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
  image(p5,100,0,545,145)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  
//Erro fase 5
if(Tela==666.5)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.5;
      Tempo=0;
    }}
  if(T==50)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//
  
//
//Fase 6
if(Tela==1.6)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont16<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont16++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 50, 50);

  RX=RX+lv2x
  RY=RY+lv2y
  
  if(RX>865)
    lv2x*=-1
  if(RY>685)
    lv2y*=-1
  
  if(RX<35)
    lv2x*=-1
  if(RY<175)
    lv2y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=1.7
      Pontos=Pontos+1
       Tempo=0
     }}
fill("#169605")
textSize(25)
text("1,2", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 50, 50);

  RX1=RX1+lv31x
  RY1=RY1+lv31y
  
  if(RX1>865)
    lv31x*=-1
  if(RY1>685)
    lv31y*=-1
  
  if(RX1<35)
    lv31x*=-1
  if(RY1<175)
    lv31y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.6
     }}
fill("#169605")
textSize(25)
text("1,6", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 50, 50);

  RX2=RX2+lv32x
  RY2=RY2+lv32y
  
  if(RX2>865)
    lv32x*=-1
  if(RY2>685)
    lv32y*=-1
  
  if(RX2<35)
    lv32x*=-1
  if(RY2<175)
    lv32y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.6
     }}
fill("#169605")
textSize(25)
text("3", RX2-15, RY2+5)

//R Errada 3
 
 fill("#960516")
 ellipse(RX3,RY3, 50, 50);

  RX3=RX3+lv33x
  RY3=RY3+lv33y
  
  if(RX3>865)
    lv33x*=-1
  if(RY3>685)
    lv33y*=-1
  
  if(RX3<35)
    lv33x*=-1
  if(RY3<175)
    lv33y*=-1
 
  if ( mouseX > RX3-25 && mouseX < RX3 + 33  && mouseY > RY3-25 && mouseY < RY3+33){
     if (mouseIsPressed) {
    Tela=666.6
     }}
fill("#169605")
textSize(25)
text("2,1", RX3-15, RY3+5)

//R Errada 4
 
 fill("#960516")
 ellipse(RX4,RY4, 50, 50);

  RX4=RX4+lv34x
  RY4=RY4+lv34y
  
  if(RX4>865)
    lv34x*=-1
  if(RY4>685)
    lv34y*=-1
  
  if(RX4<35)
    lv34x*=-1
  if(RY4<175)
    lv34y*=-1
 
  if ( mouseX > RX4-25 && mouseX < RX4 + 33  && mouseY > RY4-25 && mouseY < RY4+33){
     if (mouseIsPressed) {
    Tela=666.6
     }}
fill("#169605")
textSize(25)
text("6,2", RX4-15, RY4+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (55-T),647, 110)
  if(T==55)
  { Tela=666.6
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
 image(p6,100,0,545,145)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  
//Erro fase 6
if(Tela==666.6)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.6;
      Tempo=0;
    }}
  if(T==55)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//

//
//Fase 7
if(Tela==1.7)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont17<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont17++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 50, 50);

  RX=RX+lv2x
  RY=RY+lv2y
  
  if(RX>865)
    lv2x*=-1
  if(RY>685)
    lv2y*=-1
  
  if(RX<35)
    lv2x*=-1
  if(RY<175)
    lv2y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=1.8
      Pontos=Pontos+1
       Tempo=0
     }}
fill("#169605")
textSize(25)
text("7,6", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 50, 50);

  RX1=RX1+lv31x
  RY1=RY1+lv31y
  
  if(RX1>865)
    lv31x*=-1
  if(RY1>685)
    lv31y*=-1
  
  if(RX1<35)
    lv31x*=-1
  if(RY1<175)
    lv31y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.7
     }}
fill("#169605")
textSize(25)
text("7,1", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 50, 50);

  RX2=RX2+lv32x
  RY2=RY2+lv32y
  
  if(RX2>865)
    lv32x*=-1
  if(RY2>685)
    lv32y*=-1
  
  if(RX2<35)
    lv32x*=-1
  if(RY2<175)
    lv32y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.7
     }}
fill("#169605")
textSize(25)
text("7,5", RX2-15, RY2+5)

//R Errada 3
 
 fill("#960516")
 ellipse(RX3,RY3, 50, 50);

  RX3=RX3+lv33x
  RY3=RY3+lv33y
  
  if(RX3>865)
    lv33x*=-1
  if(RY3>685)
    lv33y*=-1
  
  if(RX3<35)
    lv33x*=-1
  if(RY3<175)
    lv33y*=-1
 
  if ( mouseX > RX3-25 && mouseX < RX3 + 33  && mouseY > RY3-25 && mouseY < RY3+33){
     if (mouseIsPressed) {
    Tela=666.7
     }}
fill("#169605")
textSize(25)
text("7,7", RX3-15, RY3+5)

//R Errada 4
 
 fill("#960516")
 ellipse(RX4,RY4, 50, 50);

  RX4=RX4+lv34x
  RY4=RY4+lv34y
  
  if(RX4>865)
    lv34x*=-1
  if(RY4>685)
    lv34y*=-1
  
  if(RX4<35)
    lv34x*=-1
  if(RY4<175)
    lv34y*=-1
 
  if ( mouseX > RX4-25 && mouseX < RX4 + 33  && mouseY > RY4-25 && mouseY < RY4+33){
     if (mouseIsPressed) {
    Tela=666.7
     }}
fill("#169605")
textSize(25)
text("7,4", RX4-15, RY4+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (60-T),647, 110)
  if(T==60)
  { Tela=666.7
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
  image(p7,100,0,545,145)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  
//Erro fase 7
if(Tela==666.7)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.7;
      Tempo=0;
    }}
  if(T==60)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//

//

//Fase 8
if(Tela==1.8)
{
//Fundo
 image(jogo,0,0,900,900)
//Aleatorizar inicio
if(cont18<1)
  {RX=random(100,800)
    RY=random(250,550)
  
  RX1=random(150,750)
    RY1=random(300,600)
  
  RX2=random(200,850)
    RY2=random(350,600)
  
  RX3=random(250,850)
    RY3=random(400,600)
  
  RX4=random(300,850)
    RY4=random(450,500)
   
   cont18++}

 //R Certa

 fill("#960516")
 ellipse(RX,RY, 70, 70);

  RX=RX+lv2x
  RY=RY+lv2y
  
  if(RX>865)
    lv2x*=-1
  if(RY>685)
    lv2y*=-1
  
  if(RX<35)
    lv2x*=-1
  if(RY<175)
    lv2y*=-1
 
  if ( mouseX > RX-25 && mouseX < RX + 33  && mouseY > RY-25 && mouseY < RY+33){
     if (mouseIsPressed) {
    Tela=69
      Pontos=Pontos+1
     }}
fill("#169605")
textSize(25)
text("4,40 R$", RX-15, RY+5)
    
//R Errada 1
 
 fill("#960516")
 ellipse(RX1,RY1, 70, 70);

  RX1=RX1+lv31x
  RY1=RY1+lv31y
  
  if(RX1>865)
    lv31x*=-1
  if(RY1>685)
    lv31y*=-1
  
  if(RX1<35)
    lv31x*=-1
  if(RY1<175)
    lv31y*=-1
 
  if ( mouseX > RX1-25 && mouseX < RX1 + 33  && mouseY > RY1-25 && mouseY < RY1+33){
     if (mouseIsPressed) {
    Tela=666.8
     }}
fill("#169605")
textSize(25)
text("5 R$", RX1-15, RY1+5)
 
//R Errada 2
 
 fill("#960516")
 ellipse(RX2,RY2, 70, 70);

  RX2=RX2+lv32x
  RY2=RY2+lv32y
  
  if(RX2>865)
    lv32x*=-1
  if(RY2>685)
    lv32y*=-1
  
  if(RX2<35)
    lv32x*=-1
  if(RY2<175)
    lv32y*=-1
 
  if ( mouseX > RX2-25 && mouseX < RX2 + 33  && mouseY > RY2-25 && mouseY < RY2+33){
     if (mouseIsPressed) {
    Tela=666.8
     }}
fill("#169605")
textSize(25)
text("5,30 R$", RX2-15, RY2+5)

//R Errada 3
 
 fill("#960516")
 ellipse(RX3,RY3, 70, 70);

  RX3=RX3+lv33x
  RY3=RY3+lv33y
  
  if(RX3>865)
    lv33x*=-1
  if(RY3>685)
    lv33y*=-1
  
  if(RX3<35)
    lv33x*=-1
  if(RY3<175)
    lv33y*=-1
 
  if ( mouseX > RX3-25 && mouseX < RX3 + 33  && mouseY > RY3-25 && mouseY < RY3+33){
     if (mouseIsPressed) {
    Tela=666.8
     }}
fill("#169605")
textSize(25)
text("3,80 R$", RX3-15, RY3+5)

//R Errada 4
 
 fill("#960516")
 ellipse(RX4,RY4, 70, 70);

  RX4=RX4+lv34x
  RY4=RY4+lv34y
  
  if(RX4>865)
    lv34x*=-1
  if(RY4>685)
    lv34y*=-1
  
  if(RX4<35)
    lv34x*=-1
  if(RY4<175)
    lv34y*=-1
 
  if ( mouseX > RX4-25 && mouseX < RX4 + 33  && mouseY > RY4-25 && mouseY < RY4+33){
     if (mouseIsPressed) {
    Tela=666.8
     }}
fill("#169605")
textSize(25)
text("2,50 R$", RX4-20, RY4+5)

//Cofiguração
//Voltar
 if ( mouseX > VX+2 && mouseX < VX+2 + VL-33  && mouseY > VY+1 && mouseY < VY+1 + VA-33){
    if(mouseIsPressed){
      Tela = 0;
    }}
  textStyle(BOLDITALIC)
  fill("#A11328")
  textFont(font)
  textSize(50)
 //Tempo
 Tempo= Tempo +1
 T=parseInt (Tempo/60)
 text("Tempo: "+ (65-T),647, 110)
  if(T==65)
  { Tela=666.8
  } 
 //Pontos
 text("Pontos: "+ (alert=(Pontos)),650, 60)
 //Pergunta
 image(p8,100,0,545,145)
 //mira
 image(mira,mouseX-25,mouseY-25,50,50)
//Tiro e animação
 if(mouseIsPressed){ shot.play()
          image(Arma[1],mouseX-85,700+(mouseY/10),200,250 )          
                   } 
  image(Arma[0],mouseX-85,700+(mouseY/10),200,250 ); 
}  
//Erro fase 8
if(Tela==666.8)
{
  image(erro, 0, 0,900 ,900 );
  if ( mouseX > 130 && mouseX < 130 + 520  && mouseY > 310 && mouseY < 310 + 160){
    if(mouseIsPressed){
      Tela = 1.8;
      Tempo=0;
    }}
  if(T==65)
  {image(Fim, 0, 0,900 ,900 );
  }
}
//


  
  
  
}
