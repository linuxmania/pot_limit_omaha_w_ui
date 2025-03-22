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

function unicodeSuit(suit) {

  switch(suit) {
    case "Spades":
      s = "\u2660"
      break;
    case "Clubs":
      s = "\u2663"
      break;
    case "Diamonds":
      s = "\u2666"
      break;
    case "Hearts":
      s = "\u2665"
      break;
    default:
      s = "Other"
  }
  return s;
}

function decodeValue(value) {
  switch(value) {
    case 14:
      s = "A"
      break;
    case 13:
      s = "K"
      break;
    case 12:
      s = "Q"
      break;
    case 11:
      s = "J"
      break;
    default:
      s = value
  }
  return s;
}
