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

function getPairValuesOther(sortedFlopValues, threeOfaKind){
  pairs = [];
  test = hasPairOther(sortedFlopValues, threeOfaKind);
  if(test !== 0){
    pairs[0] = test;
    if(threeOfaKind === 0){
      test = hasPairOther(sortedFlopValues, pairs[0]);
      if(test !== 0){
        pairs[1] = test;
      }
    }
  }
  return pairs;
}

function getPairValues(sortedValues){
  pairs = [];
  test = hasPair(sortedValues);
  if(test !== 0){
    pairs[0] = test;
    test = hasPairOther(sortedValues, pairs[0]);
    if(test !== 0){
      pairs[1] = test;
    }
  }
  return pairs;
}

function getTwoPairValues(pairs, handPairs, flopPairs, comboPairs){
  twoPairValues = [];

  // if (pair from hand and pair from flop) or (combo and flop pair) or (2 combos) return
  for(var i=0; i< pairs.length - 1; i++){

    if(contains(comboPairs,pairs[i])){
      //are the next pairs either combo of flop pair, if so return the pairValues
      for(var j=i+1; j< pairs.length; j++){
        if(contains(comboPairs,pairs[j]) || contains(flopPairs,pairs[j])){
          twoPairValues[0] = pairs[i];
          twoPairValues[1] = pairs[j];
          return twoPairValues;
        }
      }
    }

    if(contains(handPairs,pairs[i])){
      //if the next pairs are in flop, return the pairs
      for(var j=i+1; j< pairs.length; j++){
        if(contains(flopPairs,pairs[j])){
          twoPairValues[0] = pairs[i];
          twoPairValues[1] = pairs[j];
          return twoPairValues;
        }
      }
    }

    if(contains(flopPairs,pairs[i])){
      //are the next pairs either combo of hand pair, if so return the pairValues
      for(var j=i+1; j< pairs.length; j++){
        if(contains(comboPairs,pairs[j]) || contains(handPairs,pairs[j])){
          twoPairValues[0] = pairs[i];
          twoPairValues[1] = pairs[j];
          return twoPairValues;
        }
      }
    }
  }

  return twoPairValues;
}

function hasPairOther(sortedValues, notCard){
  for(var j=0; j < (sortedValues.length - 1); j++){
    test = sortedValues[j];
    for(var i = j+1; i < sortedValues.length; i++){
      if(sortedValues[i] == test && test != notCard) return test;
    }
  }
  return 0;
}

function getUniqueValues(list){
  ret = [];
  index = 0;
  ret[index] = list[0];
  for(var i=1; i<list.length; i++){
    if(list[i] != list[i-1]){
      index++;
      ret[index] = list[i];
    }
  }
  return ret;
}

function getUniqueSorted(list1, list2){
  ret = [];
  index = 0;
  for(var i=0; i<list1.length; i++){
    ret[index++] = list1[i];
  }
  for(i=0; i<list2.length; i++){
    ret[index++] = list2[i];
  }
  ret.sort(function(a, b){return b-a});
  return getUniqueValues(ret);
}

function straightContains(list, high){
  for(var i=0; i<list.length; i++){
//    if(Math.abs(list[i]-high) > 4) return false;

    if((list[i]-high) > 0) return false;
    if(Math.abs(list[i]-high) > 4) return false;

  }
  return true;
}

function getHighestStraight(possStraights, sortedFlopValues){
  var ret = 0;
  for(var i=0; i<possStraights.length; i++ ){
    uniqueValues = getUniqueSorted(possStraights[i],sortedFlopValues);
    var iterations = 0;
    for(var currLen = uniqueValues.length; currLen > 4; currLen--){
      ret = hasStraightFromUnpaired(uniqueValues);
      if(ret !== 0){
        if(straightContains(possStraights[i], ret)) return ret;
      }
      var temp = [];
      for(var j=iterations+1; j < uniqueValues.length; j++){
        temp[(j-1)-iterations] = uniqueValues[j];
      }
      uniqueValues = temp;
      iterations++;
    }
  }
  return 0;
}

function getPossStraights(uniqueValues){
  index = 0;
  ret = [];
  for(var i=0; i < (uniqueValues.length - 1); i++){
    for(var j=1+i; j < uniqueValues.length; j++){
      if(uniqueValues[i] - uniqueValues[j] < 5){
        //add them to list
//        index = this.possStraights.length;
//        this.possStraights[index] = new Array();
        ret[index] = [];
        ret[index][0] = uniqueValues[i];
        ret[index][1] = uniqueValues[j];
        index++;
      }
    }
  }
  //need to account for an ace
  return ret;
}

