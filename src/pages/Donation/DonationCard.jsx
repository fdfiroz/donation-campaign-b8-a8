import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, title, picture, category, category_bg, text_button_bg, card_bg, price } =
    donation;
  console.log(picture);
  return (
    <Link to={`/donations/${id}`}>
      <div
        className="flex rounded shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
        style={{ backgroundColor: category_bg }}
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-lg" src={picture} alt="" />
        </div>
        <div className="text-left p-4">
          <div
            className="  rounded inline-flex"
            style={{ backgroundColor: card_bg }}
          >
            <p
              className="px-2.5 py-1 text-sm font-medium"
              style={{ color: text_button_bg }}
            >
              {category}
            </p>
          </div>
          <p
            className=" text-xl font-semibold "
            style={{ color: text_button_bg }}
          >
            ${price.toFixed(2)}
          </p>
          <p
            className=" text-xl font-semibold "
            style={{ color: text_button_bg }}
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DonationCard;
