"use client";
import React from "react";

export default function ControlsSidebar({
  role,
  formData,
  handleRoleChange,
  handleChange,
  handlePrint,
}) {
  return (
    <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0 bg-white p-6 lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto lg:shadow-[4px_0_24px_rgba(0,0,0,0.08)] shadow-md rounded-xl lg:rounded-none mb-8 lg:mb-0 print:hidden z-10 border-r border-gray-200 mx-4 lg:mx-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Offer Letter Generator
        </h2>
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print PDF
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="bg-green-50 p-4 border border-green-200 rounded-lg shadow-sm">
          <label className="block text-sm font-bold text-green-800 mb-2">
            Select Role / Position (Auto-fills the Template)
          </label>
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none font-medium bg-white transition-shadow"
          >
            <option value="SI">State Incharge (SI)</option>
            <option value="ASM">Area Sales Manager (ASM)</option>
            <option value="SSO">Senior Sales Officer (SSO)</option>
            <option value="SO">Sales Officer (SO)</option>
            <option value="SE">Sales Executive (SE)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date (Auto-formatted on Print)
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Candidate Name
          </label>
          <input
            type="text"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow placeholder-gray-400"
            placeholder="e.g. MR. GANESH CHOUDHARY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Aadhaar No.
          </label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow placeholder-gray-400"
            placeholder="xxxx - xxxx - xxxx"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            H.Q.
          </label>
          <input
            type="text"
            name="hq"
            value={formData.hq}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow placeholder-gray-400"
            placeholder="e.g. NASIRABAD"
          />
        </div>
      </div>
    </div>
  );
}
