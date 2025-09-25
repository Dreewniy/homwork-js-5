// let person = {
//     name: "Sargis",
//     age: 17,
//     city: "Erevan"
// }
// person.isStudent = true;

// delete person.city;

// for(let key in  person){
//     console.log(person[key]);
// }

// if("age" in person){
//     console.log("uni page");
// }else{
//     console.log("chuni age");
// }

function makeUser(key1,key2,key3,key4){
    obj = {
        key1: key1,
        key2: key2,
        key3: key3,
        key4: key4,
    }
    return obj;
}
let user = makeUser("hello", undefined, 123, undefined);

for(let key in user){
    console.log(user[key]);
}

    delete user.key2;
    delete user.key4;

    for(let key in user){
        console.log(user[key]);
    }
