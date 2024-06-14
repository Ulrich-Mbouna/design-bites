export interface IFont {
    id: number;
    slug: string;
    title: {
        isBr: boolean;
        text: string;
        textAlt: string
    },
    description: string;
    articles: IArticle[]
}

export interface IArticle {
    title: string;
    slug: string;
    srcset: string;
    link: string;
    description: string;
    image: string;
}
