var wallet = 1000;
var pin = 1234;

var amount = 350;
var pinEntered = 123;

if (pinEntered == pin){
    wallet -= amount;
    console.log(`Withdrawal Completed Successsfully.. and your last balance is: ${wallet}`);
}else{
    console.log("Incorrect Pin!! Try Again..");
}