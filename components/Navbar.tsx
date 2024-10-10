import ThemeButton from "./ThemeButton";

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-lg m-auto'>
            <p>College Life</p>
            <div>
                <ThemeButton />
            </div>
        </div>
    );
};

export default Navbar;
