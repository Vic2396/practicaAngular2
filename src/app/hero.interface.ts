export interface Comic {
    name : string;
}

export interface Hero {
    id: number;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    comics: {
        items: Comic[];
    }
}

export interface MarvelApi {
    data: {
        total: number;
        results: Hero[];
    };
}
