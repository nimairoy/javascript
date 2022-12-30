"use strict"

//event- onload(), onerror(),
//property - response, responseText, responseType, responseURL, status, statusText
//function - open(), send(), setRequestHeader

const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.setRequestHeader('Content-type','application/json');
        xhr.onload = ()=>{
            let data = xhr.response;
            console.log(JSON.parse(data));
        }
        xhr.onerror = ()=>{
            console.log("Error is here");
        }
        xhr.send(JSON.stringify(data));
    });
}


const getData = ()=> {
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
    .then((res)=>console.log(res));
}
getData();

const sendData = ()=>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}
// sendData();

const updateData = ()=>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id:1,
        title: 'foojli',
        body: 'barbari',
        userId: 1,
    });
}
// updateData();

const singleDataUpdate = () => {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        title: 'fooma',        
    });
}
// singleDataUpdate();


const deleteData = () => {
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
}
// deleteData();







// const makeRequest = (method,url,data)=>{
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.setRequestHeader('Content-type','application/json');

//         xhr.onload = ()=>{
//             let data = xhr.response;
//             console.log(JSON.parse(data));
//         }
//         xhr.onerror = () => {
//         console.log("Error Here");
//         }
//         xhr.send(JSON.stringify(data));
//     })
// }

// const getData = ()=>{    
//        makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
//         .then((res)=>console.log(res))
// } 

// const sendData = () => {
//     makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// }
    
// const updateData = ()=>{
//     makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//         id:1,
//         title: 'fooska',
//         body: 'barbari',
//         userId: 1,
//     })
// }

// const updateSingleData = ()=>{
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'This is title',
//     })
// }
// const deleteData = ()=>{
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
// }
// getData();