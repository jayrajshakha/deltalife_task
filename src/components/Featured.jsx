import React from "react";

const Featured = () => {
  return (
    <div className="w-[1440px] h-[936px] flex justify-center items-center">
      <div className="w-[1140px] h-[689px]">
        <div className="flex justify-between ">
          <h1 className="font-semibold text-[2.25rem] ">Featured Items</h1>
          <button className="text-white bg-[#8CC63F] w-40 text-[1rem] p-3">
            See More Products
          </button>
        </div>
        <div className="my-9">
          <ul className="flex justify-start gap-14 ">
            <li className="text-xl font-medium text-[#8CC63F] border-b-2 border-[#8CC63F] p-3">
              New Product
            </li>
            <li className="text-xl  font-light p-3">Flower</li>
            <li className="text-xl  font-light p-3">D8 Vap</li>
            <li className="text-xl  font-light p-3">D10 Vape</li>
            <li className="text-xl  font-light p-3">THC-0</li>
            <li className="text-xl  font-light p-3">Pets</li>
          </ul>
        </div>
        <div className="flex justify-around items-center">
          <div className="border shadow-lg p-5 w-[360px] h-[501px]">
            <img
              className="w-[360px] h-[304px]"
              src="https://s3-alpha-sig.figma.com/img/5027/6e2f/bda4282b204b78a354649ec7505b8b04?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdFLCtPBC3kW4JD6uWmydswEt4DzRiwteY36DaO7sv86N1E3QzXQxqcHfwz5cj3oKU0A30thCp0kdG1MKrYCMLhMBXOtMhaUO7W7bR-RbeAlw9XxSSqyeSOHV6fSKmp19D4DR8QFNOJKg1Qacyub9R014ZV-9JECe~HGvLS~3LDyJa3ckMNfo5cGj-L-i5v~7tb2Kntx9J7z3JtSeLtndroFZvtQtSWatKuHQku-l4V9fyAmbElBMX2kr5lOZztrqRRh-4f3XD5EoztzxLM9i6PSB~xKDOrIkoNVHSqevfylJ1ZWbdjCOwSa4DApKLOkWiJB3lWrNWj-bE0PWsZLKA__"
              alt=""
            />
            <h1 className="text-center text-[#8CC63F] font-bold">PETS</h1>
            <h3 className="text-center mt-2 text-xl">
              CBD Pet treack jarkey Sticks <br />
              200mg
            </h3>
            <div className="flex justify-center items-center gap-5">
              <span className="text-2xl font-bold ">$29.99</span>{" "}
              <span className="line-through font-extralight">$59.99</span>
            </div>
          </div>
          <div className="border shadow-lg p-5 w-[360px] h-[501px] relative">
            <span className="absolute text-white bg-[#8CC63F] rounded-xl  w-[67px] h-[23px] text-center right-3">
              SALE
            </span>
            <img
              className="w-[360px] h-[304px]"
              src="https://s3-alpha-sig.figma.com/img/5027/6e2f/bda4282b204b78a354649ec7505b8b04?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdFLCtPBC3kW4JD6uWmydswEt4DzRiwteY36DaO7sv86N1E3QzXQxqcHfwz5cj3oKU0A30thCp0kdG1MKrYCMLhMBXOtMhaUO7W7bR-RbeAlw9XxSSqyeSOHV6fSKmp19D4DR8QFNOJKg1Qacyub9R014ZV-9JECe~HGvLS~3LDyJa3ckMNfo5cGj-L-i5v~7tb2Kntx9J7z3JtSeLtndroFZvtQtSWatKuHQku-l4V9fyAmbElBMX2kr5lOZztrqRRh-4f3XD5EoztzxLM9i6PSB~xKDOrIkoNVHSqevfylJ1ZWbdjCOwSa4DApKLOkWiJB3lWrNWj-bE0PWsZLKA__"
              alt=""
            />
            <h1 className="text-center text-[#8CC63F] font-bold">PETS</h1>
            <h3 className="text-center mt-2 text-xl">
              CBD Pet treack jarkey Sticks <br />
              200mg
            </h3>
            <div className="flex justify-center items-center gap-5">
              <span className="text-2xl font-bold ">$29.99</span>{" "}
              <span className="line-through font-extralight">$59.99</span>
            </div>
          </div>
          <div className="border shadow-lg p-5 w-[360px] h-[501px]">
            <img
              className="w-[360px] h-[304px]"
              src="https://s3-alpha-sig.figma.com/img/5027/6e2f/bda4282b204b78a354649ec7505b8b04?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdFLCtPBC3kW4JD6uWmydswEt4DzRiwteY36DaO7sv86N1E3QzXQxqcHfwz5cj3oKU0A30thCp0kdG1MKrYCMLhMBXOtMhaUO7W7bR-RbeAlw9XxSSqyeSOHV6fSKmp19D4DR8QFNOJKg1Qacyub9R014ZV-9JECe~HGvLS~3LDyJa3ckMNfo5cGj-L-i5v~7tb2Kntx9J7z3JtSeLtndroFZvtQtSWatKuHQku-l4V9fyAmbElBMX2kr5lOZztrqRRh-4f3XD5EoztzxLM9i6PSB~xKDOrIkoNVHSqevfylJ1ZWbdjCOwSa4DApKLOkWiJB3lWrNWj-bE0PWsZLKA__"
              alt=""
            />
            <h1 className="text-center text-[#8CC63F] font-bold">PETS</h1>
            <h3 className="text-center mt-2 text-xl">
              CBD Pet treack jarkey Sticks <br />
              200mg
            </h3>
            <div className="flex justify-center items-center gap-5">
              <span className="text-2xl font-bold ">$29.99</span>{" "}
              <span className="line-through font-extralight">$59.99</span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
