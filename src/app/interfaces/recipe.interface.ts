export interface Recipe {
    id: number;
    name: string;
    instructions?: string[];
    ingredients?: string[];
    imageUrl: string;
    rating: number;
}