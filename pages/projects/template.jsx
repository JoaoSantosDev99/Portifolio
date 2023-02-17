const Project = () => {
  return (
    <div className="min-h-screen flex flex-col items bg-[#292929]">
      <header className="w-full flex justify-center">
        <div className="bg-[#414141] max-w-screen-xl w-full h-60 flex justify-center relative">
          <div className="gap-2 flex flex-col w-fit absolute justify-center -bottom-16 items-center">
            <div className="text-3xl bg-white font-bold p-2 rounded-xl">
              Projects name goes here
            </div>
            <div className="text-sm py-1 px-3 font-bold bg-pink-400 rounded-xl">
              Frontend
            </div>
          </div>
        </div>
      </header>

      <section className="flex mt-32 w-full justify-center gap-10">
        <div className="flex flex-col">
          <div className="p-10 bg-white max-w-xl rounded-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            nam omnis praesentium! Tenetur illum harum totam, molestias
            blanditiis quos. Porro deleniti vitae illum! Hic accusamus itaque
            nihil. Dolorum, unde mollitia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Deserunt nam omnis praesentium!
            Tenetur illum harum totam, molestias blanditiis quos. Porro deleniti
            vitae illum! Hic accusamus itaque nihil. Dolorum, unde mollitia.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            nam omnis praesentium! Tenetur illum harum totam, molestias
            blanditiis quos. Porro deleniti vitae illum! Hic accusamus itaque
            nihil. Dolorum, unde mollitia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Deserunt nam omnis praesentium!
            Tenetur illum
          </div>
          <div className="flex gap-2 mt-8">
            <button className="p-4 bg-white rounded-xl font-bold">
              Check Code
            </button>
            <button className="p-4 bg-white rounded-xl font-bold">
              Demo Here
            </button>
          </div>
        </div>

        <div className="bg-white p-10 flex flex-col rounded-xl min-w-[350px]">
          <h2 className="text-2xl font-bold mb-5">Tecnologies Used</h2>
          <ul>
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
    </div>
  );
};

export default Project;
