const FeatureSection = () => {
  return (
    <section className="w-full pt-[102px] flex flex-col items-center bg-primary shadow-darkCloud">
      <span
        className="text-center font-bold xl:text-5xl tracking-wide xl:leading-[70px] font-Catamaran text-light left-[1%]
                  lg:text-4xl lg:leading-[60px]
                  md:text-3xl md:leading-[45px]"
      >
        Next-Gen features that <br /> makes it Worth It
      </span>

      {/*      Features Grid      */}
      {/* ======================= */}
      <div
        className="max-w-[90%] mx-auto mt-[70px] mb-16
                  2xl:w-[83.2%]"
      >
        <div className="grid gap-[30px] grid-cols-3">
          {/* Deep Think Card */}
          <div
            className="row-span-2
                      bg-gradient-to-r from-[#8A2BE2] to-[#300384] rounded-3xl p-6 text-white flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold font-Catamaran tracking-wide">
                Deep Think
              </h2>
            </div>
            <p className="text-lg font-sans tracking-wide w-[240px]">
              It automatically understands your needs and generates expert-level
              prompts, ensuring you get precise and relevant answers tailored
              just for you without being a prompt engineer!
            </p>
          </div>

          {/* Privacy Card */}
          <div className="bg-gradient-to-r from-[#00B472] to-[#02BDA4] rounded-3xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold font-Catamaran tracking-wide">
                Privacy + +
              </h2>
            </div>
            <p className="text-lg font-sans tracking-wide w-[249px]">
              No user data stored on our server. Your Data only on Your Machine.
            </p>
          </div>

          {/* Cleanest Interface Card */}
          <div className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-3xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold font-Catamaran tracking-wide">
                Cleanest Interface
              </h2>
            </div>
            <p className="text-lg font-sans tracking-wide w-[240px]">
              We provide the most polished distraction-free interface for your
              work.
            </p>
          </div>

          {/* Model Accessibility Card */}
          <div
            className="col-span-2
                      bg-gradient-to-r from-[#4E65FF] to-[#2BE3FF] rounded-3xl p-6 text-white"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold font-Catamaran tracking-wide mb-4">
                  Wide Range of Model
                  <br />
                  Accessibility
                </h2>
                <p className="text-lg font-sans tracking-wide w-[360px]">
                  From our models to your own API Key to locally running
                  open-source models, your curiosity can never stop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
