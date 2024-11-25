const FeatureSection = () => {
  return (
    <section className="w-full pt-[102px] flex flex-col items-center bg-primary shadow-darkCloud">
      {/*       Heading         */}
      {/* ===================== */}
      <span
        className="xl:text-5xl xl:leading-[70px] lg:text-4xl lg:leading-[60px] md:text-3xl md:leading-[45px] text-3xl
                text-center font-bold  tracking-wide  font-Catamaran text-light left-[1%]"
      >
        Next-Gen features that <br /> makes it Worth It
      </span>

      {/*      Features Grid      */}
      {/* ======================= */}
      <div className="max-w-[90%] mt-[70px] mb-16">
        <div
          className="grid h-auto 2xl:grid-cols-3 lg:grid-cols-2
                      2xl-3:gap-7 2xl:gap-5 xl:gap-5 gap-4"
        >
          {/* Deep Think Card */}
          <div
            className="xl:row-span-2 xl:col-span-1 lg:col-span-2
                      3xl:p-6 xl:p-5 p-4
                      2xl:rounded-3xl rounded-2xl
                      bg-gradient-to-r from-[#8A2BE2] to-[#300384] text-white flex flex-col justify-between"
          >
            <div className="flex items-center xl:mb-0 lg:mb-4 mb-2">
              <h2
                className="2xl:text-2xl lg:text-xl text-lg
                        font-bold font-Catamaran tracking-wide"
              >
                Deep Think
              </h2>
            </div>
            <p
              className="2xl:text-lg xl:text-base text-sm
                        font-sans tracking-wide 
                        2xl:max-w-[275px] xl:max-w-[380px]"
            >
              It automatically understands your needs and generates expert-level
              prompts, ensuring you get precise and relevant answers tailored
              just for you without being a prompt engineer!
            </p>
          </div>

          {/* Privacy Card */}
          <div
            className="3xl:p-6 xl:p-5 p-4
                      2xl:rounded-3xl rounded-2xl
                      bg-gradient-to-r from-[#00B472] to-[#02BDA4] text-white"
          >
            <div className="flex items-center gap-2 lg:mb-4 mb-2">
              <h2
                className="2xl:text-2xl lg:text-xl text-lg
                        font-bold font-Catamaran tracking-wide"
              >
                Privacy + +
              </h2>
            </div>
            <p
              className="2xl:text-lg xl:text-base text-sm
                        font-sans tracking-wide
                        2xl:max-w-[249px] xl:max-w-[360px]"
            >
              No user data stored on our server. Your Data only on Your Machine.
            </p>
          </div>

          {/* Cleanest Interface Card */}
          <div
            className="3xl:p-6 xl:p-5 p-4
                      2xl:rounded-3xl rounded-2xl
                      bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white"
          >
            <div className="flex items-center gap-2 lg:mb-4 mb-2">
              <h2
                className="2xl:text-2xl lg:text-xl text-lg
                        font-bold font-Catamaran tracking-wide"
              >
                Cleanest Interface
              </h2>
            </div>
            <p
              className="2xl:text-lg xl:text-base text-sm
                        font-sans tracking-wide
                        2xl:max-w-[240px] xl:max-w-[360px]"
            >
              We provide the most polished distraction-free interface for your
              work.
            </p>
          </div>

          {/* Model Accessibility Card */}
          <div
            className="lg:col-span-2 3xl:p-6 xl:p-5 p-4
                      2xl:rounded-3xl rounded-2xl
                      bg-gradient-to-r from-[#4E65FF] to-[#2BE3FF] text-white"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2
                  className="2xl:text-2xl lg:text-xl text-lg
                           xl:max-w-[271px]
                           font-bold font-Catamaran tracking-wide lg:mb-4 mb-2"
                >
                  Wide Range of Model Accessibility
                </h2>
                <p
                  className="2xl:text-lg xl:text-base text-sm
                            font-sans tracking-wide
                            2xl:max-w-[360px] xl:max-w-[430px]"
                >
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
