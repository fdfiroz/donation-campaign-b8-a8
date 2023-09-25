import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetail = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = useLoaderData()
    const [donation, setDonation] = useState({});
  useEffect(() => {
    const findDonation = data?.find((donation) => donation.id === idInt);
    setDonation(findDonation);
  }, [id, data]);
  const handelDonation = () => {
    const addedDonatedArray = [];

    const donatedItems = JSON.parse(localStorage.getItem("donated"));

    if (!donatedItems) {
      addedDonatedArray.push(donation);
      localStorage.setItem("donated", JSON.stringify(addedDonatedArray));
      Swal.fire("Good job!", "Products added successfully!", "success");
    }    
    else {
      const isExits = donatedItems.find((donation) => donation.id === idInt);
      if (!isExits) {

        addedDonatedArray.push(...donatedItems, donation);
        localStorage.setItem("donated", JSON.stringify(addedDonatedArray));
        Swal.fire("Good job!", "Products added successfully!", "success");
       
      } else {
        Swal.fire("Error!", "No duplicate !", "error");
      }

  }
  }
    return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 text-left">
  <div className="mx-auto max-w-screen-md px-4 md:px-8">
    <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
      <img src={donation?.picture} loading="lazy" alt="" className="h-full w-full object-cover object-center" />
     
    <div className="z-10 absolute bottom-0 bg-neutral-950 opacity-60  w-full py-4">
      <button onClick={handelDonation} style={{backgroundColor:donation.text_button_bg}} className="py-4 px-6 ml-4 rounded text-white text-xl opacity-2000 font-semibold">Donate ${donation.price}</button>
      </div>
    </div>
    
    <h2 className="mb-2 text-xl font-bold  text-neutral-950 sm:text-2xl md:mb-4">{donation.title}</h2>

    <p className="text-justify text-neutral-950 text-opacity-70 text-base font-normal  sm:text-lg">{donation.description}</p>
  </div>
</div>
  )
}

export default DonationDetail