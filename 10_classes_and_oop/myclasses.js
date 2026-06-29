// 1. Base Class (Parent Class) banayi
class User {
  constructor(username) {
    // Jab bhi new User() banega, ye constructor chalega
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// 2. Derived Class (Child Class) banayi jo User ki saari properties inherit karegi
// NOTE: 'extends' keyword ka use karke Teacher class ko User ka access mila
class Teacher extends User {
  constructor(username, email, password) {
    // TECHNICAL NOTE (super keyword): 
    // super() ka kaam hai Parent class (User) ke constructor ko call karna.
    // Isse 'username' automatic Parent class ke paas chala jata hai set hone ke liye.
    super(username); 
    
    this.email = email;
    this.password = password;
  } 
  addCourse() {
    // Kyunki Teacher ne User ko extend kiya hai, isliye iske paas bhi 'this.username' ka access hai
    console.log(`A new course was added by ${this.username}`);
  }
}

// 3. Object Creation
// NOTE: addCourse() method sirf Teacher ke paas hai, isliye hume 'new Teacher()' banana padega
const chai = new Teacher("chai", "chai@12345.com", "12345");

// 4. Methods Calling
chai.addCourse(); // Output: A new course was added by chai
chai.logMe();     // Output: USERNAME is chai (Kyunki Teacher ke paas logMe ka access bhi aa gaya hai)
