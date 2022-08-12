import Scrollspy from "react-scrollspy";

export const Nav = () => {

    const Menu = ({ className }) => {
        return (
            <Scrollspy items={['intro', 'project', 'exp', 'contact']} currentClassName="bg-primary" className={""+className}>
                <span className="p-3 rounded-md"><a href="#intro">About</a></span>
                <span className="p-3 rounded-md"><a href="#project">Project</a></span>
                <span className="p-3 rounded-md"><a href="#exp">Experiences</a></span>
                <span className="p-3 rounded-md"><a href="#contact">Contact</a></span>
            </Scrollspy>
        );
    }

    return (
        <div className="navbar bg-transparent fixed top-0 z-50   border-none">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Menu className={"menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"} />
                </div>
                <a className="btn btn-ghost normal-case text-xl">PORTFOLIO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <Menu className={"menu menu-horizontal p-0 space-x-3"} />
            </div>
            <div className="navbar-end">
                <a className="btn border-none bg-gradient-to-r from-sky-500 to-green-500" href="mailto::arunacharya255@gmail.com">Contact me</a>
            </div>
        </div>
    );
}