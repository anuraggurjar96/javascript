function User(email, password)
{
    // NOTES: Yeh backing variables hain (_email, _password). 
    // Inka use actual data store karne ke liye kiya jata hai taaki infinite loop se bacha ja sake.
    this._email = email;
    this._password = password;

    // ERROR 1: Aapne yahan property ka naam 'emial' (typo) likha hai. 
    // Is wajah se console.log(anurag.email) karne par 'undefined' milega. Isse 'email' hona chahiye.
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value)
        {
            // ERROR 2 (CRITICAL): Aapne 'this.email = value' likha hai.
            // Isse "Maximum call stack size exceeded" (infinite loop) crash hoga.
            // FIX: Yahan 'this._email = value' hona chahiye.
            this.email = value;
        }
    });


    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value)
        {
            // ERROR 3 (CRITICAL): Yahan bhi 'this.password = value' likha hai.
            // Jab bhi koi password update karega, yeh setter khud ko hi baar-baar call karta rahega jab tak crash na ho jaye.
            // FIX: Yahan 'this._password = value' hona chahiye.
            this.password = value;
        }
    });
}

const anurag = new User("gurjar@email.com", "anurag");

// NOTES: Kyunki upar 'emial' ki typo hai, isliye yeh line properly kaam nahi karegi.
console.log(anurag.email); 
