const Navbar = () => {
  return (
    <div className="fixed top-0 z-100 flex justify-around text-2xl px-30 text-white bg-transparent my-5 gap-90 font-semibold w-full ">
      <span className="w-[50%] flex justify-baseline text-center cursor-pointer">
        <i className="fa-solid fa-laptop-code text-5xl"></i>
      </span>
      <div className="flex justify-end gap-20 text-center w-[50%]">
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">Skils</a>
        <a className="cursor-pointer">Projects</a>
      </div>
    </div>
  );
};

export default Navbar;
