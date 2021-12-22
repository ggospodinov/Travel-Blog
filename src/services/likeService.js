import * as request from './requester';
const baseUrl = 'https://stronglove.backendless.app/api/data';


export const like = (userId, themeId) => request.post(`${baseUrl}/likes`, {userId, themeId});

export const getThemeLikes=(themeId)=>{
    
    return request.get(`${baseUrl}/likes`).then(res => res.map(x => x.userId))

        
    }
