class ChildComment {
    ID: number;
    Username: string;
    Content: string;
}
export class Comment {
    ID: number;
    CodeFilm: number;
    Username: string;
    TimeCreate: string;
    Content: string;
    ChildComment: ChildComment[]
}