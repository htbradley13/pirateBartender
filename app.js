var Question = function(question) {
	this.question = question;
};

var question1 = new Question("Do ye like yer drinks strong?");

var question2 = new Question("Do ye like it with a salty tang?");

var question3 = new Question("Are ye a lubber who likes it bitter?");

var question4 = new Question("Would ye like a bit of sweetness with yer poison?");

var question5 = new Question("Are ye one for a fruity finish?");

function ShowQuestions() {
	$("#question1Text").text(question1.question);
	$("#question2Text").text(question2.question);
	$("#question3Text").text(question3.question);
	$("#question4Text").text(question4.question);
	$("#question5Text").text(question5.question);
}

var Ingredients = function(ingredients) {
	this.ingredients = ingredients;
};

var strongIngredients = new Ingredients(["Glug of rum", "Slug of whiskey", "Splash of gin"]);

var saltyIngredients = new Ingredients(["Olive on a stick", "Salt-dusted rum", "Rasher of bacon"]);

var bitterIngredients = new Ingredients(["Shake of bitters", "Splash of tonic", "Twist of lemon peel"]);

var sweetIngredients = new Ingredients(["Sugar cube", "Spoonful of honey", "Splash of cola"]);

var fruityIngredients = new Ingredients(["Slice of orange", "Dash of cassis", "Cherry on top"]);

var Pantry = function(strong, salty, bitter, sweet, fruity) {
	this.strong = strong;
	this.salty = salty;
	this.bitter = bitter;
	this.sweet = sweet;
	this.fruity = fruity;
}

var pantry = new Pantry(strongIngredients, saltyIngredients, bitterIngredients, sweetIngredients, fruityIngredients);

var UserSelections = function(array) {
	this.strong = array[0];
	this.salty = array[1];
	this.bitter = array[2];
	this.sweet = array[3];
	this.fruity = array[4];	
}

var userAnswers = [];

var drinkIngredients = [];

// Declaring randomNumber function
function randomNumber (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function uses multiple, and separate, "if" statements to validate selections and push to an array a 0 or 1 based on the answers
function questionValidation() {
	if (document.getElementById("input1A").checked == true) {
		userAnswers.push(0);
	}
	else {
		userAnswers.push(1);
	};

	if (document.getElementById("input2A").checked == true) {
		userAnswers.push(0);
	}
	else {
		userAnswers.push(1);
	};
 	
 	if (document.getElementById("input3A").checked == true) {
		userAnswers.push(0);
	}
	else {
		userAnswers.push(1);
	};

	if (document.getElementById("input4A").checked == true) {
		userAnswers.push(0);
	}
	else {
		userAnswers.push(1);
	};

	if (document.getElementById("input5A").checked == true) {
		userAnswers.push(0);
	}
	else {
		userAnswers.push(1);
	};
}

// Similar logic as the above function, comparing the userAnswers array values to see if a random ingredient should be chosen, based on user choices (0 or 1 values in the array), and populates the array "drinkIngredients"
function ingredientPicker(selections) {
	if (selections.strong == 0) {
		var randomNumberPick = randomNumber(0,2);
		var ingredient1 = pantry.strong.ingredients[randomNumberPick];
		drinkIngredients.push(ingredient1);
	};

	if (selections.salty == 0) {
		var randomNumberPick = randomNumber(0,2);
		var ingredient2 = pantry.salty.ingredients[randomNumberPick];
		drinkIngredients.push(ingredient2);
	};

	if (selections.bitter == 0) {
		var randomNumberPick = randomNumber(0,2);
		var ingredient3 = pantry.bitter.ingredients[randomNumberPick];
		drinkIngredients.push(ingredient3);
	};

	if (selections.sweet == 0) {
		var randomNumberPick = randomNumber(0,2);
		var ingredient4 = pantry.sweet.ingredients[randomNumberPick];
		drinkIngredients.push(ingredient4);
	};

	if (selections.fruity == 0) {
		var randomNumberPick = randomNumber(0,2);
		var ingredient5 = pantry.fruity.ingredients[randomNumberPick];
		drinkIngredients.push(ingredient5);
	};

}

// Document Ready Function
$(function(){
	ShowQuestions();
	$("#questionAnswers").submit(function(event) {
	event.preventDefault();
	$("#drinkIngredients").empty();
	questionValidation();
	var userSelection1 = new UserSelections(userAnswers);
	ingredientPicker(userSelection1);
	// Need to display the drinkIngredients array in the user interface as a list
	for (i = 0; i < drinkIngredients.length; i++){
		$("#drinkIngredients").append("<li>" + drinkIngredients[i] + "</li><br>");
	};
	$("#drinkIngredients").show();

	//Resets the form
	$(this)[0].reset();
	userSelection1 = "";
	userAnswers = [];
	drinkIngredients = [];
	});
});


