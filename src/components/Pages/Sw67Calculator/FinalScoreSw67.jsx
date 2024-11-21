import React, { useState, useEffect } from "react";

const EligibilityProfile = ({
  isValidatedCLB,
  score,
  languageScore,
  educationScore,
  workScore,
  ageScore,
  arrangedScore,
  adaptabilityScore,
}) => {
  const factors = [
    { name: "Language skills points", score: languageScore },
    { name: "Education points", score: educationScore },
    { name: "Work experience points", score: workScore },
    { name: "Age points", score: ageScore },
    { name: "Arranged employment in Canada points", score: arrangedScore},
    { name: "Adaptability points", score: adaptabilityScore },
  ];

  console.log(
    "final ",
    isValidatedCLB,
    languageScore,
    educationScore,
    workScore,
    ageScore,
    adaptabilityScore
  );

  const isEligible = (languageScore+
    educationScore+
    workScore+
    ageScore+
    arrangedScore+
    adaptabilityScore >= 67);

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden">
        <div className="pt-6 pb-2 text-center">
          <h1 className="text-2xl font-bold text-blue-900">
            {isEligible
              ? "Congratulations! Your Profile is Eligible"
              : "*Sorry! Your Profile is Not Eligible"}
          </h1>
          {!isValidatedCLB ? (
            <p className="text-red-500 mt-2">
              Your Primary CLB score is less than 5
            </p>
          ) : null}
        </div>

        <div className="px-6 pb-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">
              Your Score :{" "}
              {languageScore +
                educationScore +
                workScore +
                ageScore +
                adaptabilityScore}
            </h2>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left bg-gray-50 font-semibold w-1/2">
                    Factor
                  </th>
                  <th className="py-3 px-4 text-left bg-gray-50 font-semibold w-1/2">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {factors.map((factor, index) => (
                  <tr
                    key={factor.name}
                    className={`border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors`}
                  >
                    <td className="py-3 px-4">{factor.name}</td>
                    <td className="py-3 px-4">{factor.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            *Your final eligibility depends on several factors, so we recommend
            contacting our counselor to get a more accurate assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EligibilityProfile;
