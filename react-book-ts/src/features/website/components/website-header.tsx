import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import BagIcon from "@/components/icons/bag-icon";
import HeadsetIcon from "@/components/icons/headset-icon";

const WebsiteHeader = () => {
    return (
        <header className="w-full flex items-center justify-between gap-8 mt-4">
            <Link to="/">
                <img
                    className="w-36"
                    src={logo}
                    alt="Logo"
                />
            </Link>
            <ul className="flex gap-x-6">
                <li className="text-[#303030] text-lg hover:text-[#4D99DE] cursor-pointer font-normal">
                    <Link to="/">Store</Link>
                </li>
                <li className="text-[#303030] text-lg hover:text-[#4D99DE] cursor-pointer font-normal">
                    <Link to="/">Help</Link>
                </li>
                <li className="text-[#303030] text-lg hover:text-[#4D99DE] cursor-pointer font-normal">
                    <Link to="/">Discounts</Link>
                </li>
                <li className="text-[#303030] text-lg hover:text-[#4D99DE] cursor-pointer font-normal">
                    <Link to="/">Shipping</Link>
                </li>
            </ul>
            <div className="flex items-center gap-x-4">
                <div className="flex items-center">
                    <button
                        className="w-9 h-9 rounded-full border border-[#EBEBEB] flex items-center justify-center "
                    >
                        <HeadsetIcon className="size-5" />
                    </button>
                    <div className="">
                        <div className="ml-2 flex flex-col">
                            <div className="leading-snug text-sm text-gray-900 font-bold">
                                <span className="text-[#4D99DE]">8(800)</span>
                                555-22-00
                            </div>
                            <div className="leading-snug text-xs text-gray-600">
                                soporte@tienda.com
                            </div>
                        </div>

                    </div>
                </div>
                <div className="h-[30px] w-[1px] border border-[#EBEBEB]"/>
                <button
                    className="relative w-9 h-9 rounded-full border border-[#EBEBEB] flex items-center justify-center mr-1"
                >
                    <span className="w-4 h-4 absolute -top-[6px] -right-[3px] rounded-full bg-[#FFC235] text-white flex items-center justify-center text-[10px] font-bold">
                        8
                    </span>
                    <BagIcon className="size-4" />
                </button>
            </div>
        </header>
    )
}

export default WebsiteHeader;