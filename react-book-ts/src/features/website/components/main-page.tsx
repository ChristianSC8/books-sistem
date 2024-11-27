import Hero from "./hero";
import MainBooksScreen from "./main-books-screen";

const MainPage = () => {
    return (
        <>
            <div className="border border-slate-200 h-[calc(100vh-210px)] mt-4">
                <div className="mx-auto max-w-5xl ">
                    <Hero />
                </div>
            </div>
            <div className="relative w-full mx-auto max-w-5xl">
                <div className="absolute -top-20 bg-[#F6F6F6] w-full min-h-[1000px] rounded px-8 py-4">
                    <MainBooksScreen />
                </div>
            </div>
        </>
    )
}
export default MainPage;