import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import img0 from "../../assets/images/twitter-clone.png"
import img1 from "../../assets/images/do-it.png";
import img2 from "../../assets/images/easymovie.png";
import img4 from "../../assets/images/nukenzie.png";
import img5 from "../../assets/images/organizze.png";
import img6 from "../../assets/images/tic.png";

import styles from "./Swipers.module.scss";

const dados = [
  {
    img: img0,
  },
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
];

const SwiperComponent = () => {
  return (
    <div class="swiper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {dados.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Image
                src={item.img}
                alt="Vercel Logo"
                width={"1220px"}
                height={"719px"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
