"use strict"

// GET METHOD IN axios 
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

// // POST METHOD IN axios 
// axios.post('https://jsonplaceholder.typicode.com/posts',{
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))

// // PUT METHOD IN axios 
// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
//     body: JSON.stringify({
//         id: 1,
//         title: 'fooma',
//         body: 'barma',
//         userId: 1,
//     })
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))

// // PATCH METHOD IN axios 
// axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
//     body: JSON.stringify({
//         title: 'furfura',
//     }),
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))

// // DELETE METHOD IN axios 
// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))



const makeRequest = async (config) => {
    return await axios(config);
}

// get Data 
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err.message))
}
getData();

// create Data 
const createData = () => {
   makeRequest({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'post',
    data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
   })
   .then((res)=>console.log(res.data))
   .catch((err)=>console.log(err)) 
}
createData();

// update Data 
const upadateData = () => {
   makeRequest({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'put',
    data: JSON.stringify({
        id: 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,
    }),
   })
   .then((res)=>console.log(res.data))
   .catch((err)=>console.log(err)) 
}
upadateData();

// patch Data 
const singleUpdateData = () => {
   makeRequest({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'patch',
    data: JSON.stringify({
        title: 'fishy',
    }),
   })
   .then((res)=>console.log(res.data))
   .catch((err)=>console.log(err)) 
}
singleUpdateData();


// delete Data 
const deleteData = () => {
   makeRequest({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'delete'
   })
   .then((res)=>console.log(res.data))
   .catch((err)=>console.log(err)) 
}
deleteData();