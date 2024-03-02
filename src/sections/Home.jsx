import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/home-images/slide1.jpg";
import slide2 from "../assets/home-images/slide2.jpg";
import slide3 from "../assets/home-images/slide3.jpg";
import { motion } from "framer-motion";
function Home() {
  const [index, setIndex] = useState(0);
  // //   state

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const carouselItems = [
    {
      itemStyling: { height: "90vh" },
      img: slide1,
      imgAlt: "slide1",
      slideLabel: "Enjoy Our Food",
      slidePara: "Only the best ingredients for our dishes",
    },
    {
      itemStyling: { height: "90vh" },
      img: slide2,
      imgAlt: "slide2",
      slideLabel: "Elegant Interior and Design",
      slidePara: "High-class Professional Service",
    },
    {
      itemStyling: { height: "90vh" },
      img: slide3,
      imgAlt: "slide3",
      slideLabel: "Tradition & Passion",
      slidePara: "Only the best ingredients for our dishes",
    },
  ];
  // const variants = {
  //   initial: {
  //     y: -300,
  //     opacity: 0,
  //   },
  //   animate: { y: 1, opacity: 1 },
  //   exit: { y: -300, opacity: 0 },
  // };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map((Item, i) => {
        return (
          <Carousel.Item key={i} style={Item.itemStyling}>
            <Carousel.Caption className="flex flex-col  h-[75%] justify-center items-center">
              <motion.h1
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                key={i}
                className="text-6xl mb-12 py-10 border-y-[1.5px] border-y-white w-[50vw] font-dancing">
                {Item.slideLabel}
              </motion.h1>
              <motion.p
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="font-medium text-lg font-rubic">
                {Item.slidePara}.
              </motion.p>
            </Carousel.Caption>
            <img src={Item.img} alt={Item.imgAlt} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Home;
