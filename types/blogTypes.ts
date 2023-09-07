export type Post = {
    
    id?: number, // Fix "id?" later
    attributes: {
      titulo: string,
      createdAt?: string,
      updatedAt?: string,
      publishedAt: string,
      contenido: string
      url: string,
      imagen: any
    }
}
export type Posts ={
    posts: Post[]

}