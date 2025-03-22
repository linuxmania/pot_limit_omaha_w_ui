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

function Card(suit,order){
	this.suit=suit;
	this.order=order;

	switch(order){
		case 1:
			this.name = "a";
			this.value = 14;
			break;
		case 2:
			this.name = "2";
			this.value = 2;
			break;
		case 3:
			this.name = "3";
			this.value = 3;
			break;
		case 4:
			this.name = "4";
			this.value = 4;
			break;
		case 5:
			this.name = "5";
			this.value = 5;
			break;
		case 6:
			this.name = "6";
			this.value = 6;
			break;
		case 7:
			this.name = "7";
			this.value = 7;
			break;
		case 8:
			this.name = "8";
			this.value = 8;
			break;
		case 9:
			this.name = "9";
			this.value = 9;
			break;
		case 10:
			this.name = "10";
			this.value = 10;
			break;
		case 11:
			this.name = "j";
			this.value = 11;
			break;
		case 12:
			this.name = "q";
			this.value = 12;
			break;
		case 13:
			this.name = "k";
			this.value = 13;
			break;
	}
	if(this.suit == "Spades"){
	    this.image = this.name + 's.png';
	} else if(this.suit == "Clubs"){
	    this.image = this.name + 'c.png';
	} else if(this.suit == "Hearts"){
	    this.image = this.name + 'h.png';
	} else if(this.suit == "Diamonds"){
	    this.image = this.name + 'd.png';
	}    
}
