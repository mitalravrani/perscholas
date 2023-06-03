//while loop exercise 1 - output 1 to 5
let i=1;
while(i<=5){
console.log(i);
i++;
}

//while loop exercise 2 - output 1 to 5 in rows
let output1="";
i=1;
while(i<=5){
    output1=output1+i,
    console.log(output1);
    i++;
}

//while loop exercise 3 - parent age
let parentAge=70;
isAge=true

while(parentAge>60 && isAge===true){
   
    console.log("you are right", parentAge);

   if(parentAge===65) 
   {
    isAge=false;
   }

   parentAge=parentAge-1;
}

console.log("you are failing")


//while loop exercise 4 - son grade
let sonGrade = 75
isPassing = true

while(sonGrade > 60 && isPassing === true)
{
  console.log("You are passing",sonGrade)
  if(sonGrade === 70){
    isPassing = false
  }
  sonGrade --;
}
console.log("You are Failing")