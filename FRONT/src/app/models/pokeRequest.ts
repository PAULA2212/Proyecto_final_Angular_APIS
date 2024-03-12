// Definición del tipo pokeRequest
export type pokeRequest = {
    // Propiedad que representa la cantidad total de resultados (debe ser de tipo number)
    count: number;

    // Propiedad que representa la URL para obtener los siguientes resultados (debe ser de tipo string)
    next: string;

    // Propiedad que representa la URL para obtener los resultados anteriores (puede ser de cualquier tipo)
    previous: any;

    // Propiedad que representa la lista de resultados, donde cada resultado es un objeto
    results: {}[];
};