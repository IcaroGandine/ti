export class Game {
    name!: string;
    description!:  string;
    resume!: string;
    photos!: Photo[];
    videos!: Video[];
    rating!: number;
    mediumPrice!: number;
    studio!: Studio;
    productor!: string;
    totalVotes!: number;
    company!: Company;
    launchDate!: string;
    releaseYear!: number;
    highlight!: boolean;
    genres!: string[];
    platforms!: string[];
    tags!: string[];

}

export class Photo {
    name!: string;
    url!: string;
}

export class Video {
    type!: string;
    url!: string;
}
  
export class Studio {
    name!: string;
    locationCity!: string;
    locationCountry!: string;
}

export class Company {
    name!: string;
    locationCity!: string;
    locationCountry!: string;
}