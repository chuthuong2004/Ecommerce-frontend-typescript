import { IBrand } from './brand';

export enum EGenderType {
    Woman = 'women',
    Man = 'man',
    Kid = 'kid',
    Unisex = 'unisex',
}
export interface ISize {
    size: string | number;
    quantity: number;
    _id: string;
}
export interface IColor {
    images: string[];
    imageSmall: string;
    imageMedium: string;
    colorName: string;
    sizes: ISize[];
    _id: string;
}
export interface IProduct {
    name: string;
    description: string;
    price: number;
    discount: number;
    category: string;
    likeCount: number;
    quantitySold: number;
    favorites: string[];
    rate: number;
    keywords: string[];
    reviews: string[];
    colors: IColor[];
    brand: Omit<IBrand, 'products'>;
    gender: string;
    preserveInformation?: string;
    deliveryReturnPolicy?: string;
    slug: string;
    createdAt: string;
    deleted: boolean;
    updatedAt: string;
    _id: string;
    __v: number;
    deletedAt?: string;
}
