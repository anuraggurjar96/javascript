const User = {
    _email: 'anurag@.com',
    _password: "abc",

    // GETTER: Jab aap 'tea.email' print karenge, yeh method chalta hai
    get email(){
        return this._email.toUpperCase(); // Yeh hume email capital letters mein dega
    },

    // SETTER: Jab aap value update karenge (e.g., tea.email = "new@mail.com") tab yeh chalega
    // ❌ ERROR: Aapne parameter ka naam 'va' rakha tha, par andar 'value' use kar rahe the.
    // ✅ FIX: Dono jagah naam same hona chahiye (humne dono jagah 'value' kar diya hai).
    set email(value){
        this._email = value; // Yeh nayi value ko safely backing variable (_email) mein daal dega
    }
}

// Object.create() se 'User' prototype ban jata hai aur 'tea' ek naya object banta hai
const tea = Object.create(User);

// Test checking
console.log(tea.email); // Output: ANURAG@.COM
