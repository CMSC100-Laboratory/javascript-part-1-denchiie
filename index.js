//Denchlie B. Baring
//C2L

//Exercise 3: JavaScript Basics part 1

//This function accept 2 string parameters and validate them
function validatePassword(string1, string2) {
	var condition1 = false;
	if(string1 == string2) {
		condition1 = true;
	}

	var characters = string1.length;
	var condition2 = false;
	if(characters >= 8) {
		condition2 = true;
	}

	var i = 0;
	var hasNumber = false;
	var hasUpper = false;
	var hasLower = false;
	var condition3 = false;

	for(i; i < characters; i++) {
        if(string1[i] >= 'A' && string1[i] <= 'Z') {
            hasUpper = true;
        }

        if(string1[i] >= 'a' && string1[i] <= 'z') {
            hasLower = true;
        }

    	if(string1[i] >= '0' && string1[i] <= '9') {
    		hasNumber = true;
    	}

    	if(hasUpper == true && hasLower == true && hasNumber == true) {
			condition3 = true;
		}
    }

    if(condition1 == true && condition2 == true && condition3 == true) {
    	return(true);
    } else {
    	return(false);
    }
};
console.log(validatePassword("helloworld","hello"));
console.log(validatePassword("hello","hello"));
console.log(validatePassword("hello1234","hello1234"));
console.log(validatePassword("Hello1234","Hello1234"));
console.log(validatePassword("HELLO1234","HELLO1234"));
console.log(validatePassword("pass1234","pass1234"));

//This function returns a reversed string of the password
function reversePassword(password) {
	var reversedPassword = "";
	var characters = password.length;
	var i = characters - 1;

	for(i; i >= 0; i--) {
		reversedPassword = reversedPassword + password[i];
	}

	return(reversedPassword)
};
console.log(reversePassword("hello"));

//This function that takes three parameters: name and two passwords. and return an object.
//The object contains the name and the newpassword as keys. 
//If the passwords provided by the user are valid, the reverse function will be the value of newpassword. 
//If not, then the value of newpassword is the first given password
function storePassword(username, password1, password2) {
	if(validatePassword(password1, password2) == true) {
		var newp = reversePassword(password1)
	} else {
		var newp = password1
	}

	const user = {
		name: username,
		newpassword: newp
	}

	console.log(user)
	return(user)
};
storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "Pass123", "Pass12345") // returns {name: "John", newpassword:"Pass123"}
storePassword("Dench", "pass1234", "pass1234")
storePassword("Lie", "PASS1234", "PASS1234")
storePassword("Baring", "Denchlie1234", "Denchlie1234")


//References: https://www.shiksha.com/online-courses/articles/relational-operators-in-java-about-types-and-examples-blogId-148181