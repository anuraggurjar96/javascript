// ==========================================
// 1. PARENT CLASS (USER) - Ek hi baar declare kiya
// ==========================================
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // SHORT NOTE: 'static' method class ka locked method hota hai.
    static createdId() {
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(User.createdId()); // Output: 123


// ==========================================
// 2. CHILD CLASS (TEACHER) WITH GETTER/SETTER
// ==========================================
class Teacher extends User {
    constructor(username, email, password) {
        super(username) 
        this.email = email
        this._password = password // '_' lagaya taaki call stack error na aaye
    }

    // GETTER: Password read karte waqt uppercase + xyz karega
    get password() {
        return `${this._password.toUpperCase()}xyz` 
    }

    // SETTER: Naya password save karega
    set password(value) {
        this._password = value 
    }
}

const iphone = new Teacher("iphone", "i@phone.com", "abc")

// ==========================================
// 3. TESTING
// ==========================================
console.log(Teacher.createdId()); // Output: 123
console.log(iphone.password);     // Output: ABCxyz
