export type IBook = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    cover_img: string;
    publicationYear: string;
    reviews: string[];
    admin: string;
};

export interface IBooks {
    admin: string;
    author: string;
    cover_img: string;
    createdAt: string;
    genre: string;
    id: string;
    publicationYear: string;
    reviews: string[];
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}
