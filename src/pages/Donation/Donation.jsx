import React, { useEffect, useState } from 'react'
import DonationCard from './DonationCard';

const Donation = () => {
  const [donatedItems, setDonatedItems] = useState([]);
  const [noFound, setNoDataFound] = useState(false);
  const [isShow,setIsShow] = useState(false)


useEffect(() => {
  const donatedItems = JSON.parse(localStorage.getItem("donated"));
    if(donatedItems){
      setDonatedItems(donatedItems);

    }
    else{
      setNoDataFound("No Data Found")
    }
}, []);
  return (
    <div className='container mx-auto '>
      {noFound ?( 
      <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ): (
        <div className='grid grid-cols-2 gap-6 items-center justify-around'>
          {isShow ? donatedItems?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>) :
        donatedItems.slice(0,4)?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
        </div>)

      }
      {donatedItems.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="my-6 px-7 py-3 bg-green-600 rounded text-center text-white text-base font-semibold mx-auto">
            {isShow ? "See Less" : "See All"}
          </button>}
      
      
    </div>
  )
}

export default Donation