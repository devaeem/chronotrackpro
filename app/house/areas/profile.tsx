"use client";
import {
  Briefcase,
  Calendar,
  Edit2,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Product Designer</p>
          </div>
          <button
            className="ml-auto bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-200 transition-colors"
            aria-label="Edit profile"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">New York, USA</span>
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">TechCorp Inc.</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">Joined January 2023</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Bio</h4>
          <p className="text-gray-600">
            Passionate product designer with 5+ years of experience in creating
            user-centric digital solutions. Skilled in UX research, prototyping,
            and design systems. Always eager to learn and innovate.
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "UX Design",
              "UI Design",
              "Prototyping",
              "User Research",
              "Figma",
              "Adobe XD",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
