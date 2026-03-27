import React from "react";

export default function OfferDetailsPage({ formData, rd, role }) {
  const formattedDate = formData.date
    ? new Date(formData.date).toLocaleDateString("en-IN")
    : "Select Date";

  return (
    <div className="pdf-page w-[210mm] min-h-[297mm] print:w-full print:min-h-0 mx-auto print:mx-0 bg-white p-[20mm] shadow-lg print:shadow-none print:p-[15mm] relative shrink-0 print:block">
      <div className="text-center mb-8 border-b-2 border-gray-800 pb-4 mt-4">
        <h1 className="text-2xl font-black tracking-wider text-green-800">
          DAIRY GURUJI
        </h1>
        <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">
          (Managed by Bijendera Group)
        </p>
      </div>

      <div className="flex justify-between items-start mb-8 text-[13px]">
        <div className="space-y-1">
          <p className="mb-2 font-bold text-base">To,</p>
          <p className="font-bold text-base text-gray-900">
            {formData.candidateName || "_________________________"}
          </p>
          <p className="text-gray-700">
            Aadhaar No.{" "}
            <span className="font-medium text-gray-900">
              {formData.aadharNo || "_________________________"}
            </span>
          </p>
          <p className="text-gray-700">
            H.Q.{" "}
            <span className="font-medium text-gray-900">
              {formData.hq || "_________________________"}
            </span>
          </p>
        </div>
        <div>
          <p className="text-base">
            <strong>Date:</strong>{" "}
            <span className="border-b border-gray-400 pb-1">
              {formattedDate}
            </span>
          </p>
        </div>
      </div>

      <div className="mb-6 text-[13px]">
        <p className="font-bold underline mb-5 text-[15px]">
          Subject: Appointment for the Post of {rd.postHeader}
        </p>
        <p className="mb-4">
          Dear{" "}
          <span className="font-bold">
            {formData.candidateName || "[Candidate Name]"}
          </span>
          ,
        </p>
        <p className="mb-4 leading-relaxed text-justify">
          We are pleased to offer you the position of{" "}
          <span className="font-bold underline">{rd.postBody}</span> at{" "}
          <strong>Dairy Guruji</strong>. The details of your compensation,
          benefits, and terms and conditions are mentioned below:
        </p>
      </div>

      <div className="mb-6 text-[13px]">
        <h3 className="font-bold text-sm bg-gray-100 p-2 mb-3 border-l-4 border-green-600 uppercase tracking-wide">
          Compensation Structure
        </h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-2">
          <div className="flex gap-2">
            <span className="font-bold min-w-[140px]">Base Salary:</span>{" "}
            <span>₹{rd.baseSalary}/- per month (all inclusive)</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold min-w-[140px]">Activity Allowance:</span>{" "}
            <span>₹{rd.activityAllowance}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold min-w-[140px]">Fuel Allowance:</span>{" "}
            <span>
              ₹{rd.fuelAllowance}/km (up to 2,500 km/month, for 24 working days
              only)
            </span>
          </div>

          {rd.homeAllowance !== "0" && (
            <div className="flex gap-2">
              <span className="font-bold min-w-[140px]">Home Allowance:</span>{" "}
              <span>
                ₹{rd.homeAllowance}/- per month (if you work more than 22 days)
              </span>
            </div>
          )}
          {rd.dailyAllowance !== "0" && (
            <div className="flex gap-2">
              <span className="font-bold min-w-[140px]">Daily Allowance:</span>{" "}
              <span>
                ₹{rd.dailyAllowance}/- per day (if you work more than 22 days)
              </span>
            </div>
          )}
          {rd.bikeEMI !== "0" && (
            <div className="flex gap-2">
              <span className="font-bold min-w-[140px]">
                Bike/Car EMI Support:
              </span>{" "}
              <span>
                Up to ₹{rd.bikeEMI}/- (if a vehicle is provided by the company
                for business purposes)
              </span>
            </div>
          )}
          {rd.phoneAllowance !== "0" && (
            <div className="flex gap-2">
              <span className="font-bold min-w-[140px]">Phone Allowance:</span>{" "}
              <span>
                ₹{rd.phoneAllowance}/- (if sales achievement exceeds 60%)
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6 text-[13px]">
        <h3 className="font-bold text-sm bg-gray-100 p-2 mb-3 border-l-4 border-green-600 uppercase tracking-wide">
          Incentive Structure (Monthly Sales Target Achievement)
        </h3>
        <table className="w-full border-collapse border border-gray-300 text-left mb-2 text-xs">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="border border-gray-300 p-2 w-1/2">
                Achievement Level
              </th>
              <th className="border border-gray-300 p-2">Incentive Payout</th>
              {["SO", "SE", "SSO"].includes(role) && (
                <th className="border border-gray-300 p-2">
                  Mandatory Supplement
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {role === "ASM" ? (
              <>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    Less than 60% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    Fixed Base Salary (₹8,000 + Fuel)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    71% - 75% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹3,000/-
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    76% - 80% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹5,000/-
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    81% - 90% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹7,000/-
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    91% - 100% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹10,000/-
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    101% - 110% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹15,000/-
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    111% - 120% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹17,000/-
                  </td>
                </tr>

                <tr className="bg-green-100 font-bold text-green-900">
                  <td className="border border-gray-300 px-2 py-2">
                    Above 150% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    ₹1 lakh, inclusive of all components
                  </td>
                </tr>
              </>
            ) : role === "SI" ? (
              <>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    Less than 70% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    Fixed Base Salary (₹25,000 + EMI + Fuel)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    71% - 80% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">₹8,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    81% - 90% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹20,000
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    91% - 100% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹25,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    101% - 120% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹35,000
                  </td>
                </tr>
                <tr className="bg-green-100 font-bold text-green-900">
                  <td className="border border-gray-300 px-2 py-2">
                    121%+ achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-2">₹40,000</td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    50% - 55% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">₹500/-</td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹1000/-
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    56% - 60% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">₹750/-</td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹1500/-
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    61% - 65% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹1000/-
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹2000/-
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    66% - 70% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹2,500/-
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹4000/-
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    71% - 80% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹5,000/-
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹6000/-
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    81% - 90% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹7,500/-
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹8000/-
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1.5">
                    91% - 100% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹12,000/-
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹10,000/-
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1.5">
                    101% - 120% achievement
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹{rd.inc101to120}/-
                  </td>
                  <td className="border border-gray-300 px-2 py-1.5">
                    ₹12,000/-
                  </td>
                </tr>
                <tr className="bg-green-100 font-bold text-green-900">
                  <td className="border border-gray-300 px-2 py-2">
                    Above 150% achievement with {rd.incUltSuppl}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {rd.incUltTotal}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
