export interface Recipe {
    id?: number;
    name: string;
    instructions?: string[];
    ingredients?: string[];
    numberOfServings?: number;
    youtubeUrl?: string;
    imageUrl: string;
    rating: number;
}