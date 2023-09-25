import { useEffect, useState } from "react"
import HomeDonationCard from "./HomeDonationCard"


const HomeDonation = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setData(data))
        }, [])
  return (
    <>
    <div className="grid grid-cols-4 gap-6">
    {
        data.map(donation => <HomeDonationCard key={donation.id} donation={donation}></HomeDonationCard>)
    }
    </div>
   
    </>
    
  )
}

export default HomeDonation