const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 object-cover h-full w-full" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-base font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React Js</p>
        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">More info</p>
      </div>
    </div>
  );
};

export default ProjectItem;