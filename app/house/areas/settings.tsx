"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, Globe, Moon, Volume2, VolumeX, Lock } from "lucide-react";


const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [language, setLanguage] = useState("English");
  const [privacy, setPrivacy] = useState("Public");
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Moon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Dark Mode</span>
          </div>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Notifications</span>
          </div>
          <Switch
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {sound ? (
              <Volume2 className="w-5 h-5 text-gray-600" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-600" />
            )}
            <span className="text-gray-800">Sound</span>
          </div>
          <Switch checked={sound} onChange={() => setSound(!sound)} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Language</span>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Privacy</span>
          </div>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Public</option>
            <option>Friends Only</option>
            <option>Private</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Setting;