function contains(list, item){
  for(var ci=0; ci<list.length; ci++){
    if(list[ci] == item) return true;
  }
  return false;
}

function numContains(list, item){
  num = 0;
  for(var ni=0; ni<list.length; ni++){
    if(list[ni] == item) num++;
  }
  return num;
}

function hasMatchingSuits(possibleSuits, suit) {
  for(var i=0; i<possibleSuits.length; i++){
    if(possibleSuits[i] == suit){
      return suit;
    }
  }
  return "";
}

function getStraightFlush(hand, flop, suit){
  suitCards = [];
  handValues = [];
  var index = 0;
  for(var i=0; i< hand.length; i++){
    if(hand[i].suit == suit){
      handValues[index] = hand[i].value;
      suitCards[index++] = hand[i].value;
    }
  }
  for(var i=0; i< flop.length; i++){
    if(flop[i].suit == suit){
      suitCards[index++] = flop[i].value;
    }
  }
  suitCards.sort(function(a, b){return b-a});
  highStraight = hasStraightFromUnpaired(suitCards);
  if(highStraight == 0) return 0;

  if(suitCards.length == 5) return highStraight;
  handValues.sort(function(a, b){return b-a});

  //loop for other straight values before returning 0
  // does the straight include exactly 2 values from hand?

  while (suitCards.length > 4) {
    numFromHand = 0;
    for(var i=0; i< handValues.length; i++){
      if(handValues[i] <= highStraight && handValues[i] >= (highStraight-4)){
        numFromHand++;
      }
    }
    if(highStraight == 5 && handValues[0] == 14) numFromHand++;
    if(numFromHand == 2) return highStraight;

    //do we have another straight?
    if(suitCards.length > 5){
      temp = new Array();
      for(i=1; i<suitCards.length; i++){
        temp[i-1] = suitCards[i];
      }
      if(suitCards[0] == 14) temp[i-1] = 1; //ace to low
      suitCards = temp;
    }
    highStraight = hasStraightFromUnpaired(suitCards);
    if(highStraight == 0) return 0;
  }
  return 0;
}

function createTempHand(cardsPlayer, cardsFlop){
  cards = [];

  numCards = cardsPlayer.length;
  for(var i=0; i< numCards; i++){
    cards[i] = cardsPlayer[i];
  }
  for(i=numCards; i< numCards+cardsFlop.length ; i++){
    cards[i] = cardsFlop[i-numCards];
  }
  return cards;
}

function getFlushSuit(cards) {
  diamonds = 0;
  clubs = 0;
  spades = 0;
  hearts = 0;

  for(var i=0; i<cards.length; i++){
    if(cards[i].suit == "Diamonds"){
      diamonds++;
    }
    else if(cards[i].suit == "Clubs"){
      clubs++;
    }
    else if(cards[i].suit == "Spades"){
      spades++;
    }
    else if(cards[i].suit == "Hearts"){
      hearts++;
    }
  }

  if(diamonds > 2){
    return "Diamonds";
  }
  if(clubs > 2){
    return "Clubs";
  }
  if(hearts > 2){
    return "Hearts";
  }
  if(spades > 2){
    return "Spades";
  }

  return "";
}

function getPossibleFlushSuits(cards) {
  suits = [];

  diamonds = 0;
  clubs = 0;
  spades = 0;
  hearts = 0;

  for(var i=0; i<cards.length; i++){
    if(cards[i].suit == "Diamonds"){
      diamonds++;
    }
    else if(cards[i].suit == "Clubs"){
      clubs++;
    }
    else if(cards[i].suit == "Spades"){
      spades++;
    }
    else if(cards[i].suit == "Hearts"){
      hearts++;
    }
  }

  if(diamonds > 1){
    suits[suits.length] = "Diamonds";
  }
  if(clubs > 1){
    suits[suits.length] = "Clubs";
  }
  if(hearts > 1){
    suits[suits.length] = "Hearts";
  }
  if(spades > 1){
    suits[suits.length] = "Spades";
  }

  return suits;
}

function hasMatch(values,match){
  for(var i=0; i<values.length; i++){
    if(values[i] == match) return match;
  }
  return 0;
}

function commonValues(pairValues1, pairValues2){
  ret = [];
  var k=0;
  for(var i=0; i<pairValues1.length; i++){
    for(var j=0; j<pairValues2.length; j++){
      if(pairValues1[i] == pairValues2[j]){
        ret[k] = pairValues1[i];
        k++;
        break;
      }
    }
  }
  return ret;
}
