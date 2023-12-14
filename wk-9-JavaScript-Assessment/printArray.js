//function that prints the value of an array to the console

function PrintArrayNumbers() {
    const arrayNum = [0, 1, 3, 5, 7, 9, 11];
        for (let i = 0; i < arrayNum.length; i++) {
        console.log(arrayNum[i]);
    }
    return arrayNum;
    
}

PrintArrayNumbers();