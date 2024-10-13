import Image from "next/image";
import React from "react";

const Author = ({ name, image }: { name: string; image: string }) => {
    return (
        <div className='flex gap-4 items-center'>
            <Image
                className='w-8 h-8 rounded-full '
                src={image}
                alt='asl'
                width={100}
                height={100}
            />
            <p className='i italic font-bold font-sans'>{name}</p>
        </div>
    );
};

export default Author;
