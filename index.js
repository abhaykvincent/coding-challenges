console.log('===================')
console.log('Reverse Integer Number')
console.log('===================')


isPalindrome = function(numbers) {
    let number_string = numbers.toString();
    let flag = false;
    console.log(number_string)

    for (let i=0; i<number_string.length/2; i++){
        let j = number_string.length-i-1;
        if(number_string[i] ===  number_string[j])
        {
            console.log(number_string[i])
            flag = true;
        }
        else{
            return false
        }
    }
if(flag) return true

};
isPalindrome(-1221)