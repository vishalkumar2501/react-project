import { use } from "react";


let promise = new Promise((resolve, reject) => {

let success = true; // Simulating success or failure

    if (success) {      
        resolve("API call was successful!");

    } else {
        reject("API call failed.");

    }       
})
//consume promise 

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then(data=>data.map((user)=> console.log(user.name,user.id,user.address)))
.catch((error) => {console.error(error)});


