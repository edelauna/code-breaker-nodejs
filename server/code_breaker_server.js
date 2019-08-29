var code_length = 5; 	// set this number between 1 to 5
var num_balls = 8; 		// this number must be greater or equal to code_length
var num_attempts = 8; 	// change this number to have less or more attempts

var codes = {}; // an empty JS object, later it's going to store the code for each end-user

var express = require('express');
var app = express();


app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);
    
    /*TODO... check if the request action is generateCode*/
    if (z['action']=='generateCode'){
            //generate a code for this user
            generateCode(z['name']);
            var jsontext = JSON.stringify({
                'action':'generateCode', 
                'msg':'New code generated!!!'
                });
            console.log(jsontext);
            console.log(codes);
			
            /*TODO... send the response including the JSON text*/
            res.send(jsontext);

        } else if (z['action'] == "evaluate"){
            //evaluate the attempt_code for this user
            var [eval, counts]
                = evaluate(codes[z['name']], z['attempt_code']);
 
			var answer=[];
			if ((counts['match']==code_length)|| (num_attempts ==z["current_attempt_id"]))
				answer=codes[z['name']];
			
			var win=false;
			if (counts['match']== code_length) win=true;
			
			/* the response will have 6 parts: request action, whether won or not, number of exact matches,
			number of colors that are correct, number of wrong colors, and the answer if the game ended */
			var jsontext = JSON.stringify({
				/*TODO... type of action */
                'action' : 'evaluate',
                /*TODO... won or not */
                'win': win,
                /* Customized to handle position */
                'analysis': eval,
                'code': answer
                });
            console.log(jsontext);
            res.send(jsontext);
        } else {
            res.send(JSON.stringify({'msg':'error!!!'}));
        }
}).listen(3000);
console.log("Server is running!");

/*
 * Evauate the client's attempting code
 * @param code is the server generated code for this client
 * @param attempt_code is the client attempted code in this request
 * @return num_match, num_containing, num_not_in
 */
function evaluate(code, attempt_code){
    var eval = []
    var counts = {}

    
    //calculate the result
    for(var i = 0; i < attempt_code.length; i++){
        var num = attempt_code[i];
        eval[i] = 0;
        counts[num] = counts[num]? counts[num]: {};
        counts[num]['count'] = counts[num]['count'] ? counts[num]['count'] +1 : 1;

        if(code.includes(attempt_code[i])){
            eval[i] = 2;
            counts[num]['containing'] = counts[num]['containing'] ? counts[num]['containing'] +1 : 1;
        }

        for(var j = 0; j < code.length; j++){
            if(attempt_code[i] == code[j]){
                if(i == j){
                    eval[i]= 1;
                    counts['match'] = counts['match'] ? counts['match'] +1 : 1;
                    counts[num]['match'] = counts[num]['match'] ? counts[num]['match'] +1 : 1;
                }
            }
        }
    }

    return [eval, counts];

}

/*
 * Generate a Code for this client
 * @param clientName is this client name
 */
function generateCode(clientName){
    //generate code
    
	/*TODO... declare and initialize the code to an empty array*/
    var code = [];

    while(code.length < code_length){
        var id = Math.floor(Math.random()*num_balls) + 1;
            if(code.indexOf(id) === -1) code.push(id);       
    }
    //store the code for this client
    codes[clientName] = code;
}