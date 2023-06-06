let menu ={
  breakfast: {
      food: [
          "Egg Whites",
          "Bacon Sandwich",
          "French Toast",
          "Toaster Strudel",
  ],
      drinks: [
          "Milk",
          "Orange Juice",
          "Coffee"
      ]
  },
  lunch: {
      food: [
          "Patty Melt",
          "Steak Sandwich",
          "Veggie Wrap"
      ],
      drinks: [
          "Tea",
          "Soda",
          "Crunk Juice"
      ]
  },
  dinner: {
      food: [
          "Lamb Chop",
          "Seared Steak",
          "Nachos",
          "Fajita"
      ],
      drinks: [
          "El Vino",
          "Jarrito",
          "Pepsi"
      ]
  },
  beverages: {
      drinks: [
          "Smoothie",
          "Milkshake",
          "Pudding McFlurry"
      ]
  }
}
let dailySpecial  = "Hamburger Helper"
​
let storeLocations = ["Brooklyn","Yonqers","Harlem","Flatbush"]
​
​
​
​
​
// ----------FUNCTIONS
// 2ways to write Funcs()
​ // 1. function declaration
      // function whateverName(){
      // }
​  // 2. arrow function
      // const whateverName = () => {
      // }


      // const getBreakfastItems = () => {            
      //     let items = menu.breakfast.food
      //     let button = document.querySelector('#one')
      //     button.replaceWith(" Menu Now Available in your Console")
      //     items.forEach((mariluz)=>{
      //         console.log(mariluz)
      //     })
      // }

      


  const getAnyItem = (theme) =>{ 
      if(theme === "breakfast"){
          console.log(menu.breakfast.food)
      } else if(theme === "lunch"){
          console.log(menu.lunch.food)
      }else{
          console.log(menu.dinner.food)
      }
  }
​
​
​
​
​
​
​
​
​
​