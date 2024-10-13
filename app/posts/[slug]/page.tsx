import { getPostBySlug } from "@/sanity/lib/getPosts";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const revalidate = 10;

const Project = async ({ params }: { params: { slug: string } }) => {
    // Define PortableText components with proper types
    const PortableTextComponent: PortableTextComponents = {
        types: {
            image: ({ value }: { value: SanityImageSource }) => (
                <Image
                    src={urlFor(value).url()}
                    alt={"image"}
                    className='w-full rounded-md max-h-[400px] object-cover'
                    width={800}
                    height={400} // Adjust height here to fit the image properly
                />
            ),
        },
        block: {
            h1: ({ children }) => (
                <h1 className='text-3xl mb-4 font-bold font-mono'>
                    {children}
                </h1>
            ),
            h2: ({ children }) => (
                <h2 className='text-2xl mb-4 font-bold'>{children}</h2>
            ),
            normal: ({ children }) => (
                <p className='my-2 text-lg'>{children}</p>
            ),
        },
    };

    const project = await getPostBySlug(params.slug);

    // Ensure we handle possible undefined states properly
    if (!project || project.length === 0) {
        return <div>Project not found</div>;
    }

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
