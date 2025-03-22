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

function GamePLOmaha(n){
    this.shuffled = [];
    this.num = n;

    fetch('https://linuxmania.com/deck/')
    .then(response => {
        return response.json();
    })    
    .then(data => {
        for(var i in data){
            var suit = data[i].suit;
            var value = parseInt(data[i].value);
            var card = new Card(suit,value);
    	    this.shuffled.push(card);
        
        }
		this.players = [];
		while(this.num > 0){
			this.players.push(new PlayerOmaha());
			this.num--;
		}
		this.deal();
		this.flop = new FlopOmaha();
		this.populateFlop();
		this.reportStandings();
    });
}

GamePLOmaha.prototype.populateFlop = function() {
	this.flop.addCard(this.shuffled.pop());
	this.flop.addCard(this.shuffled.pop());
	this.flop.addCard(this.shuffled.pop());
	this.flop.addCard(this.shuffled.pop());
	this.flop.addCard(this.shuffled.pop());
};

GamePLOmaha.prototype.showFlop = function() {
	alert(this.flop.reportHand());
};

GamePLOmaha.prototype.deal = function() {
	for (var j = 0; j < 4; j++) {
		for (var i = 0; i < this.players.length; i++) {
			this.players[i].addCard(this.shuffled.pop());
		}
	}
};

GamePLOmaha.prototype.reportStandings = function() {
	var s = "";
    var r = 1;
    
	this.flop.analyze();

	for (var i = 0; i < this.players.length; i++) {
		this.players[i].evaluateHand(this.flop);
	}

	for (var j = 1; j < 10; j++) {
		for (i = 0; i < this.players.length; i++) {
			if(this.players[i].value == j){
			    this.players[i].rank = r;
			    r++;
				s += "# " + (i+1) + ": " + this.players[i].convertValue() +  "\n" + this.players[i].reportHand() + "\n";
			}
		}
	}
	s += "\n" + this.flop.reportHand();
};

GamePLOmaha.prototype.reportResults = function() {
	var s = "";
	for (var i = 0; i < this.players.length; i++) {
		s = this.players[i].getResults(this.flop, i+1);
		alert(s);
	}
};
