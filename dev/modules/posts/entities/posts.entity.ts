export interface IPostFields {
    id: number;
    post_id: number;
    language_id: number;
    name: string;
    value: string;
    created_at?: string;
    updated_at?: string;
}

export interface IPost {
    id: number;
    slug: string;
    bannerImage: string;
    image: string;
    fields: Array<IPostFields>
}

export interface IPostsList {
    
}

export class Post implements IPost {
    public id: number;
    public slug: string;
    public bannerImage: string;
    public image: string;
    public fields: Array<IPostFields>;

    constructor(post?: IPost) {
        this.id = post.id;
        this.slug = post.slug;
        this.bannerImage = post.bannerImage;
        this.image = post.image;
        this.fields = post.fields;
    }
}