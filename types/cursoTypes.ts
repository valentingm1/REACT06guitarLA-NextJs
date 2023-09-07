export type Curso = {
    
    id?: number, // Fix "id?" later
    attributes: {
      titulo: string,
      createdAt?: string,
      updatedAt?: string,
      publishedAt?: string,
      contenido: string,
      imagen: any
    }
}