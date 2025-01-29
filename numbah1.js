var nickname = prompt("Name: ");
var height = prompt("Height in Inches: ");
var weight = prompt("Weight in kg: ");

var ft= Math.floor(height/12);
var inc= height % 12;
var newHeight = `${ft}'${inc}"`;
var weightLbs = (weight * 2.20462).toFixed(3);
		
alert("Name: " + nickname + "\n" + "Height: " + newHeight + "\n" + "Weight: " + weightLbs + " lbs");

