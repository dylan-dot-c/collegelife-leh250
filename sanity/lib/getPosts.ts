import { groq } from "next-sanity";
import { client } from "./client";
import { Post } from "@/sanity/types";

const getAllPosts = (): Promise<Post[]> => {
    return client.fetch(
        groq`*[_type=='post']{_createdAt, description, author, mainImage, slug, title, _id, "image": mainImage.asset -> url, "name": author -> name, "author_image": author->image.asset->url} | order(_createdAt)`
    );
};

const getPostBySlug = (slug: string): Promise<Post[]> => {
    return client.fetch(
        groq`*[_type=='post'&&slug.current=="${slug}"]{
        content,
        title, _createdAt, "name": author -> name, "author_image": author->image.asset->url, "image": mainImage.asset -> url}`
    );
};

export { getAllPosts, getPostBySlug };
