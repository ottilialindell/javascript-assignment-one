// if/else and an operator

//Case 1
//triangleOne: base = 10cm, height = 13cm
//triangleTwo: base = 16,5cm, height = 20,3cm

const triangleOne = (10 * 13) / 2;
const triangleTwo = (16.5 * 20.3) / 2;

console.log(`Triangle One has an area of ${triangleOne} and Triangle Two has an area of
${triangleTwo}.`);

if (triangleOne >= triangleTwo) {
  console.log("Triangle One is bigger than Triangle Two");
} else {
  console.log("Triangle Two is bigger than Triangle One.");
}

//Case 2
//triangleThree: base = 16,5cm, height = 20,3cm
//triangleFour: base = 20,3cm, height = 16,5cm

const triangleThree = (16.5 * 20.3) / 2;
const triangleFour = (20.3 * 16.5) / 2;

const caseTwo = triangleThree === triangleFour;
console.log(caseTwo);

console.log(`Triangle Three has an area of ${triangleThree} and Triangle Four has an area of
${triangleFour}.`);

if (triangleThree === triangleFour) {
  console.log("Triangle Three & Four are the same size.");
} else {
  console.log("Go back & re-think, they're not the same size.");
}

//Case 3
//triangleFive: base = 7,8cm, height = 5,6cm
//triangleSix: base = 9,3cm, height = 12,4cm

const triangleFive = (7.8 * 5.6) / 2;
const triangleSix = (9.3 * 12.4) / 2;

console.log(`Triangle Five has an area of ${triangleFive} and Triangle Six has an area of
${triangleSix}.`);

if (triangleFive >= triangleSix) {
  console.log("Triangle Five is bigger than Triangle Six");
} else {
  console.log("Triangle Six is bigger than Triangle Five.");
}

// ANSWERING QUESTION
// The parentheses are needed because of the operator precedence, both *
// and / has the same precedence.
