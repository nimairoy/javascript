"use strict"
// default parameter and rest parameter

//  function defaultParameter(name = "Default Parameter") {
//     console.log(`${name}`);
//  }
//  defaultParameter();


// rest parameter

const restParameter = (x,y,...z) =>{
    console.log(`${x},${y},${z}`);
}
restParameter(10,20,30,40,50,60);