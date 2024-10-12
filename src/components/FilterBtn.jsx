import { Menu, Button } from "@headlessui/react";

export default function FilterBtn(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Button class="leading-4 text-s bg-slate-800 hover:bg-blue-800 text-white  py-2 px-4 rounded-md">
          {props.name}
        </Button>
      </div>
    </Menu>
  );
}
