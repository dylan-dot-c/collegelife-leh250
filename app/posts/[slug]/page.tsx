import { getPostBySlug } from "@/sanity/lib/getPosts";
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";

export const revalidate = 60;

const Project = async ({ params }: { params: { slug: string } }) => {
    const project = await getPostBySlug(params.slug);
    console.log(params.slug);
    // console.log(project);
    // const post = project[0];
    return (
        <div className='max-w-3xl mx-auto mt-20'>
            <p>
                {params.slug} {project[0].title}
            </p>
            {/* <PortableText value={project[0].body}/> */}
        </div>
    );
};

export default Project;
