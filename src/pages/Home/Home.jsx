import { useState } from "react"
import Banner from '../../Components/Header/Banner/Banner'
import HomeDonationCard from "../../Components/Donations/HomeDonationCard"
import { useLoaderData } from "react-router-dom"
const Home = () => {
  const data = useLoaderData()
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([])


      const handelSearch = (e) => {
        e.preventDefault()
        const filterData = data.filter((item) => item.category.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      setFilteredData(filterData)
      e.target.form[0].value = ""
      

      }
      const handleTextChange = (e) => {
        setSearchQuery(e.target.value)
      }
  return (
    <>
    <Banner handelSearch={handelSearch} handleTextChange={handleTextChange}></Banner>
  
    <div className="grid grid-cols-4 gap-6">
    {filteredData.length > 0 ? filteredData?.map(donation => <HomeDonationCard key={donation.id} donation={donation}></HomeDonationCard>) :
        data?.map(donation => <HomeDonationCard key={donation.id} donation={donation}></HomeDonationCard>)
    }
    </div>
    </>
  )
}

export default Home