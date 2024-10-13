import { getPostBySlug } from "@/sanity/lib/getPosts";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Author from "@/components/Author";

export const revalidate = 1;

const Project = async ({ params }: { params: { slug: string } }) => {
    // Define PortableText components with proper types
    const PortableTextComponent: PortableTextComponents = {
        types: {
            image: ({
                value,
            }: {
                value: { asset: SanityImageSource; alt: string };
            }) => (
                <div className='my-4'>
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt}
                        className='w-full rounded-md max-h-[400px] object-cover'
                        width={800}
                        height={400} // Adjust height here to fit the image properly
                    />
                    <p className='text-right mt-2 italic text-blue-400'>
                        {value.alt}
                    </p>

                    <hr className='border border-gray-400 my-2 rounded-full' />
                </div>
            ),
        },
        block: {
            h1: ({ children }) => (
                <h1 className='text-3xl my-4 font-bold font-mono'>
                    {children}
                </h1>
            ),
            h2: ({ children }) => (
                <h2 className='text-2xl my-4 font-bold'>{children}</h2>
            ),
            normal: ({ children }) => (
                <p className='my-2 text-lg'>{children}</p>
            ),
        },
        list: {
            // Ordered list (<ol>)
            number: ({ children }) => (
                <ol className='list-decimal list-inside ml-4'>{children}</ol>
            ),
            // Unordered list (<ul>)
            bullet: ({ children }) => (
                <ul className='list-disc list-inside ml-4'>{children}</ul>
            ),
        },
        listItem: {
            // Customize the list item rendering (for both ordered and unordered lists)
            bullet: ({ children }) => <li className='mb-2'>{children}</li>,
            number: ({ children }) => <li className='mb-2'>{children}</li>,
        },
    };

    const project = await getPostBySlug(params.slug);

    // Ensure we handle possible undefined states properly
    if (!project || project.length === 0) {
        return <div>Project not found</div>;
    }

    return (
        <div className='max-w-3xl mx-auto mt-6 px-4'>
            <h1 className='capitalize mb-4 font-bold font-serif md:text-center text-3xl'>
                {project[0].title}
            </h1>
            <p>{project[0]._createdAt.split("T")[0]}</p>
            <Author name={project[0].name} image={project[0].author_image} />
            <PortableText
                value={project[0].content}
                components={PortableTextComponent}
            />
        </div>
    );
};

export default Project;
