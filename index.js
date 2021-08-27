<<<<<<< HEAD
maxArea = function(height) {
    for (var i = 0; i < height.length; i++) {
        console.log(height[i])
    }
};
maxArea([1,3,2,3])
=======
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
>>>>>>> master
