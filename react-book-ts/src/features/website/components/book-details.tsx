import { useParams } from "react-router-dom";
import useBookById from "../hooks/useBookById";
import useRecommendationsById from "../hooks/useRecomendations";

const BookDetails = () => {

    const { id } = useParams();

    const { book } = useBookById({ id })

    const { recommendations } = useRecommendationsById({ id })

    console.log(book)

    return (
        <section>
            <div className="book-details mx-auto max-w-5xl ">
                <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img
                            src={book?.image || "https://via.placeholder.com/150"} // Usar imagen por defecto si no hay imagen
                            alt={book?.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {book?.title}
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {book?.description}
                        </p>
                    </div>
                </div>

                <div className="recommendations-container mt-8">
                    <h3>Recommended Books</h3>
                    <div className="recommendations-list grid grid-cols-3 gap-6">
                        {recommendations?.map((recommendedBook, index) => (
                            <div key={index} className="recommended-book border p-4 rounded-lg shadow-md">
                                <h4 className="recommended-title font-semibold">{recommendedBook.title}</h4>
                                <div className="recommended-image mt-2">
                                    <img
                                        src={recommendedBook.image || "https://via.placeholder.com/100"} // Imagen por defecto
                                        alt={`Cover of ${recommendedBook.title}`}
                                        width="100"
                                        height="150"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="recommended-description mt-2 text-gray-700 text-sm">{recommendedBook.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetails; 