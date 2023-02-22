import { useRouter } from "next/router";
import Image from "next/image";
import back from "../../assets/arrowdown.png";
import code from "../../assets/code.png";
import demo from "../../assets/demo.png";
const Project = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-start bg-[#1e1e1e]">
      <header className="w-full flex justify-center">
        <div className="bg-[#414141] max-w-screen-xl w-full h-60 flex justify-center relative">
          <div className="gap-2 flex flex-col w-fit absolute justify-center -bottom-16 items-center">
            <div className="text-3xl bg-white font-bold p-2 rounded-xl">
              Projects name goes here
            </div>
            <div className="flex gap-2">
              <div className="text-sm py-1 px-3 font-bold bg-orange-400 rounded-lg">
                Rust
              </div>
              {/* <div className="text-sm py-1 px-3 font-bold bg-pink-400 rounded-lg">
                Landing page
              </div>
              <div className="text-sm py-1 px-3 font-bold bg-pink-400 rounded-lg">
                Game
              </div>
              <div className="text-sm py-1 px-3 font-bold bg-pink-400 rounded-lg">
                Solidity
              </div>
              <div className="text-sm py-1 px-3 font-bold bg-pink-400 rounded-lg">
                javascript
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <section className="flex mt-32 w-full justify-center gap-10">
        <div className="flex flex-col">
          <div className="p-8 bg-white max-w-xl font-bold rounded-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            nam omnis praesentium! Tenetur illum harum totam, molestias
            blanditiis quos. Porro deleniti vitae illum! Hic accusamus itaque
            nihil. Dolorum, unde mollitia. Lorem ipsum dolor sit amet, esentium!
            Tenetur illum praesentium! Tenetur illum harum totam, molestias
            blanditiis quos. Porro deleniti vitae illum! Hic accusamus itaque
            nihil. Dolorum, unde mollitia. Lorem ipsum dolor sit amet, esentium!
            Tenetur illum
          </div>
          <div className="flex gap-2 mt-8">
            <button className="px-3 py-3 bg-white flex items-center gap-2 text-xl rounded-xl font-bold">
              <Image src={code} alt="code" className="w-6 h-6" /> Code
            </button>
            <button className="px-3 py-3 bg-white flex items-center gap-2 text-xl rounded-xl font-bold">
              <Image src={demo} alt="code" className="w-6 h-6" /> Demo
            </button>
          </div>
        </div>

        <div className="bg-white p-8 flex flex-col rounded-xl min-w-[320px]">
          <h2 className="text-2xl font-bold mb-5">Tecnologies Used</h2>
          <ul className="font-semibold">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </section>
      <button
        onClick={() => router.back()}
        className="uppercase fixed right-14 bottom-14 border-2 py-2 px-3 bg-[#000000c9] text-white rounded-xl text-xl font-bold flex items-center gap-2"
      >
        <Image src={back} className="w-5 rotate-90" />
        back
      </button>
    </div>
  );
};

export default Project;
