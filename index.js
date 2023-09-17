class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.dessert = dessert; 
    }
  }
  
  
  // Example instances
  const myBreakfast = new Breakfast("oatmeal", "coffee");
  const myLunch = new Lunch("green salad", "tomato soup", "iced tea");
  const myDinner = new Dinner("caesar salad", "broccoli cheddar soup", "steak", "chocolate cake");
  
  console.log(myBreakfast);
  console.log(myLunch);
  console.log(myDinner);
  