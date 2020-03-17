export const errorMesage = (errors) =>{
    return Object.keys(errors)[0] + ': ' + Object.values(errors)[0]
}

export const getHeaders = () => {
    return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
}
