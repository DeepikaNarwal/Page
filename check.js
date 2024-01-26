function checkEligibility() {
    // Get the age from the input field
    var age = parseInt(document.getElementById('age').value);

    // Check eligibility using a simple condition
    if (isNaN(age) || age < 18) {
        document.getElementById('result').innerHTML = "Sorry, you are not eligible to vote.";
    } else {
        document.getElementById('result').innerHTML = "Congratulations, you are eligible to vote!";
    }
}
