function myFunction() {
	if (confirm("Do you agree to share your peronal information with this site?")){
		console.log("Name: " + nickname + "\n" + "Height: " + newHeight + "\n" +
		"Weight: " + weightLbs + " lbs")
	} else {
		console.log("User does not wish to share his/her information")
	}
}