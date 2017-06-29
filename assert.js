function assertExpect(actual, expected, message){
    if(expected != actual){
        message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + JSON.stringify(expected) + " instead got " + JSON.stringify(actual);
        console.error(message);
    }else console.log("%cTest passed. "+ JSON.stringify(actual) + " === " + JSON.stringify(expected), "color: green;");
}

function assertEqual(actual, expected, message){
    if(actual !== expected){
        message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected "+((typeof expected == "string")?"\"":"")+ expected +((typeof expected == "string")?"\"":"")+ " instead got "+((typeof actual == "string")?"\"":"")+ actual +((typeof actual == "string")?"\"":"");
        console.error(message);
    }else console.log("%cTest passed. "+((typeof actual == "string")?"\"":"")+ actual +((typeof actual == "string")?"\"":"")+ " === " +((typeof expected == "string")?"\"":"")+ expected +((typeof expected == "string")?"\"":""), "color: green;");
}

function assertDeepEqual(actual, expected, message){
    if(JSON.stringify(actual) !== JSON.stringify(expected)){
        message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + JSON.stringify(expected) + " instead got " + JSON.stringify(actual);
        console.error(message);
    }else console.log("%cTest passed. "+ JSON.stringify(actual) + " === " + JSON.stringify(expected), "color: green;");
}

function assertIsNaN(actual, message){
	if(!isNaN(actual)){
		message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + NaN + " instead got " + JSON.stringify(actual);
        console.error(message);
	}
	else console.log("%cTest passed. "+ actual + " === " + NaN, "color: green;");
}

function assertThrowError(block, error, message){
	try{
		block();
	}catch(e){
		if(typeof error != "undefined"){
			if(error.name !== e.name){
				//Throws error but not the type of error expected
				message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + error.name + " instead got " + e.name;
				return console.error(message);
			}
			else{
				//Throws the right type of error
				return console.log("%cTest passed. "+ error.name + " === " + e.name, "color: green;");
			}
		}
		else{
			//The type of error to throw was not specified so any error will do
			return console.log("%cTest passed. "+ e.name + " was thrown.", "color: green;");
		}
	}
	//No error was thrown
	message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. "+ ((typeof error != "undefined")?error.name:"Error") +" expected but no error was thrown.";
	return console.error(message);
}