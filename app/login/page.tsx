"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(email)) {
      setEmailError("กรุณากรอกอีเมลที่ถูกต้อง");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      setPasswordError("รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passwordError) {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      alert("Login successful");
      console.log("Form submitted");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 ">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-8 pt-12">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              ChronoTrackPro!
              </h2>
              <p className="text-center text-gray-600 mb-8">
                เข้าสู่ระบบบัญชีของคุณ
              </p>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      อีเมล
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        id="email"
                        type="email"
                        placeholder="กรุณากรอกอีเมล"
                        required
                        className="pl-10 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition duration-200"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          validateEmail(e.target.value);
                        }}
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-gray-700">
                      รหัสผ่าน
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="กรุณากรอกรหัสผ่าน"
                        required
                        className="pl-10 pr-10 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition duration-200"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          validatePassword(e.target.value);
                        }}
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox id="remember" />
                      <Label
                        htmlFor="remember"
                        className="ml-2 text-sm text-gray-600"
                      >
                        จำข้อมูลของฉัน
                      </Label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-orange-500 hover:text-orange-600 transition duration-200"
                    >
                      ลืมรหัสผ่าน?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        กำลังเข้าสู่ระบบ...
                      </>
                    ) : (
                      "เข้าสู่ระบบ"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            © 2024 ChronoTrackPro. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
