const errorMesage = (errors) =>{
    return Object.keys(errors)[0] + ': ' + Object.values(errors)[0]
}

export default errorMesage;