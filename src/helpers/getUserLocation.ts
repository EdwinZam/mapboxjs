
export const getUserLocation = async(): Promise<[number, number]> =>{

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) =>{
                resolve([coords.longitude, coords.latitude])
            }, 
            (err) =>{
                alert('no se pudo obtener la geolocalización');
                console.log(err);
                reject();
            }
        )    
    })
}