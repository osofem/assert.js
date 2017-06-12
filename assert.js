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

function assertIsNaN(actual){
	if(!isNaN(actual)){
		message = ((typeof message != "undefined")? message+" ":"") + "Assertion failed. Expected " + NaN + " instead got " + JSON.stringify(actual);
        console.error(message);
	}
	else console.log("%cTest passed. "+ actual + " === " + NaN, "color: green;");
}