import Image from "next/image";

// footer
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import codewars from "../assets/codewars.png";
import discord from "../assets/discord.png";

// dropdown
import drop from "../assets/arrowdown.png";

// tecnologies
import rust from "../assets/tecnologies/rust.png";
import docker from "../assets/tecnologies/docker.png";
import react from "../assets/tecnologies/react.png";
import javascript from "../assets/tecnologies/javascript.png";
import solidity from "../assets/tecnologies/solidity.png";
import git from "../assets/tecnologies/git.png";
import gitlab from "../assets/tecnologies/gitlab.png";
import githubtec from "../assets/tecnologies/github.png";
import figma from "../assets/tecnologies/figma.png";
import nextjs from "../assets/tecnologies/nextjs.png";
import clipboard from "../assets/tecnologies/details/blackdocker.png";
import merge from "../assets/tecnologies/details/merge.png";
import blockchain from "../assets/tecnologies/details/blockchain.png";
import bookmark from "../assets/tecnologies/details/bookmark.png";
import more from "../assets/tecnologies/details/more.png";
import soft from "../assets/tecnologies/details/soft.png";
import degree from "../assets/tecnologies/details/degree.png";
import book from "../assets/tecnologies/details/book.png";
import learn from "../assets/tecnologies/details/learn.png";
import projects from "../assets/tecnologies/details/collection.png";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMoreOpen, setMoreOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  return (
    <div className="text-white bg-[#121212]">
      <header className="bg-black w-full flex justify-center">
        <div className="max-w-screen-2xl w-full flex justify-center items-center py-5">
          <ul className="flex justify-center gap-20 text-2xl items-center">
            <a
              href="https://github.com/JoaoSantosDev99"
              target="_blank"
              rel="noreferrer"
            >
              <li>Github</li>
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-santos-616b89263/"
              target="_blank"
              rel="noreferrer"
            >
              <li>LinkedIn</li>
            </a>

            <li className="cursor-pointer">
              <div className="mx-8 w-20 h-20 bg-white rounded-full"></div>
            </li>
            <a
              href="https://www.youtube.com/watch?v=8LVkcXA6Wxc&list=RDMM&index=9"
              target="_blank"
              rel="noreferrer"
            >
              <li>Learning</li>
            </a>

            <a
              href="https://www.youtube.com/watch?v=8LVkcXA6Wxc&list=RDMM&index=9"
              target="_blank"
              rel="noreferrer"
            >
              <li>Certificates</li>
            </a>
          </ul>
        </div>
      </header>

      {/* tecnologies */}
      <section className="w-full flex justify-center">
        <div className="max-w-screen-2xl w-full flex flex-col gap-10 items-center mt-32">
          <h2 className="text-3xl font-bold">Tecnologies I work with</h2>
          <ul className="max-w-2xl flex justify-center p-8 flex-wrap gap-3 bg-[#343434c9] backdrop-blur-sm rounded-2xl">
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={rust} alt="rust" />
            </li>
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={solidity} alt="solidity" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={javascript} alt="javascript" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={docker} alt="docker" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={git} alt="git" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={gitlab} alt="gitlab" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={githubtec} alt="github" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={figma} alt="figma" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={react} alt="react" />
            </li>{" "}
            <li className="w-24 h-24 p-2 bg-white flex justify-center items-center rounded-xl">
              <Image src={nextjs} alt="nextjs" />
            </li>{" "}
          </ul>

          <p class="md:space-x-1 space-y-1 md:space-y-0 mb-4">
            <a
              onClick={() => setMoreOpen((prevState) => !prevState)}
              className="inline-block px-6 py-2.5 border-2 border-[#2c2c2c] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-[#272727] hover:shadow-lg focus:bg-[#010101] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#010101] active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <button className="flex justify-center items-center gap-5">
                <h3 className="text-xl">More</h3>
                <div
                  className={
                    isMoreOpen
                      ? "w-5 rotate-180 transition ease-in-out duration-500"
                      : "w-5 transition ease-in-out duration-500"
                  }
                >
                  <Image src={drop} />
                </div>
              </button>
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="flex flex-col pb-10 max-w-screen-lg text-xl p-6 rounded-lg bg-[#1f1f1f]">
              <div className="w-full border-2 border-[#383838] bg-[#212121c9] py-5 rounded-xl flex justify-center mb-5 mt-5">
                <p className="max-w-[90%] text-2xl text-center">
                  The following section is a more detailed description of my
                  stack and abilities. Feel free to check my certificates and
                  also the new subjects I'm learning right now.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {/* web3 */}
                <div className="border-2 border-[#191919] flex flex-col max-w-xs w-full bg-[#343434c9] rounded-xl px-6 py-5">
                  <div className="flex gap-2">
                    <Image src={blockchain} className="w-6 h-6" />
                    <h3 className="font-bold">Web3 tecnologies</h3>
                  </div>

                  <ul className="mt-7 ">
                    <li> - ERC token stardards</li>
                    <li> - DAOs</li>
                    <li> - NFTs</li>
                    <li> - Liquidity Pools</li>
                    <li> - Bridges</li>
                    <li> - IPFS</li>
                    <li> - Chainlink</li>
                    <li> - NEAR Smart Contracts</li>
                  </ul>
                </div>

                {/* version control */}
                <div className="border-2 border-[#191919] flex flex-col max-w-xs w-full bg-[#343434c9] rounded-xl px-6 py-5">
                  <div className="flex gap-2">
                    <Image src={merge} className="w-6 h-6" />
                    <h3 className="font-bold">Version Control ( Git )</h3>
                  </div>

                  <ul className="mt-7 ">
                    <li> - Semantic Versioning</li>
                    <li> - Github ( Advanced )</li>
                    <li> - Gitlabs ( Basic )</li>
                    <li> - Pull / Merge Request</li>
                    <li> - Issues</li>
                    <li> - Git Rebase</li>
                    <li> - Tags</li>
                  </ul>
                </div>

                {/* project menagement */}
                <div className="border-2 border-[#191919] flex flex-col max-w-xs w-full bg-[#343434c9] rounded-xl px-6 py-5">
                  <div className="flex gap-2">
                    <Image src={clipboard} className="w-6 h-6" />
                    <h3 className="font-bold">Project Development</h3>
                  </div>

                  <ul className="mt-7 ">
                    <li>- Kanban ( Trello )</li>
                    <li>- Wireframes ( Figma )</li>
                    <li>- Burn Up/Down ( Basic )</li>
                    <li>- CI/CD Pipelines ( Learning )</li>
                    <li>- Docker ( Basic )</li>
                    <li>- Agile Dev. ( Learning )</li>
                    <li>- TDD ( Learning )</li>
                  </ul>
                </div>

                {/* languages */}
                <div className="border-2 border-[#191919] flex flex-col max-w-xs w-full bg-[#343434c9] rounded-xl px-6 py-5">
                  <div className="flex gap-2">
                    <Image src={soft} className="w-6 h-6" />
                    <h3 className="font-bold">Soft Skills</h3>
                  </div>

                  <ul className="mt-7">
                    <li> - Punctuality</li>
                    <li> - Willingness to learn</li>
                    <li> - Adaptability</li>
                    <li> - Team work</li>
                    <li> - Clear communication</li>
                    <li> - Simplicity ( YAGNI )</li>
                    <li> - Research</li>
                  </ul>
                </div>

                {/* secondary stack */}
                <div className="border-2 border-[#191919] flex flex-col max-w-xs w-full bg-[#343434c9] rounded-xl px-6 py-5">
                  <div className="flex gap-2">
                    <Image src={bookmark} className="w-6 h-6" />
                    <h3 className="font-bold">Secondary Stack</h3>
                  </div>

                  <ul className="mt-7 ">
                    <li> - Javascript ( Advanced )</li>
                    <li> - Typescript ( Basic )</li>
                    <li> - React ( Advanced )</li>
                    <li> - Figma ( Intermediary )</li>
                    <li> - Tailwind CSS ( Advanced )</li>
                    <li> - NextJs ( Intermediary ) </li>
                    <li> - NodeJs ( Basic )</li>
                  </ul>
                </div>

                {/* redirect */}
                {/* <div className="flex flex-col max-w-xs w-full border-2 border-[#666666] bg-[#38383874] rounded-xl px-6 py-5">
                  <div className="flex gap-2"></div>

                  <ul className=" flex flex-col gap-2">
                    <li className="cursor-pointer flex gap-4 bg-[#1b1b1b] shadow-xl py-3 px-4 rounded-xl">
                      {" "}
                      <Image src={linkedin} className="w-6 h-6" /> LinkedIn
                    </li>
                    <li className="cursor-pointer flex gap-4 bg-[#1b1b1b] shadow-xl py-3 px-4 rounded-xl">
                      {" "}
                      <Image src={projects} className="w-6 h-6" /> My projects
                    </li>
                    <li className="cursor-pointer flex gap-4 bg-[#1b1b1b] shadow-xl py-3 px-4 rounded-xl">
                      {" "}
                      <Image src={learn} className="w-6 h-6" /> What I'm
                      Learning
                    </li>
                    <li className="cursor-pointer flex gap-4 bg-[#1b1b1b] shadow-xl py-3 px-4 rounded-xl">
                      <Image src={book} className="w-6 h-6" /> Books I've read
                    </li>

                    <li className="cursor-pointer flex gap-4 bg-[#1b1b1b] shadow-xl py-3 px-4 rounded-xl">
                      {" "}
                      <Image src={degree} className="w-6 h-6" /> Certificates
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="w-full flex justify-center">
        <div className="max-w-screen-4xl w-full flex flex-col items-center mt-32">
          <h2 className="text-5xl font-bold mb-10">Projects I've Done</h2>
          <ul className="max-w-5xl flex justify-center p-4 flex-wrap gap-3 bg-[#222222c9] rounded-2xl">
            <li className="w-80 h-[350px] bg-gray-200 rounded-xl"></li>
            <li className="w-80 h-[350px] bg-gray-200 rounded-xl"></li>
            <li className="w-80 h-[350px] bg-gray-200 rounded-xl"></li>
            <li className="w-80 h-[350px] bg-gray-200 rounded-xl"></li>
            <li className="w-80 h-[350px] bg-gray-200 rounded-xl"></li>
            <li className="w-80 h-[350px] bg-gray-200 rounded-xl"></li>
          </ul>
          <Link href="/projects">
            <button className="bg-[#343434c9] cursor-pointer rounded-xl p-4 mt-5 font-bold">
              See All
            </button>
          </Link>
        </div>
      </section>

      {/* about me */}
      <section className="w-full flex justify-center mt-20">
        <div className="max-w-screen-xl flex flex-col p-10 justify-center items-center">
          <h2 className="text-3xl font-bold mb-7">Why I do what I do</h2>

          <p className="mb-4">
            <a
              onClick={() => setAboutOpen((prevState) => !prevState)}
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <button
                className={
                  isAboutOpen
                    ? "w-5 rotate-180 transition ease-in-out duration-500"
                    : "w-5 transition ease-in-out duration-500"
                }
              >
                <Image src={drop} alt="arrow-down" />
              </button>
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="block max-w-screen-lg text-xl p-6 rounded-lg bg-[#1f1f1f]">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger. Some placeholder content for the collapse
              component. This panel is hidden by default but revealed when the
              user activates the relevant trigger. Some placeholder content for
              the collapse component. This panel is hidden by default but
              revealed when the user activates the relevant trigger. Some
              placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger. Some placeholder content for the collapse
              component. This panel is hidden by default but revealed when the
              user activates the relevant trigger. Some placeholder content for
              the collapse component. This panel is hidden by default but
              revealed when the user activates the relevant trigger. Some
              placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger. Some placeholder content for the collapse
              component. This panel is hidden by default but revealed when the
              user activates the relevant trigger. Some placeholder content for
              the collapse component. This panel is hidden by default but
              revealed when the user activates the relevant trigger. Some
              placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger. Some placeholder content for the collapse
              component. This panel is hidden by default but revealed when the
              user activates the relevant trigger. Some placeholder content for
              the collapse component. This panel is hidden by default but
              revealed when the user activates the relevant trigger. Some
              placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger. Some placeholder content for the collapse
              component. This panel is hidden by default but revealed when the
              user activates the relevant trigger. Some placeholder content for
              the collapse component. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="w-full flex justify-center mt-20 py-10">
        <div className="max-w-screen-lg"></div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">For a decentralized future.</h3>
          <p className="text-lg mt-3 max-w-lg text-center">
            "We have proposed a system for electronic transactions without
            relying on trust"
          </p>
          <ul className="flex mt-6 mb-4 gap-2">
            <li className="w-16">
              <Image src={github} alt="github" />
            </li>
            <li className="w-16">
              <Image src={linkedin} alt="linkedin" />
            </li>
            <li className="w-16">
              <Image src={telegram} alt="telegram" />
            </li>
            <li className="w-16">
              <Image src={codewars} alt="codewars" />
            </li>
            <li className="w-16">
              <Image src={discord} alt="discord" />
            </li>
          </ul>
          <span className="font-semibold italic mt-4">
            contact me at: joaosantosdev97@gmail.com
          </span>
        </div>
      </footer>
    </div>
  );
}
