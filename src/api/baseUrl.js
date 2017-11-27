/**
 * Created by dhazra on 11/26/2017.
 */
const getBaseUrl = ()=>{
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3300/' : '/';
};

export default getBaseUrl;