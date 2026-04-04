import React from "react";

export default function AsmSpecificPage() {
  return (
    <div className="pdf-page w-[210mm] min-h-[297mm] print:w-full print:min-h-0 mx-auto print:mx-0 bg-white p-[20mm] shadow-lg print:shadow-none print:p-[15mm] relative text-[13px] shrink-0 flex flex-col box-border">
      <div className="flex-1">
        <h3 className="font-bold text-sm bg-gray-800 text-white p-2 mb-4 mt-2 uppercase tracking-wide text-center rounded-sm">
          ASM Specific Operations & Policies
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-green-700 text-[14px] mb-1">
              1. Team Maintenance & Strength
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-justify">
              <li>
                Every Area Sales Manager (ASM) must maintain a minimum team size
                of <strong>6 active Sales Officers (SOs) at all times</strong>.
              </li>
              <li>
                This requirement will remain applicable until new joinings are
                completed and the team is stabilized.
              </li>
              <li>
                The ASM will be fully responsible for recruitment, onboarding,
                and team stability.
              </li>
            </ul>
            <div className="p-2.5  mt-2 leading-snug ">
              <strong> Penalty Clause:</strong> If the team size falls below 6
              members at any time, a{" "}
              <strong>deduction of ₹5,000 per month</strong> will be applied
              until the required team strength is restored. Continuous failure
              to maintain team strength may also lead to performance review and
              further disciplinary action.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-green-700 text-[14px] mb-1">
              2. SO Performance Management
            </h4>
            <div className="p-2.5  leading-snug  mt-1">
              <strong>Penalty Clause:</strong> If any Sales Officer (SO) in
              the team performs{" "}
              <strong>below 30% of the assigned target</strong>, a{" "}
              <strong>
                deduction of ₹1,000 per underperforming Sales Officer
              </strong>{" "}
              will be applied to the responsible senior (ASM).
            </div>
          </div>

          <div>
            <h4 className="font-bold text-green-700 text-[14px] mb-1">
              3. Company Vehicle & Expense Policy
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-justify">
              <li>
                The company-provided vehicle must be used strictly for official
                business purposes. If the assigned company vehicle is not used,
                then <strong>no fuel allowance</strong> will be provided.
              </li>
              <li>
                No employee shall incur expenses on behalf of the company
                without prior approval and advance payment from the company. Any
                expense made without approval or advance will not be reimbursed
                under any circumstances.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-green-700 text-[14px] mb-1">
              4. Discipline & Professional Conduct
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-justify">
              <li>
                All team members are required to maintain proper discipline and
                professional conduct at all times, including proper dress code,
                professional appearance, regular field reporting, and daily
                activity submission.
              </li>
            </ul>
            <div className=" p-2.5  mt-2 leading-snug">
              <strong> Penalty Clause:</strong> If any of the above
              responsibilities are not followed by any team member, a{" "}
              <strong>penalty of ₹250 per employee (per instance)</strong> will
              be applied to the responsible ASM.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-green-700 text-[14px] mb-1">
              5. Weekly Visit Policy
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-justify">
              <li>
                <strong>Weekly Field Visit (ASM):</strong> It is mandatory for
                the ASM to accompany each Sales Officer (SO) at least one day
                per week for field visits.
              </li>
            </ul>
            <div className=" p-2.5  mt-2 leading-snug mb-4">
              <strong> Penalty Clause:</strong> If the weekly visit is not
              completed, a{" "}
              <strong>deduction of ₹2,000 per missed visit</strong> will be
              applied.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-end border-t border-gray-300 pt-8 w-full mt-auto">
        <div className="text-sm">
          <p className="mb-10 text-gray-700">With Best Regards,</p>
          <p className="font-bold text-gray-900">
            For Dairy Guruji (Bijendera Group)
          </p>
          <div className="border-t border-gray-500 w-56 mt-16 pt-2 text-center text-xs">
            <p className="font-bold text-gray-800">Name</p>
            <p className="text-gray-600">(State Incharge)</p>
          </div>
        </div>

        <div className="border-2 border-green-100 p-6 rounded-lg bg-green-50 flex-col items-center w-72 shadow-sm text-sm">
          <p className="font-bold mb-6 text-center border-b border-green-200 pb-3 text-green-800 uppercase tracking-wide">
            Accepted & Signed By
          </p>
          <div className="space-y-6 text-gray-800 font-medium">
            <div className="flex justify-between items-end">
              <span className="w-1/3">Name:</span>
              <span className="border-b border-gray-400 w-2/3 pb-1 inline-block"></span>
            </div>
            <div className="flex justify-between items-end">
              <span className="w-1/3">Date:</span>
              <span className="border-b border-gray-400 w-2/3 pb-1 inline-block"></span>
            </div>
            <div className="flex justify-between items-end mt-4">
              <span className="w-1/3">Signature:</span>
              <span className="border-b border-gray-400 w-2/3 pb-1 inline-block h-8"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
