import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface FlowerSampleProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleOrdered: string;
}

const FlowerSample = ({
  backgroundImage,
  title,
  subtitle,
  peopleOrdered,
}: FlowerSampleProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-pink-50 p-4">
            <Image src="/flower-icon.png" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        {/* People Joined */}
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block w-10 h-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleOrdered}</p>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <FlowerSample
          backgroundImage="bg-bg-img-1"
          title="Enchanting Mixed Flower Bouquet"
          subtitle="Anniversary"
          peopleOrdered="100+ Ordered"
        />
        <FlowerSample
          backgroundImage="bg-bg-img-2"
          title="Blended Blooms Mixed Rose Bouquet"
          subtitle="Birthday"
          peopleOrdered="50+ Ordered"
        />
      </div>

      {/* Overlay */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-pink-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 text-white capitalize">
            <strong>Feeling Lost</strong> And Not Knowing How To Choose?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Simply share your emotions or the occasion, and let us weave
            together a custom bouquet that speaks volumes, turning your feelings
            into a stunning arrangement that will undoubtedly convey your
            sentiments with grace and beauty.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
