import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/flowers.png" alt="flowers" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-pink-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-32 lg:bold-40 xl:max-w-[390px]">
            Celebrate Life's Fragrant Moments
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            In the tapestry of life, each milestone is a unique bloom waiting to
            be celebrated. At Bloom Express, we believe in adorning your
            special moments with the language of flowers. Whether it's the joy
            of a new beginning, the warmth of friendship, or the sweetness of
            love, our floral arrangements are crafted to embrace and enhance
            life's most precious occasions.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/img-2.png"
          alt="bouquet"
          width={1440}
          height={580}
          className="w-full object-cover object-center rotate-180 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">To</p>
                <p className="bold-16 text-pink-50">30 min</p>
              </div>
              <p className="bold-20 mt-2">Your Special One's Doorstep</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">From</p>
              <p className="bold-20 mt-2 whitespace-nowrap">
              Our Garden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
