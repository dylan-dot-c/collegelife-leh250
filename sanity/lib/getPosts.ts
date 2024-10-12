import { groq } from "next-sanity";
import { client } from "./client";
import { Post } from "@/sanity/types";

const getAllPosts = (): Promise<Post[]> => {
    return client.fetch(
        groq`*[_type=='post']{_createdAt, author, mainImage, slug, title}`
    );
};

const getPostBySlug = (slug: string): Promise<Post[]> => {
    return client.fetch(groq`*[_type=='post'&&slug -> current==${slug}]`);
};

export { getAllPosts, getPostBySlug };
