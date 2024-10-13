import { getPostBySlug } from "@/sanity/lib/getPosts";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const revalidate = 10;

const Project = async ({ params }: { params: { slug: string } }) => {
    const PortableTextComponent = {
        types: {
            image: ({ value }: { value: SanityImageSource }) => (
                <Image
                    src={urlFor(value).url()}
                    alt={"image"}
                    className='w-full rounded-md max-h-[400px] object-cover'
                    width={800}
                    height={15}
                    // height={1000}
                />
            ),
        },
        block: {
            h1: ({ children }: { children: React.ReactNode }) => (
                <h1 className='text-3xl mb-4 font-bold font-mono'>
                    {children}
                </h1>
            ),
            h2: ({ children }: { children: React.ReactNode }) => (
                <h2>{children}</h2>
            ),
            // Add more block styles (e.g., h3, blockquote, etc.) as needed
            normal: ({ children }: { children: React.ReactNode }) => (
                <p className='my-2'>{children}</p>
            ),
        },
    };
    const project = await getPostBySlug(params.slug);
    console.log(params.slug);
    console.log(project);
    // const post = project[0];
    return (
        <div className='max-w-3xl mx-auto mt-6 px-4'>
            <h1 className='capitalize mb-4 font-bold font-serif'>
                {project[0].title}
            </h1>
            <PortableText
                value={project[0].content}
                components={PortableTextComponent}
            />
        </div>
    );
};

export default Project;
