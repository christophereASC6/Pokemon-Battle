let attack = ["Solar beam", "Aqua jet", "Inferno", "Bulldoze"];
let attackValue = Math.floor(Math.random()*200);
let attack2 = ["Leaf blade", "Whirlpool", "Ember", "Mud slap"];
let health = 1000;
let health2 = 1000;
let types = [["Charizard", "Heatran", "Blaziken", "Arcanine"], ["Golem", "Onix", "Rhyhorn", "Regirock"], ["Venusaur", "Sceptile", "Chesnaught", "Megsnium"], ["Lapras", "Blastoise", "Starmie", "Gyrarados"]]
let healthBarLength = health/6.6
let healthBar2Length = health2/6.6
const pokemon1 = types[Math.floor(Math.random() * 3)] [Math.floor(Math.random() * 3)]
const pokemon2 = types[Math.floor(Math.random() * 3)] [Math.floor(Math.random() * 3)]
function setup(){
   createCanvas(500,500);
   background(217,160,111);
}
function draw(){
   background(217,160,111);
   fill(225,198,153);
   ellipse(125,200,150, 75);
   ellipse(375,50,150,75);
   fill(0,225,0);
   rect(10,300,110,65);
   rect(265,300,110,65);
   fill(0,100,255);
   rect(130,300,110,65);
   rect(385,300,110,65);
   fill("red");
   rect(10,370,110,65);
   rect(265,370,110,65);
   fill(210,105,30);
   rect(130,370,110,65);
   rect(385,370,110,65);
   fill("white");
   textSize(20);
   text(attack[0], 10, 325);
   text(attack[1], 150, 325);
   text(attack[2], 20, 400);
   text(attack[3], 150, 400);
   text(attack2[0], 265,330);
   text(attack2[1], 390,330);
   text(attack2[2], 275,405);
   text(attack2[3], 390,405);
   fill("black");
   textSize(20)
   text(pokemon1, 90, 200)
   text(pokemon2, 340, 50)
 fill("green")
 healthBarLength = health/6.6
 healthBar2Length = health2/6.6
 rect(140, 40, healthBarLength, 18)
 rect(210, 190, healthBar2Length, 18)
 textSize(12)
   text("HP: " + health2, 90,220)
   text("HP: " + health, 340, 70)
}
function mouseClicked(){
   if(mouseX >= 10 && mouseX <= 120 && mouseY >= 300 && mouseY <= 365){
       health2 -= Math.floor(Math.random()*200);
       console.log("Player 2: " + health2);
   }
   else if(mouseX >= 130 && mouseX <= 240 && mouseY >= 300 && mouseY <= 365){
       health2 -= Math.floor(Math.random()*200);
       console.log("Player 2: " + health2);
   }
   else if(mouseX >= 10 && mouseX <= 120 && mouseY >= 370 && mouseY <= 435){
       health2 -= Math.floor(Math.random()*200);
       console.log("Player 2: " + health2);
   }
   else if(mouseX >= 130 && mouseX <= 240 && mouseY >= 370 && mouseY <= 435){
       health2 -= Math.floor(Math.random()*200);
       console.log("Player 2: " + health2);
   }
   else if(mouseX >= 265 && mouseX <= 375 && mouseY >= 300 && mouseY <= 365){
       health -= Math.floor(Math.random()*200);
       console.log("Player 1: " + health);
   }
   else if(mouseX >= 385 && mouseX <= 495 && mouseY >= 300 && mouseY <= 365){
       health -= Math.floor(Math.random()*200);
       console.log("Player 1: " + health);
   }
   else if(mouseX >= 265 && mouseX <= 375 && mouseY >= 370 && mouseY <= 435){
       health -= Math.floor(Math.random()*200);
       console.log("Player 1: " + health);
   }
   else if(mouseX >= 385 && mouseX <= 495 && mouseY >= 370 && mouseY <= 435){
       health -= Math.floor(Math.random()*200);
       console.log("Player 1: " + health);
   }
   if (health <= 0 || health2 <= 0){
       alert("Your pokemon fainted!");
    }
    if (health <= 0) {
       alert("Player 2 Wins!!");
    }
    if (health2 <= 0) {
       alert("Player 1 Wins!!");
    }
}
