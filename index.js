const form=document.getElementById("gradeGenerator");
const input=document.getElementById("score");
const message=document.getElementById("score")
form.addEventListener("submit",(event) => {event.preventDefault();
validateInput(input);
});
// we validate our input to ensure only the type of data we want is keyed
function validateInput(input){ console.log(input.value);
const gradeCheck=input.value
//conditional statement to evaluate student grade from user input
// we use && to return true only if both operands are true .
if (gradeCheck >79 && gradeCheck<=100){
    console.log ("A")
message.innerHTML=`<li>score A</li>`
}
else if (gradeCheck >=60 && gradeCheck<=79){
    console.log ("B")
 message.innerHTML=`<li>score B</li>`}
 else if (gradeCheck >49 && gradeCheck<=59){
    console.log("C")
message.innerHTML=`<li>score C</li>`}
 else if (gradeCheck >40 && gradeCheck<=49){
console.log("D")
message.innerHTML=`<li> score D</li>`}
else if (gradeCheck >=0 && gradeCheck<49){
console.log("E")
message.innerHTML=`<li>score E</li>`}
else 
console.log("Input a wh number between zero and 100")
}
console.log(input.value)

