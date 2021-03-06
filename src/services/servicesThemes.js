import * as request  from "./requester";
 const baseUrl = 'https://stronglove.backendless.app/api/data';

 export const getOnePost = (objectId) => {
    return fetch(`${baseUrl}/theme/${objectId}`)
        .then(res => res.json())
};

export  const getAllThemes =()=> request.get(`${baseUrl}/theme`)


export const createPost =async (postData,usertoken)=>{
    let  response= await fetch(`${baseUrl}/theme`,{
        method: 'POST',
        headers: {
         
            'content-type': 'application/json',
            'X-Authorization': usertoken,
        },
       
        body:JSON.stringify({...postData, likes:[]})
    })
     let result = await response.json()
    
     

     return result;
}

export const destroy =(objectId, usertoken)=>{
    return fetch(`${baseUrl}/theme/${objectId}`,
    { 
        method: 'DELETE',
        headers:{
            'X-Authorization': usertoken,
        }
    }  
    )
    .then(res=> res.json())
}

export const like = (objectId, theme,  usertoken) => {
    return fetch(`${baseUrl}/theme/${objectId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization':  usertoken
        },
        body: JSON.stringify(theme)
    }).then(res => res.json());
};

export const createComment =async (commentData,usertoken)=>{
    let  response= await fetch(`${baseUrl}/comment`,{
        method: 'POST',
        headers: {
         
            'content-type': 'application/json',
            'X-Authorization': usertoken,
        },
       
        body:JSON.stringify({...commentData})
    })
     let result = await response.json()
    
     

     return result;
}


export  const getComment =(usertoken)=>{
    return fetch(`${baseUrl}/comment`,{
        method: 'GET',
        headers: {
         
            'content-type': 'application/json',
            'X-Authorization': usertoken,
            
        },
    
    })
    .then(res => res.json())
}
