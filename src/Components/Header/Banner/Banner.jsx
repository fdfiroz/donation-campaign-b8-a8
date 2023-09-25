

const Banner = ({handelSearch, handleTextChange }) => {
  return (
    <div className="container px-6 py-16 mx-auto text-center relative h-96">
    <div className="bg-[url('/resources/Banner.png')] bg-center bg-no-repeat bg-cover h-96 absolute inset-0 opacity-5"></div>
    <div className="max-w-lg mx-auto relative mt-4">
          <h1 className="text-3xl font-semibold text-gray-800lg:text-5xl">I Grow By Helping People In Need</h1>

            <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md  focus-within:border-red-400 focus-within:ring focus-within:ring-red-300  focus-within:ring-opacity-40">
                <form onClick={handelSearch} className="flex flex-col md:flex-row">
                    <input onChange={handleTextChange} type="text" placeholder="Search here...." className="flex-1 h-10 px-4 py-2 m-1 text-neutral-950 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0" />
                    <input type="submit" value="Search" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400"/>
                    
                </form>
            </div>
    </div>
</div>
  )
}

export default Banner