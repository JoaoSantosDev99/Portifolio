const GaleryItem = ({ title, rust, solidity, game, landingpage, img }) => {
  return (
    <li className="w-80 h-[350px] bg-gray-200 rounded-xl">
      <div className="w-full flex justify-center relative h-full hover:bg-transparent cursor-pointer transition-all ease-in-out duration-700 bg-[#0000009b] rounded-xl border-[3px] border-black">
        <h2 className="font-bold text-2xl mt-3">title</h2>

        <ul className="absolute right-3 bottom-3 flex gap-1">
          {rust && (
            <li className="px-2 py-1 w-fit rounded-lg bg-white">Rust</li>
          )}
          {solidity && (
            <li className="px-2 py-1 w-fit rounded-lg bg-white">Solidity</li>
          )}
          {game && (
            <li className="px-2 py-1 w-fit rounded-lg bg-white">Game</li>
          )}
          {landingpage && (
            <li className="px-2 py-1 w-fit rounded-lg bg-white">landingpage</li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default GaleryItem;
