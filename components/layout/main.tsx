"use client";
import React, { useEffect, useState } from "react";
import Sidebar, { menuItems } from "./sidebar";
import Header from "./header";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof menuItems>([])
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
    } else {
      const flattenedMenuItems = menuItems.flatMap((item: any, index: number) =>
        item.submenu
          ? [{ label: item.label, href: '#', icon: item.icon }, ...item.submenu.map((subItem: any) => ({ ...subItem, parentIndex: index }))]
          : [item]
      )
      const filteredResults = flattenedMenuItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filteredResults)
    }
  }, [searchQuery])


  return (
    <>
      <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${theme}`}>
        <Sidebar sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen}/>
        <div className="flex-1 flex flex-col">
          <Header
            theme={theme}
            setSidebarOpen={setSidebarOpen}
            toggleTheme={toggleTheme}
            sidebarOpen={sidebarOpen}
            searchResults={searchResults}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
           <main className="flex-1 p-4 overflow-auto lg:p-8 bg-gray-100 dark:bg-gray-900">
           {children}
           </main>

        </div>
      </div>
    </>
  );
};

export default Main;
