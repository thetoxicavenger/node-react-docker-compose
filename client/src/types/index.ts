export interface PostType {
    id: number;
    author: string;
    title: string;
    blurb: string;
    created_at: string;
    updated_at: string;
    img_url: string;
    body: string;
}

export type PostsListType = PostType[]