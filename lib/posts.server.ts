
export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const {data: posts} = await respuesta.json();
    return {data:posts}
 }

 export async function getPost(url: string){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json()

    return resultado

}