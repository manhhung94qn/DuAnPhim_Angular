import { TableShow } from './TableShow';

export class Film {
    constructor (_code,_name = "Phime", _movieDate ="Chưa có chi tiết phim", _avatar = "./assets/images/avatar_phim/1.jpg",_longTime = 0, _countLike, _price = 0){
        this.codeFilm = _code;
        this.name =_name;
        this.movieDate = _movieDate;
        this.avatar =_avatar;
        this.longTime = _longTime;
    }
    id: number;
    codeFilm: string;
    name: string;
    movieDate: string;
    avatar: string;
    longTime: number;
    countLike: number;
}
export class FilmsDetail {
    constructor(){

    }
    id: number;
    name: string;
    trailer: string;
    avatar: number;
    description: string;
    movieDate: string; 
    rate: number;   
    countRate: number;
    longTime: number;
    moreImage: string[];
    tableShows: TableShow[];
}