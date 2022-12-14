import { StringLiteral } from "typescript";

interface SanityBody {
    _createAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}


interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}


export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}