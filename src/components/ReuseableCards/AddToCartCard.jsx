import { LiaStarSolid } from "react-icons/lia";

const AddToCartCard = ({src, title, author}) => {
    const rating = 5;
  return (
    <div className="text-left bg-white shadow-lg shadow-gray max-w-[350px] min-w-[180px] pb-4">
        <img src={src} alt="Courses" className="w-full"/>
        <div className="bg-white px-4 py-3 ">
            <div>
                <p className="font-semibold">{title}</p>
                <span className="text-xs">{author}</span>
            </div>
            <div>
                {(rating) ?
                    Array(Math.round(rating))
                        .fill()
                        .map((_, i) => (
                            <span key={i}>
                                <LiaStarSolid className="text-goldYellow inline"/>
                            </span>
                )) : ""}
            </div>
        </div>
    </div>
  )
}

export default AddToCartCard