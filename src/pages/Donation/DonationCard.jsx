import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, title, picture, category, category_bg, text_button_bg, card_bg, price } =
    donation;
  console.log(picture);
  return (
    
      <div
        className="flex items-center rounded md:w-5/6 md:mx-auto lg:w-10/12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
        style={{ backgroundColor: category_bg }}
      >
        <div className="relative w-52 h-48 overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-lg w-fit h-full " src={picture} alt="" />
        </div>
        <div className=" text-left p-4">
          <div
            className="rounded inline-flex"
            style={{ backgroundColor: card_bg }}
          >
            <p
              className="md:px-2.5 md:py-1 py-1 px-2  md:text-sm font-medium"
              style={{ color: text_button_bg }}
            >
              {category}
            </p>
          </div>
          <p
            className="text-base lg:text-xl font-semibold "
            style={{ color: text_button_bg }}
          >
            ${price.toFixed(2)}
          </p>
          <p
            className=" text-base lg:text-xl text-neutral-950 font-semibold">
            {title}
          </p>
          <Link to={`/donations/${id}`}>
            <button  style={{backgroundColor:text_button_bg}} className="text-base px-2 py-1 md:px-4 md:py-2 text-white rounded justify-center items-center gap-2.5 inline-fle">View Details</button>
            </Link>
        </div>
      </div>

  );
};

export default DonationCard;
