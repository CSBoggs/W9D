function applyMath(int1, int2) {
    return ((int1 + int2) * 5);
}

function isStringOver10(myString) {
    return myString.length > 10;
}

function findPH(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].startsWith("Ph")) {
            return myArray[i];
        }
    }
        return "no strings starting with ph found";
}

console.log(applyMath(9, 4));
console.log(applyMath(5, 5));
console.log(applyMath(3, 7));
console.log(isStringOver10("ant"));
console.log(isStringOver10("antidista"));
console.log(isStringOver10("antidistablishmenttarianism"));
console.log(findPH(["Jim", "Dwight", "Pam", "Michael", "Kevin", "Oscar", "Angela"]));
console.log(findPH(["Jim", "Dwight", "Pham", "Michael", "Kevin", "Oscar", "PhAngela"]));
console.log(findPH(["PhJim", "Dwight", "Pham", "Michael", "Kevin", "Oscar", "PhAngela"]));