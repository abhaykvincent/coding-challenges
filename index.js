console.log('===================')
console.log('Reverse Integer Number')
console.log('===================')


isPalindrome = function(x) {
    let temp = x;
    let rev=0;
    while(x!=0){
        rev=(rev*10)+(x%10)
        x= parseInt(x/10)
        console.log(rev)
    }
    if(temp>=0&&temp==rev){
        return true;
    }
    else{
        return false;
    }
};
isPalindrome(12121)