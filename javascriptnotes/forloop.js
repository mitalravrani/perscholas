/*Write a for loop for the given output:
 10, 30, 50, 70, 90
 20, 40, 60, 80, 100*/

 //create a new  variable for loop and output
 //let i=0;
 let output1=10;
 let output2=20;
 let printoutput1="";
 let printoutput2="";
 
 let i=0;
 
// this is for output1 only for 10,30,50,70,90
 for(i=10; i<100; i=i+20)
 { 
    printoutput1 = printoutput1 + i + ", ";
}    
 console.log(printoutput1);
 

// this is for output2 only i.e. 20,40,60,80,100
 for(i=20; i<=100; i= i+20)
 {
    printoutput2 = printoutput2 + i + ", ";
}    
 console.log(printoutput2);
/*
 i=10;
 printoutput1=""
 while(i<100)
 {
    printoutput1 = printoutput1 + i + ", ";
    i= i+20;
    console.log(printoutput1);
 }
 */