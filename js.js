/***************************
*
* Copyleft (C) 2025 Daniel K. Spicer
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*
****************************/

var game;
var flopState = 0;
var numPlayers;

function hideCards(){
    document.getElementById('p1c1').src = 'img/back2.webp';    
    document.getElementById('p1c2').src = 'img/back2.webp';    
    document.getElementById('p1c3').src = 'img/back2.webp';    
    document.getElementById('p1c4').src = 'img/back2.webp';    

    document.getElementById('p2c1').src = 'img/back2.webp';    
    document.getElementById('p2c2').src = 'img/back2.webp';    
    document.getElementById('p2c3').src = 'img/back2.webp';    
    document.getElementById('p2c4').src = 'img/back2.webp';    

    document.getElementById('p3c1').src = 'img/back2.webp';    
    document.getElementById('p3c2').src = 'img/back2.webp';    
    document.getElementById('p3c3').src = 'img/back2.webp';    
    document.getElementById('p3c4').src = 'img/back2.webp';    

    document.getElementById('p4c1').src = 'img/back2.webp';    
    document.getElementById('p4c2').src = 'img/back2.webp';    
    document.getElementById('p4c3').src = 'img/back2.webp';    
    document.getElementById('p4c4').src = 'img/back2.webp';    

    document.getElementById('p5c1').src = 'img/back2.webp';    
    document.getElementById('p5c2').src = 'img/back2.webp';    
    document.getElementById('p5c3').src = 'img/back2.webp';    
    document.getElementById('p5c4').src = 'img/back2.webp';    

    document.getElementById('p6c1').src = 'img/back2.webp';    
    document.getElementById('p6c2').src = 'img/back2.webp';    
    document.getElementById('p6c3').src = 'img/back2.webp';    
    document.getElementById('p6c4').src = 'img/back2.webp';    
    
    document.getElementById('p7c1').src = 'img/back2.webp';    
    document.getElementById('p7c2').src = 'img/back2.webp';    
    document.getElementById('p7c3').src = 'img/back2.webp';    
    document.getElementById('p7c4').src = 'img/back2.webp';    

    document.getElementById('p8c1').src = 'img/back2.webp';    
    document.getElementById('p8c2').src = 'img/back2.webp';    
    document.getElementById('p8c3').src = 'img/back2.webp';    
    document.getElementById('p8c4').src = 'img/back2.webp';    

    document.getElementById('p9c1').src = 'img/back2.webp';    
    document.getElementById('p9c2').src = 'img/back2.webp';    
    document.getElementById('p9c3').src = 'img/back2.webp';    
    document.getElementById('p9c4').src = 'img/back2.webp';    
}

function displayRows(n){
    if(n>2){
        document.getElementById("mr3").style.display = "";
        document.getElementById("r3d").style.display = "";
        document.getElementById("rr3").style.display = "";
    }
    if(n>3){
        document.getElementById("mr4").style.display = "";
        document.getElementById("r4d").style.display = "";
        document.getElementById("rr4").style.display = "";
    }
    if(n>4){
        document.getElementById("mr5").style.display = "";
        document.getElementById("r5d").style.display = "";
        document.getElementById("rr5").style.display = "";
    }
    if(n>5){
        document.getElementById("mr6").style.display = "";
        document.getElementById("r6d").style.display = "";
        document.getElementById("rr6").style.display = "";
    }
    if(n>6){
        document.getElementById("mr7").style.display = "";
        document.getElementById("r7d").style.display = "";
        document.getElementById("rr7").style.display = "";
    }
    if(n>7){
        document.getElementById("mr8").style.display = "";
        document.getElementById("r8d").style.display = "";
        document.getElementById("rr8").style.display = "";
    }
    if(n>8){
        document.getElementById("mr9").style.display = "";
        document.getElementById("r9d").style.display = "";
        document.getElementById("rr9").style.display = "";
    }
}

function hideRows(n){
    if(n<3){
        document.getElementById("mr3").style.display = "none";
        document.getElementById("r3d").style.display = "none";
        document.getElementById("rr3").style.display = "none";
    }
    if(n<4){
        document.getElementById("mr4").style.display = "none";
        document.getElementById("r4d").style.display = "none";
        document.getElementById("rr4").style.display = "none";
    }
    if(n<5){
        document.getElementById("mr5").style.display = "none";
        document.getElementById("r5d").style.display = "none";
        document.getElementById("rr5").style.display = "none";
    }
    if(n<6){
        document.getElementById("mr6").style.display = "none";
        document.getElementById("r6d").style.display = "none";
        document.getElementById("rr6").style.display = "none";
    }
    if(n<7){
        document.getElementById("mr7").style.display = "none";
        document.getElementById("r7d").style.display = "none";
        document.getElementById("rr7").style.display = "none";
    }
    if(n<8){
        document.getElementById("mr8").style.display = "none";
        document.getElementById("r8d").style.display = "none";
        document.getElementById("rr8").style.display = "none";
    }
    if(n<9){
        document.getElementById("mr9").style.display = "none";
        document.getElementById("r9d").style.display = "none";
        document.getElementById("rr9").style.display = "none";
    }
}


