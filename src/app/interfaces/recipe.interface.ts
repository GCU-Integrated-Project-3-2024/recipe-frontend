export interface Recipe {
    id: number;
    name: string;
    instructions?: string[];
    ingredients?: string[];
    youtubeUrl?: string;
    imageUrl: string;
    rating: number;
}