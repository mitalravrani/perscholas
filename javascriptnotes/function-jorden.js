// Homework Assignment Review
  // Solve 5of9

// 1.maxOfTwoNums
const maxOfTwoNumbers = (a,b) => {
    let maxNumber;
    if(a>b){
      maxNumber = a
    }else{
      maxNumber = b
    }
    console.log(`Largest Number: ${maxNumber}`)
  }
  
  // maxOfTwoNumbers(12,5)
  // maxOfTwoNumbers(55,102)
  // maxOfTwoNumbers(17,18)
  
  // ---------------------------
  
  // 2.maxOfThree
  const maxOfThreeNums = (a,b,c)=>{
    let max;
    if(a > b && a>c){
      max = a
    }else if(b > a && b>c){
      max = b
    }else{
      max = c
    }
    console.log(`${max} is greatest`)
  }
  
  // maxOfThreeNums(11,10,9)
  // maxOfThreeNums(33,39,32)
  // maxOfThreeNums(0,1,5)
  // ---------------------------
  
  
  // 3.isCharAVowel
  const isCharAVowel = (letter) =>{
    vowels = ["a","e","i","o","u","y"]
  
    vowels.forEach((char)=>{
      if(char === letter.toLowerCase()){
       console.log(letter,"is a vowel")
      }
    })
  }
  // isCharAVowel("A")
  // isCharAVowel("P")
  // isCharAVowel("Y")
  // isCharAVowel("R")
  // -----------------------
  
  
  // 4.sumArray
  const sumArray = (arr) =>{
    let finalNum=0
    
    arr.forEach((num)=>{
      finalNum += num
    })
    console.log("ArrValues Added = ",finalNum)
    
  }
  // sumArray([1,2,3,4,5])
  // sumArray([2,4,5])
  // sumArray([0,9,8,7,2])
  // sumArray([7,2,3])
  // -----------------------
  
  
  // 5. multiplyArray
  const multiplyArray = (arr)=>{
   let startNum = arr[0]
  
    for(i = 1;i<arr.length; i++){
    startNum *= arr[i]
    }
    console.log(startNum)
  }
  // multiplyArray([1,2,3,4,5])
  // multiplyArray([2,4,5])
  // multiplyArray([0,9,8,7,2])
  // multiplyArray([7,2,3])
  // -----------------------
  
  // 6. numArgs 
    // ** explainSpreadOperator
  const numArgs =(...args)=>{
    console.log("Number of Arguments:",args.length)
  }
  // numArgs(1,2,43)
  // numArgs(1,2,43,4)
  // numArgs(1,2,43,0,0,0,0)
  
  // 7.reverseString
  const reverseStr = (str) => {
    let choppedWord = str.split("")
    let reversedWord = choppedWord.reverse()
    console.log(reversedWord)
  }
  // reverseStr("tacocat")
  // reverseStr("jordan")
  // reverseStr("apple")
  // reverseStr("love")
  // 8.longestStringNarr
  
  const longestStrNarr = (arr)=>{
    let longestCount=0
    let longestWord;
    arr.forEach((str)=>{
      // console.log(str,str.length)
      if(str.length>longestCount){
        longestWord = str
        longestCount = str.length
      }
    })
  
    console.log(`Longest String is ${longestWord} with ${longestCount} character`)
  }
  // longestStrNarr(["bob","cindy","laquisha"])
  // longestStrNarr(["red","blue","magenta"])
  // longestStrNarr(["hola","greetings", "howdy"])
  
  // 9.stringLongerThan
  const stringLongerThan = (str,num) => {
    let longerThan = []
    str.forEach((word)=>{
      if(word.length > num){
        longerThan.push(word)
      }
    })
    console.log(longerThan)
  }
  // stringLongerThan(["cindylou","max",'billybob',"tuck"],5)
  // stringLongerThan(["lou",'bobDole',"tuckerEverlasting"],3)
  // stringLongerThan(["st.louNatiks",'bobby',"hu"],2)
  
  // --------------------
  
  
  // let cat = "Sam"
  // let age = 12
  // console.log("My Cats name is" , cat)
  // // String Interpolation
  // console.log( `My Cats name is ${cat} and her age is ${age}`  )
  