function continueGame(){
    
    numPlayers = document.getElementById("inpt_txt").value;
	if (!(numPlayers == parseInt(numPlayers,10) && numPlayers > 1 && numPlayers < 10)) return;
    flopState = 0; 
    document.getElementById("inpt").style.display = "none";
    
    document.getElementById("tm").style.display = "";
    document.getElementById("tres").style.display = "none";
    
    hideCards();
    hideRows(numPlayers);  
    displayRows(numPlayers);

    document.getElementById('f1').src = 'img/1.png';
    document.getElementById('f2').src = 'img/1.png';   
    document.getElementById('f3').src = 'img/1.png';
    document.getElementById('f4').src = 'img/1.png';
    document.getElementById('f5').src = 'img/1.png';
    
    game = new GamePLOmaha(numPlayers);
    document.getElementById("fr").style.display = "";    
}

function playGame(){
    document.getElementById("inpt").style.display = "";
}

function writeResults(){
	for (var i = 0; i < game.players.length; i++) {
	    if(game.players[i].rank == 1){
    	    document.getElementById('r1c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r1c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r1c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r1c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r1").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r1d").innerHTML = game.players[i].convertValue();
    	    
	    }
	    
	    if(game.players[i].rank == 2){
    	    document.getElementById('r2c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r2c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r2c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r2c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r2").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r2d").innerHTML = game.players[i].convertValue();
    	    
	    }
	    
	    if(game.players[i].rank == 3){
    	    document.getElementById('r3c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r3c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r3c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r3c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r3").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r3d").innerHTML = game.players[i].convertValue();
    	    
	    }
	    
	    if(game.players[i].rank == 4){
    	    document.getElementById('r4c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r4c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r4c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r4c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r4").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r4d").innerHTML = game.players[i].convertValue();
    	    
	    }
	    
	    if(game.players[i].rank == 5){
    	    document.getElementById('r5c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r5c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r5c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r5c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r5").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r5d").innerHTML = game.players[i].convertValue();
    	    
	    }	    
	    
	    if(game.players[i].rank == 6){
    	    document.getElementById('r6c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r6c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r6c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r6c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r6").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r6d").innerHTML = game.players[i].convertValue();
    	    
	    }	    
	    
	    if(game.players[i].rank == 7){
    	    document.getElementById('r7c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r7c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r7c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r7c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r7").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r7d").innerHTML = game.players[i].convertValue();
    	    
	    }	    
	    
	    if(game.players[i].rank == 8){
    	    document.getElementById('r8c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r8c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r8c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r8c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r8").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r8d").innerHTML = game.players[i].convertValue();
    	    
	    }	    
	    
	    if(game.players[i].rank == 9){
    	    document.getElementById('r9c1').src = 'img/' + game.players[i].hand[0].image;
    	    document.getElementById('r9c2').src = 'img/' + game.players[i].hand[1].image;
    	    document.getElementById('r9c3').src = 'img/' + game.players[i].hand[2].image;
    	    document.getElementById('r9c4').src = 'img/' + game.players[i].hand[3].image;
    	    
    	    document.getElementById("r9").innerHTML = 'P' + (i + 1);
    	    document.getElementById("r9d").innerHTML = game.players[i].convertValue();
    	    
	    }	    	    
	}
}

function doFlop(){
    if(flopState === 0){

        document.getElementById('f1').src = 'img/' + game.flop.hand[0].image;
        document.getElementById('f2').src = 'img/' + game.flop.hand[1].image;   
        document.getElementById('f3').src = 'img/' + game.flop.hand[2].image;
        
        flopState++;
    } else if(flopState === 1){
        document.getElementById('f4').src = 'img/' + game.flop.hand[3].image;
        flopState++;
    } else if(flopState === 2){
        document.getElementById('f5').src = 'img/' + game.flop.hand[4].image;
        flopState++;
    } else if(flopState === 3){
        document.getElementById("tm").style.display = "none";
        writeResults();
        document.getElementById("tres").style.display = "";
        flopState++;
    } 
}

function tdclick(n){
    if(document.getElementById('p' + n + 'c1').src.match('img/back2.webp')){
        document.getElementById('p' + n + 'c1').src = 'img/' + game.players[n-1].hand[0].image;
        document.getElementById('p'+n+'c2').src = 'img/' + game.players[n-1].hand[1].image;        
        document.getElementById('p'+n+'c3').src = 'img/' + game.players[n-1].hand[2].image;        
        document.getElementById('p'+n+'c4').src = 'img/' + game.players[n-1].hand[3].image;        
    } else {
        document.getElementById('p'+n+'c1').src = 'img/back2.webp';
        document.getElementById('p'+n+'c2').src = 'img/back2.webp';
        document.getElementById('p'+n+'c3').src = 'img/back2.webp';
        document.getElementById('p'+n+'c4').src = 'img/back2.webp';
    }
}
