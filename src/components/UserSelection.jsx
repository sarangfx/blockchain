import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

export default function UserSelection() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-500/5 px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset  hover:bg-slate-500">
          Zachery Smith
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-black-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-slate-400 data-[focus]:bg-gray-900 data-[focus]:text-white"
            >
              <div className="flex flex-row gap-5">
                <UserCircleIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-black-400"
                />
                Zachery Smith
              </div>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-slate-400 data-[focus]:bg-gray-900 data-[focus]:text-white"
            >
              <div className="flex flex-row gap-5">
                <UserCircleIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-black-400"
                />
                Bob Smith
              </div>
            </a>
          </MenuItem>
          <br />
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-slate-400 data-[focus]:bg-gray-900 data-[focus]:text-white"
              >
                <div className="flex flex-row gap-5 ">
                  <PowerIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-black-400 text-red-500"
                  />
                  Sign out
                </div>
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
