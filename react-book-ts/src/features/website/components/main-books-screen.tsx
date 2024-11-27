import ChevronForwardIcon from "@/components/icons/chevron-forward-icon"
import GridIcon from "@/components/icons/grid-icon"
import HamburgerIcon from "@/components/icons/list-icon"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import useBooks from "../hooks/useBooks"
import { Link } from "react-router-dom"

const MainBooksScreen = () => {

    const { books } = useBooks()

    console.log(books)

    return (
        <section className=" w-full flex flex-row gap-x-8">
            <div className="border w-[250px] h-full">
                1
            </div>
            <div className="flex-1 h-full">
                <div className="flex gap-x-6">
                    <Input placeholder="Search books" />
                    <div className="flex gap-x-2">
                        <Button
                            className="p-0 w-[40px]"
                            variant="outline"
                            size="md"
                        >
                            <HamburgerIcon className="size-5" />
                        </Button>
                        <Button
                            className="p-0 w-[40px]"
                            variant="outline"
                            size="md"
                        >
                            <GridIcon className="size-5" />
                        </Button>
                    </div>
                </div>
                <div className="flex gap-6 justify-between mt-4">
                    <div className="mt-2">
                        <h2 className="text-sm font-semibold text-[#7C8783] mb-1">FILTERS</h2>
                        <div className="flex w-full gap-4">
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="h-[38px] w-24 outline-none rounded-none border border-[#E9EAE9] p-2 flex items-center justify-between bg-[#F2F2F2]">
                                        <span className="ttext-[15px] text-[#7E8885] font-medium">Raiting</span>
                                        <ChevronForwardIcon className="size-4 text-[#7E8885]" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-48 bg-white shadow-md rounded-none"
                                        align="start"
                                    >
                                        <DropdownMenuItem>All</DropdownMenuItem>
                                        <DropdownMenuItem>1 starts</DropdownMenuItem>
                                        <DropdownMenuItem>2 starts</DropdownMenuItem>
                                        <DropdownMenuItem>3 starts</DropdownMenuItem>
                                        <DropdownMenuItem>4 starts</DropdownMenuItem>
                                        <DropdownMenuItem>5 starts</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="w-36 h-[38px] outline-none rounded-none border border-[#E9EAE9] p-2 flex items-center justify-between bg-[#F2F2F2]">
                                        <span className="text-[15px] text-[#7E8885] font-medium">New Arrivals</span>
                                        <ChevronForwardIcon className="w-4 h-4 text-[#7E8885]" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48 bg-white shadow-md rounded-none" align="start">
                                        <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                                        <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                                        <DropdownMenuItem>Last 6 months</DropdownMenuItem>
                                        <DropdownMenuItem>This year</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="w-20 h-[38px] outline-none rounded-none border border-[#E9EAE9] p-2 flex items-center justify-between bg-[#F2F2F2]">
                                        <span className="text-[15px] text-[#7E8885] font-medium">Price</span>
                                        <ChevronForwardIcon className="w-4 h-4 text-[#7E8885]" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48 bg-white shadow-md rounded-none" align="start">
                                        <DropdownMenuItem>Under $10</DropdownMenuItem>
                                        <DropdownMenuItem>$10 - $20</DropdownMenuItem>
                                        <DropdownMenuItem>$20 - $50</DropdownMenuItem>
                                        <DropdownMenuItem>$50 - $100</DropdownMenuItem>
                                        <DropdownMenuItem>Over $100</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-sm font-semibold text-[#7C8783] mb-1">SHORT</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-36 h-[38px] outline-none rounded-none border border-[#E9EAE9] p-2 flex items-center justify-between bg-[#F2F2F2]">
                                <span className="text-[15px] text-[#7E8885] font-medium">Most Popular</span>
                                <ChevronForwardIcon className="w-4 h-4 text-md text-[#7E8885]" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-48 bg-white shadow-md rounded-none"
                                align="start"
                            >
                                <DropdownMenuItem>Best Sellers</DropdownMenuItem>
                                <DropdownMenuItem>Recommended</DropdownMenuItem>
                                <DropdownMenuItem>New Releases</DropdownMenuItem>
                                <DropdownMenuItem>Top Rated</DropdownMenuItem>
                                <DropdownMenuItem>Trending Now</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                {/* <div>
                    <div className="max-w-xs cursor-pointer bg-white shadow duration-150 hover:scale-100 hover:shadow-md">
                        <img className="w-full  object-cover object-center" src="https://images-us.bookshop.org/ingram/9780553536096.jpg?height=500&v=v2-8d67e17c42792438b81d67c3f5a95845" alt="product" />
                        <p className="my-4 pl-4 font-bold text-gray-500">Product Name</p>
                        <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">$399</p>
                    </div>
                </div> */}
                <div className="flex flex-wrap gap-6 mt-4">
                    {books.map((book) => (
                        <Link
                            key={book._id}
                            to={`/books/${book._id}`} 
                            className="max-w-xs cursor-pointer bg-white shadow-lg rounded-lg duration-150 hover:scale-105 hover:shadow-md"
                        >
                            <img
                                className="w-full h-64 object-cover object-center rounded-t-lg"
                                src={book.image} 
                                alt={book.title}
                            />
                            <div className="p-4">
                                <h1 className="font-bold text-gray-800 text-xl">{book.title}</h1>
                                <p className="mb-4 text-xl font-semibold text-gray-800">${book.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default MainBooksScreen