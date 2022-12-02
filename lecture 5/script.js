class Animal {
    constructor(color, vegetarian) {
      this.color = color;
      this.vegetarian = vegetarian;
    }
  
    get isVegetarian() {
      return this.vegetarian
    }
    
    set setVegetarian(isVegetarian) {
      this.vegetarian = isVegetarian;
  
    }
  
  
    display() {
      console.log("color:", this.color, "vegetarian:", this.vegetarian);
    }
  }
  
  class Cat extends Animal {
    constructor(name, color) {
      super(color, false);
      this.name = name;
      
    }
    voice() {
      console.log("Meow!");
    }
    climb() {
      console.log("I can climb!");
    }
  }
  
  class Lion extends Cat {
    voice() {
      console.log("Roar!");
    }
    display() {
      super.display();
      console.log('name:', this.name)
  
    }
  }
  
  const kata = new Cat('vaxo', 'blue')
  const lomi = new Lion('mepe lomi','orange')
  
  kata.voice();
  kata.climb();
  kata.display();
  
  lomi.voice();
  lomi.climb();
  lomi.display();