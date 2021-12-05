// const baseUrl = 'http://localhost:9999/api';
const baseUrl = 'https://stronglove.backendless.app/api/data';

// export  function getAllThemes() {
//     return fetch(`${baseUrl}/themes`)
//         .then(res => res.json())
// }

export  function getAllThemes() {
    return fetch(`${baseUrl}/theme`)
        .then(res => res.json())
}

export const createPost =(postData, token)=>{
    return fetch(`${baseUrl}/post`,{
         method: 'POST',
         headers: {
            'content-type': 'application/json',
             'X-Authorization': token,
        },
        body:JSON.stringify({...postData, likes:[]})
    }).then(res=>res.json())
    .then(err=>console.error.err);
    // let result =  response.json();

    // return result;
}