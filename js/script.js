document.body.innerHTML ="this is some content"  



let tem ="What is the Temperature today?";
let event ="What type of event are you going to?";
let result2 ={
    casual: "something comfy",
    semiformal: "a polo",
    formal: "a suit",
}
let tempFahr = prompt(temp);
let eventType= prompt(event);
let result = "";
let result = result1 + result2;

console.log(tempFahr);
console.log(eventType);

let clothing = result2[evenType];

if(tempFahr <= 54){
    jacket = "a coat";
} else if(tempFahr >=55 && tempFahr<=70){
    jacket= "a jacket";
} else if(tempFahr >70){
    jacket= "no jacket";
}
console.log(`since it is ${tempFahr} degrees and you are going to a ${evenType} event, you should wear ${result}`)