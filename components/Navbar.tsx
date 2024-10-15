import ThemeButton from "./ThemeButton";

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-2xl m-auto p-4 md:px-0 items-center'>
            <p>
                <a
                    href='/'
                    className='text-emerald-500 underline font-bold text-xl hover:text-blue-400 transition'>
                    College Life Blogs
                </a>
            </p>
            <div>
                <ThemeButton />
            </div>
        </div>
    );
};

export default Navbar;
