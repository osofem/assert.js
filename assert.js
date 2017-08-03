/**
*	assertExpect
*	Should be used to compare boolean
*/
function assertExpect(actual, expected, message){
    if(expected != actual){
        message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + JSON.stringify(expected) + " instead got " + JSON.stringify(actual);
        console.error(message);
    }else console.log("%cTest passed. "+ JSON.stringify(actual) + " == " + JSON.stringify(expected), "color: green;");
}

/**
*	assertEqual
*	Should be used to check for strictly equal
*/
function assertEqual(actual, expected, message){
    if(actual !== expected){
        message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected "+((typeof expected == "string")?"\"":"")+ expected +((typeof expected == "string")?"\"":"")+ " instead got "+((typeof actual == "string")?"\"":"")+ actual +((typeof actual == "string")?"\"":"");
        console.error(message);
    }else console.log("%cTest passed. "+JSON.stringify(actual)+" === "+JSON.stringify(expected), "color: green;");
}

/**
*	assertSimilar
*	Should be used to check object by comparing their JSON string
*/
function assertSimilar(actual, expected, message){
    if(JSON.stringify(actual) !== JSON.stringify(expected)){
        message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + JSON.stringify(expected) + " instead got " + JSON.stringify(actual);
        console.error(message);
    }else console.log("%cTest passed. "+ JSON.stringify(actual) + " === " + JSON.stringify(expected), "color: green;");
}

/**
*	assertDeepEqual
*	Should be used to check object by comparing the value of their keys one after the other
*/
function assertDeepEqual(actual, expected, message){
	if(Object.keys(actual).length != Object.keys(expected).length) return console.error(((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + JSON.stringify(expected) + " instead got " + JSON.stringify(actual));
	
	for(var k in expected){
		if(JSON.stringify(expected[k]) != JSON.stringify(actual[k])){
			return console.error(((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + JSON.stringify(expected) + " instead got " + JSON.stringify(actual));
		} 
	}
	console.log("%cTest passed. "+ JSON.stringify(actual) + " === " + JSON.stringify(expected), "color: green;");
}

/**
*	assertIsNaN
*	Should be used to check for NaN
*/
function assertIsNaN(actual, message){
	if(!isNaN(actual)){
		message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + NaN + " instead got " + JSON.stringify(actual);
        console.error(message);
	}
	else console.log("%cTest passed. "+ actual + " === " + NaN, "color: green;");
}

/**
*	assertThrowError
*	Should be used to check if a block of code throws the right type of error
*/
function assertThrowError(block, args, error, message){
	try{
		if(typeof args != "undefined") block(...args);
		else block();
	}catch(e){
		if(typeof error != "undefined"){
			if(error.name !== e.name){
				//Throws error but not the type of error expected
				message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + error.name + " instead got " + e.name;
				return console.error(message);
			}
			else{
				//Throws the right type of error
				return console.log("%cTest passed. Error "+ error.name + " thrown with message " + JSON.stringify(e.message), "color: green;");
			}
		}
		//The type of error to throw was not specified so any error will do
		return console.log("%cTest passed. "+ e.name + " was thrown with message " + JSON.stringify(e.message), "color: green;");
	}
	//No error was thrown
	message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. "+ ((typeof error != "undefined")?error.name:"Error") +" expected but no error was thrown.";
	return console.error(message);
}
