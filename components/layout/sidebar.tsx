"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  CalendarCheck,
  Home,
  CalendarPlus,
  Users,
  Zap,
  BookPlus,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export interface MenuItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  submenu?: any;
}

export const menuItems: MenuItem[] = [
  { icon: Home, label: "แดชบอร์ด", href: "/admin/dashboard" },
  { icon: Users, label: "พนักงาน", href: "/admin/employee" },
  { icon: BookPlus, label: "Leave-Requests", href: "#" },
  // {
  //   icon: BookPlus,
  //   label: "Leave-Requests-2",
  //   submenu: [
  //     {
  //       icon: CalendarPlus,
  //       label: "New Request",
  //       href: "#",
  //     },
  //     {
  //       icon: CalendarCheck,
  //       label: "Pending Requests",
  //       href: "#",
  //     },
  //   ],
  // },
  // { icon: BookPlus, label: "Leave-Requests", href: "#" },
];

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  console.log("pp", pathname);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false); // ปิด sidebar เมื่อคลิกนอก sidebar
      }
    }

    // เพิ่ม event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // ลบ event listener เมื่อ component ถูกทำลาย
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarRef]);

  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col`}
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 drop-shadow">
              ChronoTrackPro!
            </span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>

                    <button

                      onClick={() => toggleSubmenu(index)}
                      className={`flex items-center justify-between w-full p-2 text-left rounded ${
                        item.href === pathname
                          ? "text-blue-600 bg-blue-100 font-bold dark:bg-blue-900 dark:text-blue-200"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      } transition-all duration-300 ease-in-out `}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.label}
                      </div>
                      {openSubmenuIndex === index ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}

                    </button>
                    <ul
                      className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        openSubmenuIndex === index
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((subItem: any, subIndex: number) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all duration-200 ease-in-out"
                          >
                            <div className="flex items-center">
                              <subItem.icon className="w-5 h-5 mr-3" />
                              {subItem.label}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>



                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`flex items-center p-2 rounded ${
                      item.href === pathname
                        ? "text-blue-600 bg-blue-100 font-bold dark:bg-blue-900 dark:text-blue-200"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    } transition-all duration-300 ease-in-out    `}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="#"
            className="flex items-center justify-center p-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-md hover:from-blue-700 hover:to-teal-600 transition-colors duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Upgrade to Pro
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
