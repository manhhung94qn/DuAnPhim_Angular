export class Film {
    constructor (_code,_name = "Phime", _movieDate ="Chưa có chi tiết phim", _avatar = "./assets/images/avatar_phim/1.jpg",_longTime = 0, _countLike, _price = 0){
        this.codeFilm = _code;
        this.name =_name;
        this.movieDate = _movieDate;
        this.avatar =_avatar;
        this.longTime = _longTime;
        this.price = _price
    }
    id: number;
    codeFilm: string;
    name: string;
    movieDate: string;
    avatar: string;
    longTime: number;
    countLike: number;
    price: number;
}
export class FilmsDetail {
    constructor(){

    }
    id: number;
    codeFilm: string;
    name: number;
    description: string;
    countLike: number;
    longTime: number;
    price: number;
    avatar: number;
    moreImage: string[];
}