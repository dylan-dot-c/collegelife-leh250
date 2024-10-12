import ThemeButton from "./ThemeButton";

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-2xl m-auto p-4 md:px-0 items-center'>
            <a href='/'>College Life</a>
            <div>
                <ThemeButton />
            </div>
        </div>
    );
};

export default Navbar;
