export interface Hero {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface MarvelApi {
    data: {
        results: Hero[];
    };
}
