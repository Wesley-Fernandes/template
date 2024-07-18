import z from "zod";

export interface Product{
    name: string;
    description: string;
    image: string;
    value: number;
}

export const ProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().url(),
    value: z.number()
})