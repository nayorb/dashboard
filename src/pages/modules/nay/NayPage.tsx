import React from "react";
import data from "./data.json";

const SORTED_DATA_BY_PRICE = data.sort((a, b) => {
  return Math.abs(a.oldPrice - a.price) - Math.abs(b.oldPrice - b.price);
});

const NayPage = () => {
  return (
    <div className="p-8">
      {SORTED_DATA_BY_PRICE.map((item, index) => {
        return (
          <a href={item.url} key={item.url}>
            <div className="p-2 shadow-xl rounded-xl my-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p>
                  <del>{item.oldPrice}</del>
                </p>
                <p>
                  <strong>{item.price}</strong>
                </p>
                <p className="text-5xl">{item.discount}%</p>
              </div>
              <div>
                <img src={item.image} />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

// https://www.nay.sk/philips-tab8805-soundbar

export default NayPage;
