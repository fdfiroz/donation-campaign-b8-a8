import { useEffect, useState } from "react"
import Banner from '../../Components/Header/Banner/Banner'
import HomeDonationCard from "../../Components/Donations/HomeDonationCard"
const Home = () => {
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
      fetch('/data.json')
      .then(res => res.json())
      .then(data => setData(data))
      }, [])

      const handelSearch = (e) => {
        e.preventDefault()
        const filterData = data.filter((item) => item.category.toLowerCase().includes(searchQuery.toLowerCase())
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