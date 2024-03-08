import React from "react";

const Item = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 9,10];

  return (
    <div className="w-[1440px] h-[1750px]">
      <h1 className="text-center text-4xl font-semibold mb-5">
        New Item In Stocks!
      </h1>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-4">
        {a.map((i) => {
        return (
          <div key={i} className="border shadow-lg p-5 w-[360px] h-[501px]">
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
        );
      })}
        </div>
    </div>
  );
};

export default Item;
