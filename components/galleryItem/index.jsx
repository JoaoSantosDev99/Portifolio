import Image from "next/image";
import Link from "next/link";
import test from "../../assets/gallery/kristimLandingpage.png";

const GaleryItem = ({
  title,
  javascript,
  rust,
  solidity,
  game,
  landingpage,
  img,
  path,
}) => {
  return (
    <Link href={`/projects/${path}`}>
      <li className="w-80 relative h-[350px] bg-gray-200 rounded-xl">
        <div className="w-full flex justify-center absolute h-full hover:bg-transparent cursor-pointer transition-all ease-in-out duration-700 bg-[#ed3c3c00] rounded-xl border-[3px] border-[#00000000]">
          <Image src={img} />
        </div>
        <div className="w-full flex justify-center absolute h-full hover:bg-transparent cursor-pointer transition-all ease-in-out duration-700 bg-[#00000073] rounded-xl border-[3px] border-[#646464]">
          {title ? (
            <h2 className="font-bold border-t-[3px] border-b-[3px] border-l-0 border-r-0 border-[#646464] w-full bg-[#f0f0f0]  px-2  absolute text-2xl mt-3">
              {title}
            </h2>
          ) : null}

          <ul className="absolute right-3 bottom-3 flex gap-1">
            {rust && (
              <li className="px-2 py-1 w-fit rounded-lg font-bold bg-[#f57220]">
                Rust
              </li>
            )}
            {solidity && (
              <li className="px-2 py-1 w-fit rounded-lg font-bold bg-[#4be845dd]">
                Solidity
              </li>
            )}
            {javascript && (
              <li className="px-2 py-1 w-fit rounded-lg font-bold bg-[#ffea00e3]">
                Javascript
              </li>
            )}
            {game && (
              <li className="px-2 py-1 w-fit rounded-lg font-bold bg-[#00d5ffe9]">
                Game
              </li>
            )}
            {landingpage && (
              <li className="px-2 py-1 w-fit text-black rounded-lg font-bold bg-[#ff00eee7]">
                Landing page
              </li>
            )}
          </ul>
        </div>
      </li>
    </Link>
  );
};

export default GaleryItem;
