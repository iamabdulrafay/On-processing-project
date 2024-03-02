import React from "react";
import SectionHead from "../components/SectionHead";
import MenuListItems from "../components/menuComponents/MenuListItems";
import MenuVariants from "../components/menuComponents/MenuVariants";

const sectionTitle = "Our Menu";
const sectionDescription = `Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`;

function Menu() {
  return (
    <section id="menu-section" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <SectionHead
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
          titleTextClr={"gray-900"}
        />

        <div className="flex mx-auto flex-wrap mb-0">
          <MenuVariants />
        </div>

        <div className="flex items-center lg:w- mx-auto sm:flex-row flex-col border">
          <div className="flex items-center justify-evenly lg:w-[90%] mx-auto sm:flex-row flex-col">
            <div className="container">
              <MenuListItems />
            </div>
            <div className="container">
              <MenuListItems />
            </div>
          </div>
        </div>
        {/* <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
      </div>
    </section>
  );
}

export default Menu;
