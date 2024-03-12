// Definición del tipo pokeModel
export type pokeModel = {
    // Propiedad que representa el nombre del Pokémon (debe ser de tipo string)
    name: string;

    // Propiedad que representa el ID del Pokémon (debe ser de tipo number)
    id: number;

    // Propiedad sprites que contiene información sobre la imagen del Pokémon
    sprites: {
        // Propiedad que representa la URL de la imagen frontal predeterminada del Pokémon
        front_default: string;
    };

    // Propiedad types que contiene información sobre los tipos del Pokémon
    types: {
        // Propiedad que representa la posición del tipo en la lista
        slot: number;

        // Propiedad type que contiene información sobre el tipo del Pokémon
        type: {
            // Propiedad que representa el nombre del tipo (debe ser de tipo string)
            name: string;

            // Propiedad que representa la URL del tipo (debe ser de tipo string)
            url: string;
        };
    }[];
};