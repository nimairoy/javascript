

"use strict"

const makeRequest = async (url, method,data) => {
    try {
        const result = await $.ajax({
            url: url,
            method: method,
            data: data,
        });
        return result;  
    } catch (error) {
        console.log(error);
    } 
}

// get data 
const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1','GET') 
    .then((res)=>console.log(res));  
}
getData();

// create Data
const createData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts','POST', {
        title:'foo',
        body: 'bar',
        userId: 1,
    }).then((res)=>console.log(res))
}
createData();

// update Data
const updateData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/2','PUT', {
        id:2,
        title:'fooma',
        body: 'barma',
        userId: 3,
    }).then((res)=>console.log(res))
}
updateData();

// DELETE Data
const deleteData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/2','DELETE',).then((res)=>console.log(res))
}
deleteData();