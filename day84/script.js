"use strict"

// four ways to call api: XMLHttpRequest, fetch, axios, jQuery

// GET Method in fetch 
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=>{
//     if(!res.ok){
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));


// POST Method in fetch
// Send data
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//         title: 'fooo',
//         body: 'bar',
//         userId: '1',     
//     }),
// })
// // .then((res)=>{
// //     if(!res.ok){
// //         const message = `Error : ${res.status}`;
// //         throw new Error(message);
// //     }
// //     return res.json();
// // })
// // .then((res)=>console.log(res))
// // .catch((err)=>console.log(err));


// // updateData
// // put method 
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify({
//         id: 1,
//         title: 'Floozy',
//         body: 'barmij',
//         userId: 1

//     }),
// })
// .then((res)=>{
//     if(!res.ok){
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));



// single item updateData
// PATCH method 
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify({
//         title: 'loo',

//     }),
// })
// .then((res)=>{
//     if(!res.ok){
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));



// Delete Data
// // DELETE method 
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'DELETE',
// }).then((res)=>{
//     if(!res.ok){
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//====================================
// fetch using the async await  method
//====================================
//GET Method
const makeRequest = async(url,config) => {
   const res = await fetch(url,config);
   if(!res.ok){
    const message = `Error : ${res.status}`;
    throw new Error(message);
   }
   const data = await res.json();
   return data;
}

// const getData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));
// }
// getData();


// POST Method
// const sendData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }), 
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));
// }
// sendData();


// // PUT Method
// const updateData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PUT',
//         body: JSON.stringify({
//           id: 1,
//           title: 'fooma',
//           body: 'barma',
//           userId: 1,
//         }), 
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));
// }
// updateData();


// PATCH Method
// const updateSingleData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PATCH',
//         body: JSON.stringify({
//           title: 'fififif',
//         }), 
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));
// }
// updateSingleData();


// DELET Method
const deleteData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'DELETE',
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}
deleteData();

