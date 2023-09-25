import { useEffect, useState } from "react"
import Donation from "./Donation"


const Donations = () => {
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
        data.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
    }
    </div>
   
    </>
    
  )
}

export default Donations