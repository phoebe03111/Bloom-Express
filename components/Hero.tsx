import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-bg"></div>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/flowers.png"
          alt="flowers"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Bloom Express</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          A flower delivery app that combines swiftness and the elegance of
          petals. Bloom Express lets you effortlessly send handpicked bouquets
          for any occasion, ensuring that the beauty of fresh flowers is
          delivered with speed and style.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            25k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_pink" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
