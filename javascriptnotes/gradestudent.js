/*Write an if/else statement for the following requirements:
- If student gets 80 or higher: console log  You did a good job
- If students get 70 or above: console log Keep trying
- If students get 60 or above: console log ehhhh
- If students get 55 or above: console log Not to good
- Any grade lower than 55 is Bad Grade But You'll Get Em Next Time*/

// create a new variable - grade for student
let grade = 77;
let printgrade;

if (grade>=80){printgrade="You did a good job";}
else if(grade>=70 && grade<80){printgrade="Keep trying";}
else if(grade>=60 && grade<70){printgrade="ehhhh";}
else if(grade>=55 && grade<60){printgrade="Not to good";}
else {printgrade="Bad Grade But You'll Get Em Next Time";}

console.log(printgrade);