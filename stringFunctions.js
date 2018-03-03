var message = 'Hello World';
message.startsWith('H'); // instead of message.indexOf('H') === 0
message.endsWith('d'); 	 // instead of whatever ¯\_(ツ)_/¯

message.includes('or');  // instead of message.indexOf('or') >= 0
// Previously you would have done
new Array(3+1) * '*'

// Now you can simply do
'*'.repeat(3); // Will generate ***
