const e =require('../lib/gmail');

// create object of email class
const email= new e.EMail();  
receiver= 'sachaparahasti7@gmail.com';
subject="test mail";
message="good morning how are yoy";

email.send(receiver,subject,message);