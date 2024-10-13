import Author from "@/components/Author";
import Header from "@/components/Header";
import { getAllPosts } from "@/sanity/lib/getPosts";
import Image from "next/image";

export const revalidate = 10;

export default async function Home() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <div className='max-w-2xl m-auto p-4'>
            <Header />

            <h2 className='text-2xl underline font-bold mb-4'>Blog Posts</h2>

            <div className='divide-slate-200 divide-y space-y-4'>
                {posts.map((post) => {
                    return (
                        <a
                            href={`/posts/${post.slug?.current}`}
                            title={`Read post: ${post.title}`}
                            className='flex justify-between mt-2 p-4 group'
                            key={post._id}>
                            <div className='md:max-w-md md:w-auto w-2/3 space-y-3'>
                                <p className='group-hover:text-emerald-600 block transition text-xl font-bold'>
                                    {post.title}
                                </p>
                                <p className='line-clamp-3 md:line-clamp-none'>
                                    {post.description}
                                </p>
                                <Author
                                    name={post.name}
                                    image={post.author_image}
                                />
                            </div>
                            <div>
                                <Image
                                    className='rounded-xl w-full h-20 object-contain'
                                    alt='Banner Image'
                                    src={post.image}
                                    width={100}
                                    height={50}
                                />
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
