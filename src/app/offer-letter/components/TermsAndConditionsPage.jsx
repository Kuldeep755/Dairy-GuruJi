import React from "react";

export default function TermsAndConditionsPage({ role, rd }) {
  return (
    <div className="pdf-page w-[210mm] min-h-[297mm] print:w-full print:min-h-0 mx-auto print:mx-0 bg-white p-[20mm] shadow-lg print:shadow-none print:p-[15mm] relative text-[13px] shrink-0 print:block box-border">
      {role !== "SI" && (
        <div className="mb-6 mt-4">
          <h3 className="font-bold text-sm bg-gray-100 p-2 mb-3 border-l-4 border-green-600 uppercase tracking-wide">
            Additional Incentives & Targets
          </h3>
          <ul className="list-disc pl-5 space-y-1.5 text-justify">
            {role === "ASM" ? (
              <li>
                <strong>Qualification for Incentive:</strong> To qualify for any
                sales target incentive (Feed category), the following minimum
                supplement targets must be achieved: The ASM must achieve a
                minimum individual supplement business of ₹15,000.
              </li>
            ) : (
              <li>
                <strong>Qualification for Incentive:</strong> You will be
                eligible for the incentive only if you achieve both the feed
                target and the minimum mandatory supplement sale.
              </li>
            )}
            {role !== "ASM" && role !== "SI" && (
              <>
                <li>
                  <strong>6000+ Bags:</strong> 1000+ bags - ₹4 per bag extra
                  (T&C applied).
                </li>
                <li>
                  <strong>8000+ Bags:</strong> 1000+ bags - ₹4 per bag extra
                  (T&C applied).
                </li>
                <li>
                  <strong>10000+ Bags:</strong> 1000+ bags - ₹4 per bag extra
                  (T&C applied).
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {rd.probationText?.trim() && (
        <div className="mb-6">
          <h3 className="font-bold text-sm bg-gray-100 p-2 mb-3 border-l-4 border-green-600 uppercase tracking-wide">
            Probation Period
          </h3>
          <p className="text-justify leading-relaxed pl-2 bg-yellow-50 p-3 rounded border border-yellow-200">
            {rd.probationText}
          </p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-bold text-sm bg-gray-800 text-white p-2 mb-4 mt-6 uppercase tracking-wide text-center rounded-sm">
          Additional Terms & Conditions
        </h3>

        <h4 className="font-bold mt-4 mb-2 text-green-700">
          A. Reporting & Communication Policy
        </h4>
        <ul className="list-disc pl-5 space-y-1 mb-5 text-justify">
          <li>
            All sales targets, pay slips, and other important matters will be
            handled only by the HR department.
          </li>
          <li>
            No WhatsApp messages, phone calls, or verbal commitments will be
            considered valid.
          </li>
          <li>
            Only communication received through official email will be accepted.
          </li>
          <li>
            The official email communication must be sent by HR{" "}
            <strong>hr@dairyguruji.com</strong> and approved by{" "}
            <strong>bijenderagroupofficial@dairyguruji.com</strong>.
          </li>

          <li>
            You will be reporting to the Company State Incharge / State Head,
            and to the Dairy Guruji (Bijendera Group) Management.
          </li>
        </ul>

        <h4 className="font-bold mt-4 mb-2 text-green-700">
          B. General Employment Terms
        </h4>
        <ul className="list-disc pl-5 space-y-1.5 text-justify p-0 m-0">
          <li>
            You must comply with all company policies, guidelines, and reporting
            structures.
          </li>
          <li>
            No extra payment (overtime) will be given for additional working
            hours. The salary already includes payment for such extra work.
          </li>
          <li>
            Strictly no engagement with any other third-party companies during
            your employment.
          </li>
          <li>
            Either the Company or the Employee must give 4 weeks (28 days)
            notice to terminate employment. The Company may choose to pay basic
            salary in lieu of notice and relieve the employee immediately. The
            Employee may also leave early by paying salary for the remaining
            notice period, subject to Company approval.
          </li>
          <li>manufacturing
            Any violation of company policy or misconduct will result in
            immediate termination of employment.
          </li>
          <li>
            If your employment is terminated for any reason, you must return all
            company assets immediately.
          </li>
          <li>
            This offer letter will only be valid if you are not currently
            working for another company. If you are found working elsewhere, the
            company may take legal action against you and you will also be
            required to return your salary for the last three months.
          </li>

          {rd.hasTeamLogic && (
            <li>
              When you have a fully active team of 5 members, your individual
              target will be removed. In that case, your team target will be
              treated as your target until an individual target is assigned
              again.
            </li>
          )}

          <li className="font-bold underline">
            You must work for 24 days in a month, excluding holidays. If you
            work fewer than 24 days, your salary will be deducted accordingly.
          </li>
          <li>
            All legal disputes, if any, shall be resolved under the Gohana
            Judiciary only.
          </li>
          <li>
            The company&apos;s decision shall be final and binding in all
            matters.
          </li>
          <li>
            The company does not provide any overtime compensation for work
            performed beyond standard working hours.
          </li>

          {rd.hasTeamLogic && (
            <li>
              The Company may assign you a team target even if the team has
              fewer than 5 employees.
            </li>
          )}
        </ul>

        {role !== "SI" && (
          <>
            <h4 className="font-bold mt-4 mb-2 text-green-700">
              C. Daily Activity & Leave Policy
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-justify p-0 m-0">
              <li>
                Each employee must complete the following daily:{" "}
                <strong>
                  Minimum 8 farmer visits, Minimum 2 dealer visits, DPO visit
                  (if applicable), and hourly activity updates (mandatory)
                </strong>
                .
              </li>
              <li>
                All reports must be accurate and genuine. Submission of
                fake or incorrect reports is strictly prohibited. If you are
                found responsible for this, whether intentionally or
                unintentionally, you will not receive salary for that month.
              </li>
              <li>
                Any leave taken before 2:00 PM will not be considered as a
                half-day. In case of a half-day leave, the employee must
                complete a minimum of <strong>4 activities per hour</strong>{" "}
                during their working time.
              </li>
            </ul>
            <div className="text-red-800 bg-red-50 p-2.5 rounded border border-red-200 mt-2 shadow-sm leading-snug mb-2">
              <strong>⚠️ Penalty Clause:</strong> Any instance of fake/incorrect
              reporting, incomplete field activity, or failure in hourly updates
              will attract a{" "}
              <strong>penalty of ₹100 per employee (per head/day)</strong> along
              with possible strict disciplinary action in repeated cases.
            </div>
          </>
        )}
      </div>

      {role !== "ASM" && role !== "SI" && (
        <div className="mt-16 flex justify-between items-end border-t border-gray-300 pt-8">
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
      )}
    </div>
  );
}
