// basic class

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Creating objects using the class
  const rectangle1 = new Rectangle(5, 10);
  console.log(rectangle1.calculateArea()); // Output: 50
  
  const rectangle2 = new Rectangle(7, 3);
  console.log(rectangle2.calculateArea()); // Output: 21

// Inheritance Class
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color); // Call the parent class constructor
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Creating objects using the classes
  const shape = new Shape('red');
  console.log(shape.getColor()); // Output: 'red'
  
  const circle = new Circle('blue', 5);
  console.log(circle.getColor()); // Output: 'blue'
  console.log(circle.getArea()); // Output: 78.53981633974483


  // Static Class
  class MathUtils {
    static square(x) {
      return x * x;
    }
  }
  
  console.log(MathUtils.square(5)); // Output: 25

  // Singleton class
  class Database {
    constructor() {
      if (Database.instance) {
        return Database.instance;
      }
  
      this.data = {}; // Example data storage
  
      Database.instance = this;
    }
  
    getData(key) {
      return this.data[key];
    }
  
    setData(key, value) {
      this.data[key] = value;
    }
  }
  
  // Usage
  const db1 = new Database();
  const db2 = new Database();
  
  db1.setData('name', 'John');
  console.log(db2.getData('name')); // Output: 'John'
  console.log(db1 === db2); // Output: true