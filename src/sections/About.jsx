import React from "react";
import AboutHistoryComponent from "../components/aboutComponents/AboutHistoryComponent";
import AboutResturansComponent from "../components/aboutComponents/AboutResturansComponent";
import SectionHead from "../components/SectionHead";

const sectionTitle = "Discover Our Story";
const sectionDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`;
function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  py-2 lg:py-24 items-center justify-center flex-col">
          <SectionHead
            sectionTitle={sectionTitle}
            sectionDescription={sectionDescription}
            titleTextClr={"gray-900"}
          />

          <AboutHistoryComponent />
          <AboutResturansComponent />
        </div>
      </section>
    </>
  );
}

export default About;
