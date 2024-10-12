import Header from "@/components/Header";
import { getAllPosts } from "@/sanity/lib/getPosts";

export default async function Home() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <div className='max-w-2xl m-auto'>
            <Header />
            <h1 className='text-lg text-center'>Dylan College Life Blog</h1>

            <ul>
                <li>Sanity</li>
                <li>NextJS</li>
                <li>TailwindCSS</li>
            </ul>

            <div>
                {posts.map((post) => {
                    return (
                        <a key={post._id} href={`/posts/${post.slug?.current}`}>
                            {post.title}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
