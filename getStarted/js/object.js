// === 1. CREATING OBJECTS ===
// Objects store data in key-value pairs (properties).
const letslearnUSers={
    name:"saugat Bagale",        // String property
    age:23,                      // Number property
    isLogin:true,                // Boolean property
    cources:["Python","Django","MERN","s"], // Array property
    "present days":['sun',"mon","tues"]     // Property with space (requires quotes)
}

// === 2. MODIFYING OBJECTS ===
// Updating existing properties using dot notation
letslearnUSers.cources=["digtal marketing","uiux"]

// Adding NEW properties dynamically
letslearnUSers.grade="class2"

const extrainfo={
    grade:"class 1",
    name:"sugam"
}

// === 3. SPREAD OPERATOR (...) with Objects ===
// Used to merge objects.
// IMPORTANT: If keys match (like 'grade' or 'name'), the LAST object overwrites earlier ones.
// Here, letslearnUSers is last, so 'grade' becomes "class2" (not "class 1").
console.log({...extrainfo,...letslearnUSers})


// === 4. ACCESSING PROPERTIES ===
// Bracket notation is REQUIRED for keys with spaces
letslearnUSers['present days'].push("wen") 

// Standard array methods work on array properties
letslearnUSers.cources.pop() // Removes last element

console.log(letslearnUSers)

// === 5. ARRAY OF OBJECTS ===
// A very common data structure (like JSON data from an API)
const letslearnUsersArray=[{
    name:"saugat Bagale",
    age:23,
    isLogin:true
},{
    name:"Nishant",
    age:24,
    isLogin:false
},
{
    name:"Aakriti",
    age:22,
    isLogin:true
}
]

// Accessing: Index first [0], then dot notation .isLogin
console.log(letslearnUsersArray[0].isLogin)

// NOTE: Spreading multiple objects with the SAME keys into one object causes data loss.
// Only the values from the *last* object (letslearnUsersArray[2]) will survive.
const combvalv={...letslearnUsersArray[0],...letslearnUsersArray[1],...letslearnUsersArray[2]}
console.log("hi",combvalv)




// === 6. NESTED OBJECTS ===
// Objects stored inside other objects
const letslearnUSersb={
    saugat:{
        name:"saugat Bagale",
        age:23,
        isLogin:true,
        cources:["Python","Django","MERN","s"],
        "present days":['sun',"mon","tues"]
    },
    nishant:{
        name:"Nishant",
        age:24,
        isLogin:false,
        cources:["Python","Django","MERN","s"],
        "present days":['sun',"mon","tues"]
    },
    aakriti:{
        name:"Aakriti",
        age:22,
        isLogin:true,
        cources:["Python","Django","MERN","s"],
        "present days":['sun',"mon","tues"]
    }
}

// Accessing nested data: Chain operations (object.property.subProperty)
console.log(letslearnUSersb.saugat.cources)


