//1. 
function maxOfTwoNumbers(x, y){
    if (x >=y)
    {
        return x;
    }else{
        return y;
    }
}

console.log("Function1: Max of 2 Numbers : " + maxOfTwoNumbers(67,4));

//2. 
function maxOfThree(x, y,z){
    /* if (x >= y) 
    {
        if(x >= z)
        {
         return x;
        }
    }else if (y>=z)
       {
        return y;
       }
       else {
        return z;
    }*/
 if((x>=y) && (x>=z)){
    return x;
 } else if ((y>=x) && (y>=z)){
    return y;
 } else {return z;}

}

console.log("Function2: Max of 3 Numbers : " + maxOfThree(1,400,34));

//3. 
function isCharAVowel(char1){
if (char1==='a' || char1==='e' || char1==="i" || char1==="o" || char1==="u"){
    return true;
}else {
    return false;
}
}
console.log("Function3: isCharacterVowel : " + isCharAVowel('m'));

// 4.
function sumArray(a, b, c, d){
   let total= a+b+c+d;
   return total;
}
console.log("Function4: Sum of Array : " + sumArray(2, 4, 5, 0));

// 5.
function multiplyArray(a, b, c){
 let total= a*b*c;
 return total;
}
console.log("Function5: Multiple of Numbers : " + multiplyArray(10, 10, 10));
        
// 6.
function numArgs(x, y, z){
    return (arguments.length);
}

console.log("Function6: Number of arguments : " + numArgs(2, 3, 4));

// 7.
function reverseString(str){
    let newString= "";
    for(let i =str.length-1; i>=0; i--){
        newString = newString + str[i];
    }
    return newString;
}
console.log("Function7: Reverese string : " +reverseString("pizza"));
     
// 8
function longestStringInArray(arr){
    let longest=arr[0];
    for(let i =1; i<arr.length; i++){
       if(arr[i].length>longest.length){
        longest=arr[i];
       }
    }
    return longest;
}
let arr=["John","James","Rafale","Isabella","Whataburger"];
console.log( "Function8: Longest String : " + longestStringInArray(arr));

// 9.
function stringsLongerThan(arr1,num1){
    let longest="";
    for(let i =1; i<arr.length; i++)
    {
       if(arr[i].length>num1){
        longest=longest+arr[i]+" ";
       }
    }
    return longest;
}
     
let arr1=["John","James","Rafale","Isabella","Whataburger"];
console.log("Function9: String Longer Than : " + stringsLongerThan(arr,6));
    



