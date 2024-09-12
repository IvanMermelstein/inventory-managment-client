'use client';

import { Menu } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">
          IManager
        </h1>
        <button className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => {}}>
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINKS */}
      <div className="flex-grow mt-8">

      </div>
      {/* FOOTER */}
      <div>
        <p className="text-center text-xs text-gray-500">
          Done with ❤️ by {" "} 
          <Link 
            href={"https://www.linkedin.com/in/ivanmermelstein/"}
            target="_blank"
            className="font-bold"
          >Iván</Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;