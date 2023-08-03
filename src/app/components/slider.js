import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import data from "../data";
import Image from "next/image";
const slider = () => {
  return (
    <article>
      {data.map((home) => {
        return (
          <div key={home.id} className="w-40 h-40 rounded-lg">
            <Image
              src={"/public/assets/CarouselImages.png"}
              width={50}
              height={50}
            />
            <h4 className="text--sm font-bold">{home.price}</h4>
            <h5 className="text-xs font-bold">{home.type}</h5>
          </div>
        );
      })}
    </article>
  );
};

export default slider;
