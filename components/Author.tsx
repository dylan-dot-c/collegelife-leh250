import Image from "next/image";
import { inter } from "@/utils/font";
const Author = ({ name, image }: { name: string; image: string }) => {
    return (
        <div className='flex gap-2 items-center'>
            <Image
                className='w-8 h-8 rounded-full '
                src={image}
                alt='asl'
                width={100}
                height={100}
            />
            <p className={`font-light text-gray-600 ${inter.className}`}>
                {name}
            </p>
        </div>
    );
};

export default Author;
