import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function DropDown({ page }) {
  const size = [
    {
      id: 1,
      name: "Select Size",
    },
    {
      id: 2,
      name: "Small",
    },
    {
      id: 3,
      name: "Medium",
    },
    {
      id: 4,
      name: "Large",
    },
    {
      id: 5,
      name: "Extra Large",
    },
  ];

  const storeBy = [
    {
      id: 1,
      name: "Store By",
    },
    {
      id: 2,
      name: "A-Z",
    },
    {
      id: 3,
      name: "Z-A",
    },
    {
      id: 4,
      name: "Price",
    },
  ];
  const [selected, setSelected] = useState(
    page === "order" ? size[0] : storeBy[0]
  );

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-full">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        {page === "order" && (
          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {size.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                    {item.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        )}
        {page === "productList" && (
          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {storeBy.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                    {item.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        )}
      </div>
    </Listbox>
  );
}
