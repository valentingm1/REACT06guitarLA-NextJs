export type Guitarra = {
    
    id?: number, // Fix "id?" later
    attributes: {
      nombre: string,
      createdAt?: string,
      updatedAt?: string,
      publishedAt?: string,
      descripcion?: string
      precio: number,
      url?: string,
      imagen: any
    }
    cantidad: number
}
export type Guitarras ={
    guitarras: Guitarra[]

}
