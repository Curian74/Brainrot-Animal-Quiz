const Home = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl w-[800px] h-[500px] p-10">
        <div className="flex-col">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Welcome To:</h2>
          </div>

          <div>
            <h1 className="uppercase text-3xl text-purple-500 font-bold text-center">Italian Brainrot animals quiz</h1>
          </div>

          <div className="flex justify-center mt-36">
            <button className="bg-[#0969da] rounded-lg py-3 px-8 hover:bg-blue-800 transition cursor-pointer text-white font-semibold">Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
