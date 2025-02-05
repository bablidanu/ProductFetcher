const Home = () => {
  return (
    <>
      <div className=" text-white flex font-extrabold text-3xl justify-center">
        Happy Shopping!
      </div>
      <div className="flex justify-center text-white text-lg m-2">
        Navigate to Products to view the products
      </div>
      <div
        className="flex gap-10 m-10 justify-center flex-wrap
      "
      >
        <img
          src="/shopping1.webp"
          alt="Shopping Image 1"
          className="image h-auto max-w-screen-sm "
        />
        <img src="/shopping3.webp" alt="Shopping Image 2" className="image1" />
      </div>
    </>
  );
};

export default Home;
