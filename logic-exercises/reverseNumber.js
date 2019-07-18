// -------------------------------------//
// Numero invertido
// -------------------------------------//

const reverse = num => {
    let numString = num.toString();
    let reverseString =""
    for(let i = numString.length; i >= 0; i--){
        reverseString += numString.charAt(i);
    }
    let reverseNumber = parseInt(reverseString);
    console.log(reverseNumber);
}

console.log("----------");
reverse(12345);
console.log("----------");