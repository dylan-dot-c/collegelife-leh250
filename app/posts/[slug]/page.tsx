import { getPostBySlug } from "@/sanity/lib/getPosts";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Author from "@/components/Author";
import { inter } from "@/utils/font";

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
                <h1
                    className={`text-3xl my-4 font-bold font-mono ${inter.className}`}>
                    {children}
                </h1>
            ),
            h2: ({ children }) => (
                <h2 className={`text-2xl my-4 font-bold ${inter.className}`}>
                    {children}
                </h2>
            ),
            normal: ({ children }) => (
                <p className='my-2 text-lg'>{children}</p>
            ),
            blockquote: ({ children }) => (
                <blockquote
                    className={`border-l-4 border-gray-500 pl-4 ${inter.className} my-4 dark:bg-gray-900 bg-transparent py-10 px-6 pl-10 text-black dark:text-gray-300`}>
                    {children}
                </blockquote>
            ),
        },
        list: {
            // Ordered list (<ol>)
            number: ({ children }) => (
                <ol className='list-decimal list-inside ml-4 my-4'>
                    {children}
                </ol>
            ),
            // Unordered list (<ul>)
            bullet: ({ children }) => (
                <ul className='list-disc list-inside ml-4 mb-4'>{children}</ul>
            ),
        },
        listItem: {
            // Customize the list item rendering (for both ordered and unordered lists)
            bullet: ({ children }) => (
                <li className={`mb-2 text-lg `}>{children}</li>
            ),
            number: ({ children }) => (
                <li className={`mb-2 text-lg `}>{children}</li>
            ),
        },
        marks: {
            link: ({ value, children }) => {
                // Read https://css-tricks.com/use-target_blank/
                const { blank, href } = value;
                const className = "underline text-blue-400 ";
                return blank ? (
                    <a
                        href={href}
                        target='_blank'
                        className={className}
                        rel='noopener'>
                        {children}
                    </a>
                ) : (
                    <a href={href} className={className}>
                        {children}
                    </a>
                );
            },
        },
    };

    const project = await getPostBySlug(params.slug);

    // Ensure we handle possible undefined states properly
    if (!project || project.length === 0) {
        return <div>Project not found</div>;
    }

    return (
        <div className='max-w-3xl mx-auto mt-6 px-4 my-6'>
            <h1
                className={`capitalize mb-4 font-bold md:text-center text-3xl ${inter.className}`}>
                {project[0].title}
            </h1>
            <Image
                src={project[0].image}
                alt={project[0].mainImage?.alt || "image showcasing smth"}
                className='w-full rounded-md max-h-[400px] object-cover my-4'
                width={800}
                height={400}
            />
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
