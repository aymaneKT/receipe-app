import { RecipeValues } from "../../consonants";

export default function HeroSection() {
  return (
    <div className="font-[Pacifico]">
      <section className="h-screen relative">
        {/* SVG : BG WAVES */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FBD6BC"
            fillOpacity="1"
            d="M0,288L40,277.3C80,267,160,245,240,240C320,235,400,245,480,224C560,203,640,149,720,144C800,139,880,181,960,181.3C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#FBD6BC"
            fillOpacity="1"
            d="M0,288L40,277.3C80,267,160,245,240,240C320,235,400,245,480,224C560,203,640,149,720,144C800,139,880,181,960,181.3C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        {/*==// SVG : BG WAVES //== */}

        <div
          className="px-8 flex-col md:flex-row flex items-center gap-5 justify-between absolute top-1/2 w-screen"
          style={{ translate: "0 -50%" }}
        >
          {/* Left Text */}
          <div className="font-[Pacifico]">
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 3rem)",
              }}
              className="whitespace-nowrap"
            >
              We make delicious food for you
            </h1>
            <p
              className="leading-relaxed break-words my-4 text-[#4c4a4a]"
              style={{
                fontSize: "clamp(0.6rem, 1.2vw, 1.1rem)",
              }}
            >
              Discover simple and delicious recipes, perfect for every day and
              every occasion.
              <br /> From quick weekday meals to indulgent weekend
              <br />
              treats, our collection inspires you to cook with passion and enjoy
              every bite.
              <br />
              Explore flavors from around the world,
              <br /> experiment with new ingredients, and turn every meal into a
              delightful experience.
            </p>
            <button className="p-2 px-5 bg-[#FBD6BC] text-white cursor-pointer rounded-sm ">
              Discover
            </button>
          </div>

          {/* Right Image */}
          <img
            src="Images/ImageHero.svg"
            loading="lazy"
            className="w-[clamp(250px,25vw,600px)]"
            alt="Delicious food"
          />
        </div>
      </section>

      <section className="my-[100px] px-10 ">
        <h1
          className="font-bold mb-20 text-center"
          style={{
            fontSize: "clamp(2rem, 2vw, 3rem)",
          }}
        >
          Made with Love, Shared with Joy
        </h1>
        <div className="flex flex-wrap-reverse justify-evenly items-center gap-y-20 gap-x-8">
          <div className="flex flex-col gap-6">
            <p className="text-center">
              Discover a world where every recipe tells a story.
              <br />
              Our platform brings together food lovers to share, learn, and
              celebrate the joy of cooking.
              <br />
              From family favorites to new culinary adventures, find inspiration
              and community in every bite.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-6">
              {RecipeValues.map((e, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 items-center p-4 border border-[#79443B] rounded-2xl bg-[#FBD6BC]/20"
                >
                  <e.icon className="text-6xl p-4 border border-[#79443B] rounded-full text-[#79443B]" />
                  <h3
                    style={{
                      fontSize: "clamp(1rem, 0.8vw, 2rem)",
                    }}
                    className="font-bold text-center"
                  >
                    {e.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(1rem, 0.8vw, 2rem)",
                    }}
                    className="text-center font-[Poppins]"
                  >
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
