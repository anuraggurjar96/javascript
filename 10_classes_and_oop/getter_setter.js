class user {
    constructor(email, password)
    {
        this.email = email;
        this.password = password; // Triggers the setter below
    }


    get email()
    {
        // 1. Changed this.password to this._password
        return this._email.toUpperCase();
    }

    set email(value)
    {
        // 2. Changed this.password to this._password
        this._email= value; 
    }
    get password()
    {
        // 1. Changed this.password to this._password
        return this._password.toUpperCase();
    }

    set password(value)
    {
        // 2. Changed this.password to this._password
        this._password = value; 
    }
}

const anurag = new user("h@hitesh.ai", "ABC");
console.log(anurag.email); // Output: 123
