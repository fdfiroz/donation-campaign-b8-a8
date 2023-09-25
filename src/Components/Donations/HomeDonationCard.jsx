import { Link } from "react-router-dom";

const HomeDonationCard = ({donation}) => {
    
    const {id, title, picture, category, category_bg, text_button_bg, card_bg} = donation;
  return (
        <Link to={`/donations/${id}`}>
            <div
        className="max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] " style={{backgroundColor:category_bg}}>
        <div className="w-full h-48 relative overflow-hidden bg-cover bg-no-repeat">
            <img
            className="w-80 rounded-t-lg"
            src={picture}
            alt="" />
        </div>
        <div className="text-left p-4">
        <div className="  rounded inline-flex" style={{backgroundColor:card_bg}}>
            <div className="px-2.5 py-1 text-sm font-medium" style={{color:text_button_bg}}>{category}</div>
        </div>
        <p className=" text-xl font-semibold "style={{color:text_button_bg}}>
            {title}
            </p>
        </div>
        </div>
        </Link>

  )
}

export default HomeDonationCard