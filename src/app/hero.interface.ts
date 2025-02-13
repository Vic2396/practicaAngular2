export interface Hero {
    id: number;
    name: string;
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
