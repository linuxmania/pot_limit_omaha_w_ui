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

function FlopOmaha(){
	this.hand = [];
	this.flushSuit = "";
	this.sortedFlopValues = [];
	this.threeOfaKind = 0;
	this.pairValues = [];
}

FlopOmaha.prototype.addCard = function(card) {
	this.hand.push(card);
};

FlopOmaha.prototype.getCard = function(index) {
	return this.hand[index];
};

FlopOmaha.prototype.analyze = function() {
	this.sortedFlopValues = getSortedHandValues(this.hand);
	this.flushSuit = getFlushSuit(this.hand);

	this.threeOfaKind = hasThreeOfAKind(this.sortedFlopValues);
	this.pairValues = getPairValuesOther(this.sortedFlopValues, this.threeOfaKind);
};

FlopOmaha.prototype.reportHand = function(){
	s = "";
	for (var i = 0; i < this.hand.length; i++) {
		s += this.hand[i].name + this.hand[i].suit + "  ";
	}
	return s;
};
