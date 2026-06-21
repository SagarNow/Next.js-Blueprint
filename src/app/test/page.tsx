import React from 'react'

const page = () => {
 
    type person ={
        name : string,
        age : number,
        city : string
    };
    const person :person = {
        name : "Radhe",
        age : 25,
        city : "Delhi"
    };


type person2 = person & {
    salary : number
}
    const person2 :person2 = {
        name : "Sagar",
        age : 30,
        city : "Mumbai",
        salary : 100000
    };

    return (
        <div>
            <h1>Person 1: name = {person.name}, age = {person.age}, city = {person.city}</h1>
            <h1>Person 2: name = {person2.name}, age = {person2.age}, city = {person2.city}, salary = {person2.salary}</h1>
        </div>
    )
}

export default page