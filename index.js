let iteration = 1

do {
    console.log(iteration)
    iteration += 5
}
while (iteration < 100)

for(let i = 0; i <= 100; i++){
    console.log(i)
}

const numbers = [2,3,5,7,11,13,17,19,23]

for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    console.log(element)
}

let a = 8
let result = 1;

for(let i = 0; i < a; i++){
    result = result * (a-i);
}

console.log(`Hasil faktorial ${a} adalah ${result}`);

let input = "DianPuspitaSari";
let reverseName = "iraSatipsuPnaiD";

let output = input
.split("")
.reverse()
.join("");
console.log(output);

let output1 = reverseName
.split("")
.reverse()
.join("");
console.log(output1);

