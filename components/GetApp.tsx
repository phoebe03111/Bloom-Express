import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        {/* Left */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_pink_outline"
              full
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/app.svg"
            alt="app"
            width={500}
            height={500}
            className="rounded-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
