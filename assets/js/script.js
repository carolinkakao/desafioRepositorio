/*Peticion*/

const request =async () =>{
    const baseUrl="https://api.github.com/users";
    try{
    const peticion= await fetch(baseUrl);
    const peticionJson= await peticion.json();
    console.log(peticionJson);
    }catch(error){
        console.log(error);
    }


}
request();

const getUser=async (id) =>{

    const url =​​`${baseUrl}/users/${id}`;
    return request(url);
    }
    


    
    
    
  /*  const getRepo=async () =>{}*/
    