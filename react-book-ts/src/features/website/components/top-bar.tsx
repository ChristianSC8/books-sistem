import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <nav className="w-full flex justify-between py-1">
            <div>
                Language
            </div>
            <div className="flex items-center gap-x-3">
                <Link to="/" className="text-[#4D99DE] cursor-pointer font-medium">Sign In</Link>
                <div className="w-[5px] h-[5px] rounded-full bg-slate-400" />
                <Link to="/" className="text-[#303030] cursor-pointer font-medium">Sing Up</Link>
            </div>
        </nav>
    )
}

export default TopBar;
