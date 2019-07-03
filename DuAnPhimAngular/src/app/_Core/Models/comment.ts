export class FilmCommentP {
    id: number;
    codeFilm: string;
    userName: string;
    content: string;
    timeCreate: string;
    FilmCommentC: FilmCommentC[];
}

export class FilmCommentC {
    userName: string;
    content: string;
    timeCreate: string;
}