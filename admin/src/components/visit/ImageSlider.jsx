/** import library */
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
/** import asset */
import ecoEarth from '../../asset/resource/ecoEarth.png';
import recycleEarth from '../../asset/resource/recycleEarth.png';

/** use Swiper */
SwiperCore.use([Autoplay, Pagination]);

/** styled-component */
const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding-left: 150px;
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  width: 70%;
  height: 70%;
`;
const SwiperContainer = styled(Swiper)``;
const Image = styled.img`
  display: flex;
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
`;

function ImageSlider() {
  const images = [recycleEarth, ecoEarth];

  return (
    <Container>
      <SwiperContainer
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageContainer>
              <Image src={image} alt="slider" />
            </ImageContainer>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Container>
  );
}

export default ImageSlider;
