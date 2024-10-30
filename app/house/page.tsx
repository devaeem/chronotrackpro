"use client";
import React, { useState } from "react";
import {
  Home,
  User,
  Settings,
  ArrowLeft,
  Bell,
} from "lucide-react";
import Entrance from "./areas/entrance";
import Profile from "./areas/profile";
import Setting from "./areas/settings";
interface Area {
  name: string;
  icon: React.ElementType;
  Description: React.ComponentType;
}

const areas: Area[] = [
  {
    name: "Entrance",
    icon: Home,
    Description: Entrance,
  },
  // {
  //   name: "Living Room",
  //   icon: Sofa,
  //   description:
  //     "A comfortable space for relaxation, entertainment, and socializing with family and guests.",
  // },
  // {
  //   name: "Kitchen",
  //   icon: ChefHat,
  //   description:
  //     "The heart of the home where meals are prepared and often where family and friends gather.",
  // },
  // {
  //   name: "Dining Room",
  //   icon: UtensilsCrossed,
  //   description:
  //     "A dedicated space for enjoying meals and hosting dinner parties.",
  // },
  // {
  //   name: "Table",
  //   icon: Lamp,
  //   description:
  //     "A versatile surface for dining, working, or various activities.",
  // },
  // {
  //   name: "Toilet",
  //   icon: Bath,
  //   description:
  //     "A small room containing a toilet and sometimes a sink for personal hygiene.",
  // },
  // {
  //   name: "Bath Room",
  //   icon: Droplets,
  //   description:
  //     "A room for personal hygiene, typically containing a bath or shower, sink, and sometimes a toilet.",
  // },
  // {
  //   name: "Washing Area",
  //   icon: WashingMachine,
  //   description:
  //     "A space dedicated to laundry, often containing a washing machine and dryer.",
  // },
  // {
  //   name: "Stairs",
  //   icon: ArrowBigUp,
  //   description:
  //     "A set of steps for moving between different levels of the house.",
  // },
  // {
  //   name: "Bedroom",
  //   icon: Bed,
  //   description: "A private room for sleeping and relaxation.",
  // },
  // {
  //   name: "Bedroom",
  //   icon: Bed,
  //   description:
  //     "Another private room for sleeping and relaxation, often for a different family member.",
  // },
  // {
  //   name: "Closet Area",
  //   icon: DoorOpen,
  //   description: "A storage space for clothes and personal items.",
  // },
  // {
  //   name: "Balcony",
  //   icon: Building,
  //   description:
  //     "An elevated outdoor space, often accessed from upper floors, providing fresh air and views.",
  // },
  // {
  //   name: "Garden",
  //   icon: Flower,
  //   description:
  //     "An outdoor area for growing plants, flowers, and sometimes vegetables.",
  // },
  // {
  //   name: "Patio",
  //   icon: Warehouse,
  //   description:
  //     "An outdoor living space, often adjacent to the house, used for relaxation and entertainment.",
  // },
  // {
  //   name: "Garage",
  //   icon: Car,
  //   description:
  //     "A sheltered space for parking vehicles and storing outdoor equipment.",
  // },
];

type Tab = "home" | "profile" | "settings";
const Page = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const handleAreaClick = (area: Area) => {
    setSelectedArea(area);
  };

  const handleBackClick = () => {
    setSelectedArea(null);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              House Areas
            </h2>
            {selectedArea ? (
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transition-all duration-300 ease-in-out">
                <button
                  className="flex items-center text-orange-600 hover:text-orange-800 mb-4 transition-colors duration-200"
                  onClick={handleBackClick}
                  aria-label="Back to all areas"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Back</span>
                </button>
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <selectedArea.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {selectedArea.name}
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed">
                  <selectedArea.Description />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {areas.map((area, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105"
                    onClick={() => handleAreaClick(area)}
                    aria-label={area.name}
                  >
                    <div className="bg-orange-100 p-3 rounded-full mb-3">
                      <area.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 text-center">
                      {area.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </>
        );
      case "profile":
        return (
          <>
            <Profile />
          </>
        );
      case "settings":
        return (
          <>
           <Setting />
          </>
        );
    }
  };
  return (
    <>
      <div className="bg-orange-100 min-h-screen pb-16">
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white p-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
              <User className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">John Doe</h1>
              <p className="text-sm opacity-90">john.doe@example.com</p>
            </div>
          </div>
          <button className="p-2 bg-white bg-opacity-20 rounded-full" aria-label="Notifications">
            <Bell className="w-6 h-6" />
          </button>
        </div>
        <p className="text-xs opacity-75">Member since: Jan 2023</p>
      </div>

        <div className="p-4">{renderContent()}</div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-between px-4 py-2">
            <button
              className={`flex flex-col items-center p-2 ${
                activeTab === "home" ? "text-orange-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("home")}
              aria-label="Home"
            >
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">หน้าแรก</span>
            </button>
            <button
              className={`flex flex-col items-center p-2 ${
                activeTab === "profile" ? "text-orange-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("profile")}
              aria-label="Profile"
            >
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">โปรไฟล์</span>
            </button>
            <button
              className={`flex flex-col items-center p-2 ${
                activeTab === "settings" ? "text-orange-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("settings")}
              aria-label="Settings"
            >
              <Settings className="w-6 h-6" />
              <span className="text-xs mt-1">การตั้งค่า</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
