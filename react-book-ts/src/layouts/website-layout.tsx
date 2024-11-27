import TopBar from "../features/website/components/top-bar";
import WebsiteHeader from "../features/website/components/website-header";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
    return (
        <main className="w-full">
            <div className="mx-auto max-w-5xl  py-[2px]">
                <TopBar />
            </div>
            <div className="w-full bg-slate-100 h-[1px]"></div>
            <div className="mx-auto max-w-5xl ">
                <WebsiteHeader />
            </div>
            <section>
                <Outlet />
            </section>
        </main>
    )
}

export default WebsiteLayout;