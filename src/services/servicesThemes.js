// const baseUrl = 'http://localhost:9999/api';
 const baseUrl = 'https://stronglove.backendless.app/api/data';
// import getCookie from "./auth";

// const baseUrl = 'http://localhost:9999/api'

// export  function getAllThemes() {
//     return fetch(`${baseUrl}/themes`)
//         .then(res => res.json())
// }

export const getOnePost = (objectId) => {
    return fetch(`${baseUrl}/theme/${objectId}`)
        .then(res => res.json())
};

export  function getAllThemes() {
    return fetch(`${baseUrl}/theme`)
        .then(res => res.json())
}

export const createPost =async (postData,usertoken)=>{
let  response= await fetch(`${baseUrl}/theme`,{
         method: 'POST',
         headers: {
            'content-type': 'application/json',
             'X-Authorization': usertoken,
        },
        body:JSON.stringify({...postData})
    })
     let result = await response.json()
    
     

     return result;
}