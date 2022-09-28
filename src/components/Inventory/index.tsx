import clsx from "clsx";
import React, { useState } from "react";
import {
  ChevronDown,
  Divide,
  Edit,
  Square,
  Trash,
  Trash2,
} from "react-feather";
import wineData from "../../dummyData/wine";

export const Inventory = () => {
  return (
    <div className="mt-8 w-full overflow-x-auto">
      <div className="min-w-max">
        <h1 className="mb-4 font-bold">Inventory</h1>
        <div className="flex gap-4 py-2 border-y border-alice-gray items-center text-body-text text-xs font-bold uppercase">
          <div className="flex h-5 w-6 mx-2 items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-subtle-text border-2 text-secondary focus:ring-secondary"
            />
          </div>

          <h1 className="tracking-wider w-5/12 flex items-center gap-1">
            Product <img src="/sort.svg" alt="sort-logo" className="h-3" />
          </h1>
          <h1 className="tracking-wider w-2/12 flex items-center gap-1">
            Ratings <img src="/sort.svg" alt="sort-logo" className="h-3" />
          </h1>
          <h1 className="tracking-wider w-1/12 flex items-center gap-1">
            Vintage <img src="/sort.svg" alt="sort-logo" className="h-3" />
          </h1>
          <h1 className="tracking-wider w-1/12 flex items-center gap-1">
            Qty <img src="/sort.svg" alt="sort-logo" className="h-3" />
          </h1>
          <h1 className="tracking-wider w-3/12 flex items-center gap-1">
            Volume <img src="/sort.svg" alt="sort-logo" className="h-3" />
          </h1>
          <h1 className="tracking-wider w-1/12 flex items-center gap-1">
            Cost <img src="/sort.svg" alt="sort-logo" className="h-3" />
          </h1>
          <h1 className="tracking-wider w-1/12 flex items-center gap-1">
            Price <img src="/sort.svg" alt="sort-logo" className="h-3" />
          </h1>
          <div className="w-5 mr-4"></div>
        </div>
        <div>
          {wineData.map((wine) => {
            const [isOpen, setIsOpen] = useState(false);
            const [checked, setChecked] = useState(false);
            const {
              id,
              name,
              region,
              image,
              ratings,
              vintage,
              qty,
              cost,
              price,
              volume,
              stocks,
            } = wine;
            return (
              <div
                key={id}
                className={clsx(
                  "border-t-0 border transition",
                  isOpen ? "border-alice-gray" : "border-transparent"
                )}
              >
                <div className="flex cursor-pointer border-b border-alice-gray gap-4 py-4 items-center text-subtle-text group">
                  {/* <Square className="w-6 h-6 mx-2" /> */}
                  <div className="flex h-5 w-6 mx-2 items-center bg-white">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-subtle-text border-2 text-secondary focus:ring-secondary"
                      checked={checked}
                      onChange={(e) => {
                        e.stopPropagation();
                        setChecked(e.target.checked);
                      }}
                    />
                  </div>
                  <div className="w-5/12 truncate flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8">
                      <img
                        src={image}
                        alt={name}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h1 className="font-semibold text-dark truncate transition group-hover:text-secondary">
                        {name}
                      </h1>
                      <p className="text-sm text-subtle-text truncate">
                        {region.join(" • ")}
                      </p>
                    </div>
                  </div>
                  <div className="w-2/12 flex gap-2">
                    <span className="bg-frozen text-sm px-2 py-1 text-body-text font-semibold rounded">
                      {ratings[0].prefix} {ratings[0].value}
                    </span>
                    <span className="bg-frozen text-sm px-2 py-1 text-body-text font-semibold rounded">
                      +{ratings.length - 1}
                    </span>
                  </div>
                  <div className="w-1/12">
                    <p className="text-sm text-subtle-text font-semibold">
                      {vintage}
                    </p>
                  </div>
                  <div className="w-1/12">
                    <p className="text-sm text-subtle-text font-semibold">
                      {qty}
                    </p>
                  </div>
                  <div className="w-3/12">
                    <p className="text-sm text-subtle-text font-semibold">
                      {volume}
                    </p>
                  </div>
                  <div className="w-1/12">
                    <p className="text-sm text-subtle-text font-semibold">
                      ${cost}
                    </p>
                  </div>
                  <div className="w-1/12">
                    <p className="text-sm text-dark font-semibold">${price}</p>
                  </div>
                  <div className="w-5 mr-4">
                    <ChevronDown
                      className={clsx(
                        "transition-all",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                      onClick={() => setIsOpen((prev) => !prev)}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    "transition-all duration-300 overflow-hidden text-sm",
                    isOpen ? "max-h-screen" : "max-h-0"
                  )}
                >
                  <div className="pl-12 py-4 pr-4">
                    <div className="border-b border-alice-gray pb-4 flex items-center justify-between gap-8">
                      <div>
                        <h1 className="font-semibold text-dark">{name}</h1>
                        <div className="flex gap-8">
                          <p className="mt-2 font-semibold">
                            Region :
                            <span className=" text-subtle-text truncate ml-1">
                              {region.join(" • ")}
                            </span>
                          </p>
                          <p className="mt-2 font-semibold">
                            Vintage :
                            <span className="text-subtle-text truncate ml-1">
                              {vintage}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-center">
                        <a
                          href="#"
                          className="text-secondary underline font-semibold"
                        >
                          View wine
                        </a>
                        <button>
                          <Edit className="w-4 h-4" />
                        </button>
                        <button disabled>
                          <Trash2 className="w-4 h-4 text-light-gray" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div>
                        <h1 className="text-xs text-subtle-text font-bold uppercase tracking-wider mb-2">
                          Ratings
                        </h1>
                        <div className="grid grid-cols-3 gap-4">
                          {ratings.map((rating, i) => (
                            <div key={i}>
                              <p className="text-dark font-semibold mb-3">
                                {rating.name}
                              </p>
                              <span className="bg-frozen px-3 py-2 text-body-text font-semibold rounded">
                                {rating.value
                                  ? `${rating.prefix} ${rating.value}`
                                  : "---"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h1 className="text-xs text-subtle-text font-bold uppercase tracking-wider mb-2">
                          Stocks
                        </h1>
                        <div className="grid grid-cols-3 gap-4">
                          {stocks.map((stock, i) => (
                            <div key={i}>
                              <p className="text-dark font-semibold mb-3">
                                {stock.name}
                              </p>
                              <span className="bg-peach-light px-3 py-2 text-primary font-semibold rounded">
                                {stock.units} Units
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
