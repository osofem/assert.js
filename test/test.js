/* assertExpect */
console.log("%cassertExpect", "font-size: 20pt;");
assertExpect(true, true);
assertExpect(false, false);
assertExpect(0, 0);
assertExpect(1, 1);
assertExpect("1", 1); //This will pass because it's not a strict compare
assertExpect(true, false, "This should fail because true is not false.");
assertExpect(false, true, "This should fail because true is not false.");

/* assertEqual */
console.log("%cassertEqual", "font-size: 20pt;");
assertEqual(1, 1);
assertEqual("1", "1");
assertEqual("1", 1, "This should fail because 1 is not equal to '1'");
assertEqual([1], [1], "This should fail because you can't use aasertEqual to compare objects.");

/* assertSimilar */
console.log("%cassertSimilar", "font-size: 20pt;");
assertSimilar([1], [1]);
assertSimilar([1,1,[2,3]], [1,1,[2,3]]);
assertSimilar({a:1, b:"1"}, {a:1, b:"1"});
assertSimilar({a:1, b:"1", c:[2,5,"IOU"]}, {a:1, b:"1", c:[2,5,"IOU"]});

/* assertDeepEqual */
console.log("%cassertDeepEqual", "font-size: 20pt;");
assertDeepEqual([1], [1]);
assertDeepEqual([1,1,[2,3]], [1,1,[2,3]]);
assertDeepEqual({a:1, b:"1"}, {a:1, b:"1"});
assertDeepEqual({a:1, b:"1", c:[2,5,"IOU"]}, {a:1, b:"1", c:[2,5,"IOU"]});

/* assertIsNaN */
console.log("%cassertIsNaN", "font-size: 20pt;");
assertIsNaN(1*'r');
assertIsNaN(NaN);
assertIsNaN(null, "This should fail because null is not NaN");


/* assertThrowError */
console.log("%cassertThrowError", "font-size: 20pt;");
function raError(){throw new RangeError("too large");}
function tError(a){if(typeof a != "string")throw new TypeError("wrong type");}
function uError(a){encodeURI(a);}
function eError(){throw new EvalError("error while using eval");}
function reError(){throw new ReferenceError("nothing to deference");}
function sError(){throw new SyntaxError("spelling error");}
function error(){throw new Error("general error");}
function noError(){}
//Custom Error
function OsofemError(message){
	this.name = 'OsofemError';
	this.message = message || 'Default Message';
	this.stack = (new Error()).stack;
}
OsofemError.prototype = Object.create(Error.prototype);
OsofemError.prototype.constructor = OsofemError;
//function to throw custom error
function customError(){throw new OsofemError("Too much sass :) ");}

assertThrowError(raError, []/*empty arguments*/, RangeError, "RangeError is expected!");
assertThrowError(tError, [1]/*number given instead of string*/, TypeError, "TypeError is expected!");
assertThrowError(uError, ["\uD800"]/*invalid parameter given*/, URIError, "URIError is expected!");
assertThrowError(eError, []/*empty arguments*/, EvalError, "EvalError is expected!");
assertThrowError(reError, []/*empty arguments*/, ReferenceError, "ReferenceError is expected!");
assertThrowError(sError, []/*empty arguments*/, SyntaxError, "SyntaxError is expected!");
assertThrowError(error, []/*empty arguments*/, Error, "Error is expected!");
assertThrowError(customError, []/*empty arguments*/, OsofemError, "OsofemError is expected!");
assertThrowError(noError, []/*empty arguments*/, Error, "This should fail because error was expected!");