import { useRouter } from "next/router";
import Image from "next/image";
import back from "../../assets/arrowdown.png";
import GaleryItem from "../../components/galleryItem";
import kristim from "../../assets/gallery/kristimLandingpage.png";

const Projects = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center bg-[#0c0c0c]">
      <div className="max-h-[100vh] scrollbar-hide overflow-auto scroll py-10 max-w-screen-xl w-full flex flex-col items-center">
        <h2 className="text-[65px] font-extrabold text-white mb-10">Gallery</h2>
        {/* <div className="max-w-5xl w-full pl-5 mb-4 mt-10 flex justify-start items-center">
          <h3 className="font-bold text-xl mr-3">Filter by:</h3>
          <ul className="flex gap-1">
            <li className="px-2 py-1 rounded-lg bg-white">Rust</li>
            <li className="px-2 py-1 rounded-lg bg-white">Solidity</li>
            <li className="px-2 py-1 rounded-lg bg-white">Landing pages</li>
            <li className="px-2 py-1 rounded-lg bg-white">Web2</li>
          </ul>
        </div> */}

        {/* Projects */}
        <ul className="max-w-5xl flex justify-center p-4 flex-wrap gap-3 bg-[#1e1e1ec9] rounded-2xl">
          <GaleryItem
            landingpage
            path={"template"}
            title={"Kristim"}
            img={kristim}
          />
          <GaleryItem game solidity />
          <GaleryItem rust solidity />
          <GaleryItem rust />
          <GaleryItem landingpage />
          <GaleryItem rust game />
          <GaleryItem landingpage />
          <GaleryItem rust />
          <GaleryItem javascript />
          <GaleryItem landingpage />
          <GaleryItem rust game />
          <GaleryItem landingpage />
          <GaleryItem rust />
          <GaleryItem javascript />
        </ul>
        <button
          onClick={() => router.back()}
          className="uppercase fixed right-14 bottom-14 border-2 py-2 px-3 bg-[#000000c9] text-white rounded-xl text-xl font-bold flex items-center gap-2"
        >
          <Image src={back} className="w-5 rotate-90" />
          back
        </button>
      </div>
    </div>
  );
};

export default Projects;
