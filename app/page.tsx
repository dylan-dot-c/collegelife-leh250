import Header from "@/components/Header";
import { getAllPosts } from "@/sanity/lib/getPosts";
import Image from "next/image";

export const revalidate = 60;

export default async function Home() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <div className='max-w-2xl m-auto'>
            <Header />

            <h2 className='text-2xl underline font-bold mb-4'>Blog Posts</h2>

            <div className='divide-slate-200 divide-y space-y-4'>
                {posts.map((post) => {
                    return (
                        <div
                            className='flex justify-between mt-2'
                            key={post._id}>
                            <a
                                className='block mb-2 hover:text-emerald-600 transition'
                                href={`/posts/${post.slug?.current}`}>
                                {post.title}
                            </a>
                            <div>
                                <Image
                                    className='rounded-xl'
                                    alt='Banner Image'
                                    src={post.image}
                                    width={100}
                                    height={50}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
