export async function getCurso(){
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    const {data: curso} = await respuesta.json();
    return {data:curso}
 }

 