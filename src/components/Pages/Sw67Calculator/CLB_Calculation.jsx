import React, { useState, useEffect } from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white w-auto h-auto mx-auto px-1 py-3 rounded-2xl flex flex-col gap-2 ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className=" pt-4">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3 className="font-semibold">{children}</h3>;
};

const CardContent = ({ children }) => {
  return <div className="px-4 pt-4">{children}</div>;
};

const CLB_Calculation = ({ onCalculationComplete }) => {
 
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [secondaryLanguage, setSecondaryLanguage] = useState("");
  const [selectedPrimaryExam, setSelectedPrimaryExam] = useState("");
  const [selectedSecondaryExam, setSelectedSecondaryExam] = useState("");
  const [primaryScores, setPrimaryScores] = useState({
    reading: "",
    writing: "",
    listening: "",
    speaking: "",
  });
  const [secondaryScores, setSecondaryScores] = useState({
    reading: "",
    writing: "",
    listening: "",
    speaking: "",
  });
  const [primaryCLB, setPrimaryCLB] = useState(null);
  const [secondaryCLB, setSecondaryCLB] = useState(null);
  const [showSecondaryExam, setShowSecondaryExam] = useState(false);

  // Effect to check when both values are calculated
  useEffect(() => {
    if (primaryCLB !== null) {
      onCalculationComplete(true, primaryCLB, secondaryCLB);
    }
  }, [primaryCLB, secondaryCLB, onCalculationComplete]);

  const handleInputChangeMinMax = (e) => {
    const inputValue = parseFloat(e.target.value);
    const min = parseFloat(e.target.min);
    const max = parseFloat(e.target.max);
    if (inputValue < min) {
      e.target.value = min;
    } else if (inputValue > max) {
      e.target.value = max;
    }
  };

  const handlePrimaryLanguageChange = (e) => {
    const selected = e.target.value;
    setPrimaryLanguage(selected);
    setSecondaryLanguage(selected === "English" ? "French" : "English");
    setSelectedPrimaryExam("");
    setPrimaryScores({
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
    });
    setPrimaryCLB(null);
    setShowSecondaryExam(false);
  };

  const handlePrimaryExamChange = (e) => {
    setSelectedPrimaryExam(e.target.value);
    setPrimaryScores({
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
    });
    setPrimaryCLB(null);
  };

  const handleSecondaryExamChange = (e) => {
    setSelectedSecondaryExam(e.target.value);
    setSecondaryScores({
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
    });
    setSecondaryCLB(null);
  };

  const handlePrimaryScoreChange = (e) => {
    handleInputChangeMinMax(e);
    setPrimaryScores({
      ...primaryScores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSecondaryScoreChange = (e) => {
    handleInputChangeMinMax(e);
    setSecondaryScores({
      ...secondaryScores,
      [e.target.name]: e.target.value,
    });
  };

  const isPrimaryScoreComplete = () => {
    return Object.values(primaryScores).every(
      (score) => score !== ""
    ); /* return true if all field are filled */

    /*  return Object.values(primaryScores).filter(score => score === '').length === 0; (alternative) */
  };

  const isSecondaryScoreComplete = () => {
    return Object.values(secondaryScores).every((score) => score !== "");
  };

  const calculatePrimaryCLB = (e) => {
    e.preventDefault();

    const { reading, writing, listening, speaking } = primaryScores;
    // Convert strings to integers and handle invalid or empty values by defaulting to 0
    const parsedScores = [
      parseInt(reading, 10) || 0,
      parseInt(writing, 10) || 0,
      parseInt(listening, 10) || 0,
      parseInt(speaking, 10) || 0,
    ];

    // Use Math.min with parsed scores
    const ptotal = Math.min(...parsedScores);

    console.log("primary ", primaryScores);
    console.log("parsedScores", parsedScores);
    console.log("ptotal", ptotal);
    setPrimaryCLB(ptotal);
    setShowSecondaryExam(true);
  };

  const calculateSecondaryCLB = (e) => {
    e.preventDefault();

    const { reading, writing, listening, speaking } = secondaryScores;
    const stotal = Math.min(
      parseInt(reading, 10),
      parseInt(writing, 10),
      parseInt(listening, 10),
      parseInt(speaking, 10)
    );
    setSecondaryCLB(stotal);
  };

  const renderScoreSelects = (
    examType,
    languageScores,
    handleLanguageScoreChange
  ) => {
    const getOptions = (skill) => {
      if (examType === "IELTS") {
        if (skill === "reading") {
          return [
            { value: "10", label: "8-9" },
            { value: "9", label: "7-7.5" },
            { value: "8", label: "6.5" },
            { value: "7", label: "6" },
            { value: "6", label: "5-5.5" },
            { value: "5", label: "4-4.5" },
            { value: "4", label: "3.5" },
          ];
        } else if (skill === "listening") {
          return [
            { value: "10", label: "8.5-9" },
            { value: "9", label: "8" },
            { value: "8", label: "7.5" },
            { value: "7", label: "6-7" },
            { value: "6", label: "5.5" },
            { value: "5", label: "5" },
            { value: "4", label: "4.5" },
          ];
        } else if (skill === "writing" || skill === "speaking") {
          return [
            { value: "10", label: "7.5-9" },
            { value: "9", label: "7" },
            { value: "8", label: "6.5" },
            { value: "7", label: "6" },
            { value: "6", label: "5.5" },
            { value: "5", label: "5" },
            { value: "4", label: "4-4.5" },
          ];
        }
      } else if (examType === "CELPIP") {
        // All skills (reading, listening, writing, speaking) have the same options for CELPIP
        return [
          { value: "10", label: "10" },
          { value: "9", label: "9" },
          { value: "8", label: "8" },
          { value: "7", label: "7" },
          { value: "6", label: "6" },
          { value: "5", label: "5" },
          { value: "4", label: "4" },
          { value: "3", label: "3" },
        ];
      } else if (examType === "PTE") {
        if (skill === "reading") {
          return [
            { value: "10", label: "88-90" },
            { value: "9", label: "78-87" },
            { value: "8", label: "69-77" },
            { value: "7", label: "60-68" },
            { value: "6", label: "51-59" },
            { value: "5", label: "42-50" },
            { value: "4", label: "33-41" },
            { value: "3", label: "24-32" },
          ];
        } else if (skill === "listening") {
          return [
            { value: "10", label: "88-90" },
            { value: "9", label: "82-88" },
            { value: "8", label: "71-81" },
            { value: "7", label: "60-70" },
            { value: "6", label: "50-59" },
            { value: "5", label: "39-49" },
            { value: "4", label: "28-38" },
            { value: "3", label: "18-27" },
          ];
        } else if (skill === "writing") {
          return [
            { value: "10", label: "90" },
            { value: "9", label: "88-89" },
            { value: "8", label: "79-87" },
            { value: "7", label: "69-78" },
            { value: "6", label: "60-68" },
            { value: "5", label: "51-59" },
            { value: "4", label: "41-50" },
            { value: "3", label: "32-40" },
          ];
        } else if (skill === "speaking") {
          return [
            { value: "10", label: "89-90" },
            { value: "9", label: "84-88" },
            { value: "8", label: "76-83" },
            { value: "7", label: "68-75" },
            { value: "6", label: "59-67" },
            { value: "5", label: "51-58" },
            { value: "4", label: "42-50" },
            { value: "3", label: "34-41" },
          ];
        }
      } else if (examType === "TCF") {
        if (skill === "reading") {
          return [
            { value: "10", label: "549-699" },
            { value: "9", label: "524-548" },
            { value: "8", label: "499-523" },
            { value: "7", label: "453-498" },
            { value: "6", label: "406-452" },
            { value: "5", label: "375-405" },
            { value: "4", label: "342-374" },
          ];
        } else if (skill === "listening") {
          return [
            { value: "10", label: "549-699" },
            { value: "9", label: "523-548" },
            { value: "8", label: "503-522" },
            { value: "7", label: "458-502" },
            { value: "6", label: "406-452" },
            { value: "5", label: "375-405" },
            { value: "4", label: "342-374" },
          ];
        } else if (skill === "writing" || skill === "speaking") {
          return [
            { value: "10", label: "16-20" },
            { value: "9", label: "14-15" },
            { value: "8", label: "12-13" },
            { value: "7", label: "10-11" },
            { value: "6", label: "7-9" },
            { value: "5", label: "6-6" },
            { value: "4", label: "4-5" },
          ];
        }
      } else if (examType === "TEF") {
        if (skill === "reading") {
          return [
            { value: "10", label: "263-300" },
            { value: "9", label: "248-262" },
            { value: "8", label: "233-247" },
            { value: "7", label: "207-232" },
            { value: "6", label: "181-206" },
            { value: "5", label: "151-180" },
            { value: "4", label: "121-150" },
          ];
        } else if (skill === "listening") {
          return [
            { value: "10", label: "316-360" },
            { value: "9", label: "298-315" },
            { value: "8", label: "280-297" },
            { value: "7", label: "249-279" },
            { value: "6", label: "217-248" },
            { value: "5", label: "181-216" },
            { value: "4", label: "145-180" },
          ];
        } else if (skill === "writing" || skill === "speaking") {
          return [
            { value: "10", label: "393-450" },
            { value: "9", label: "371-392" },
            { value: "8", label: "349-370" },
            { value: "7", label: "310-348" },
            { value: "6", label: "271-309" },
            { value: "5", label: "226-270" },
            { value: "4", label: "181-225" },
          ];
        }
      }
    };

    return (
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-4">
        {["reading", "writing", "listening", "speaking"].map((skill) => (
          <div key={skill}>
            <label htmlFor={skill} className="block mb-2 capitalize">
              *{skill}
            </label>
            <select
              id={skill}
              name={skill}
              value={languageScores[skill]}
              onChange={handleLanguageScoreChange}
              className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] text-md rounded-lg block w-full p-2.5 outline-none"
            >
              <option value="" disabled>
                Select
              </option>
              {getOptions(skill).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  };

  const handleClick = () => {
    console.log("clicked");

    // Scroll to the showresult element
    const showResultElement = document.getElementById("showresult");
    if (showResultElement) {
      const scrollPosition = showResultElement.offsetTop - 250;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }

    // Automatically prompt for secondary language scores
    if (primaryLanguage === "English") {
      setSecondaryLanguage("French");
    } else if (primaryLanguage === "French") {
      setSecondaryLanguage("English");
    }
  };

  const ResultData = ({ languageSelected, languageScore }) => {
    return (
      <div
        id={languageSelected}
        className="w-full bg-gray-50 px-10 py-6 rounded-xl mb-8 mt-4"
      >
        <div className="font-semibold flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4">
            <div>
              Your {languageSelected} CLB Score is{" "}
              <span className=" mt-6 mb-3 text-white px-3 py-1 bg-red-500 bold rounded-xl ">
                {Number.isInteger(languageScore)
                  ? `${languageScore}.0`
                  : languageScore}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div>
          <label htmlFor="primaryLanguage" className="block mb-2">
            Primary Language
          </label>
          <select
            id="primaryLanguage"
            onChange={handlePrimaryLanguageChange}
            value={primaryLanguage}
            className="border-[2px] border-[rgba(1,153,137,0.7)] text-gray-500 focus:border-[#019989] text-md rounded-lg block w-full p-2.5 outline-none"
          >
            <option value="" disabled>
              Select Primary Language
            </option>
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
        </div>

        {/* Primary Language Exam Selection */}

        {primaryLanguage && (
          <div>
            <CardHeader>
              <label htmlFor="primaryExam" className="block mb-2">
                {primaryLanguage} Exam
              </label>
              <select
                id="primaryExam"
                onChange={handlePrimaryExamChange}
                value={selectedPrimaryExam}
                className="border-[2px] border-[rgba(1,153,137,0.7)] text-gray-500 focus:border-[#019989] text-md rounded-lg block w-full p-2.5 outline-none"
              >
                <option value="" disabled>
                  Select {primaryLanguage} Exam
                </option>
                {primaryLanguage === "English" ? (
                  <>
                    <option value="IELTS">IELTS (English)</option>
                    <option value="CELPIP">CELPIP (English)</option>
                    <option value="PTE">PTE (English)</option>
                  </>
                ) : (
                  <>
                    <option value="TCF">TCF (French)</option>
                    <option value="TEF">TEF (French)</option>
                  </>
                )}
              </select>
            </CardHeader>
          </div>
        )}

        {/* Primary Exam Scores */}
        {selectedPrimaryExam && (
          <>
            {renderScoreSelects(
              selectedPrimaryExam,
              primaryScores,
              handlePrimaryScoreChange
            )}
            <button
              onClick={calculatePrimaryCLB}
              disabled={!isPrimaryScoreComplete()}
              className="mt-4 px-4 py-2 bg-[#019989] text-white rounded-lg disabled:opacity-50 "
              style={{
                display: "flex",
                margin: "auto",
                marginTop: "25px",
                lineHeight: "24px",
              }}
            >
              Calculate Primary Language CLB Score
            </button>
          </>
        )}

        {/* Primary CLB Score Display */}
        {primaryCLB !== null && (
          <div className="w-full bg-gray-50 px-10 py-6 rounded-xl mb-8">
            {console.log("pp ", primaryCLB)}
            <div className="font-semibold flex flex-col items-center">
              <div>
                Your {primaryLanguage} CLB Score is{" "}
                <span className=" mt-6 mb-3 text-white px-3 py-1 bg-red-500 bold rounded-xl ">
                  {Number.isInteger(primaryCLB)
                    ? `${primaryCLB}.0`
                    : primaryCLB}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Language Section */}
        {showSecondaryExam && (
          <>
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">
                Secondary Language: {secondaryLanguage} (Optional)
              </h3>
              <label htmlFor="secondaryExam" className="block mb-2">
                {secondaryLanguage} Exam
              </label>
              <select
                id="secondaryExam"
                onChange={handleSecondaryExamChange}
                value={selectedSecondaryExam}
                className="border-[2px] border-[rgba(1,153,137,0.7)] text-gray-500 focus:border-[#019989] text-md rounded-lg block w-full p-2.5 outline-none"
              >
                <option value="" disabled>
                  Select {secondaryLanguage} Exam
                </option>
                {secondaryLanguage === "English" ? (
                  <>
                    <option value="IELTS">IELTS (English)</option>
                    <option value="CELPIP">CELPIP (English)</option>
                    <option value="PTE">PTE (English)</option>
                  </>
                ) : (
                  <>
                    <option value="TCF">TCF (French)</option>
                    <option value="TEF">TEF (French)</option>
                  </>
                )}
              </select>
            </div>

            {selectedSecondaryExam && (
              <>
                {renderScoreSelects(
                  selectedSecondaryExam,
                  secondaryScores,
                  handleSecondaryScoreChange
                )}
                <button
                  onClick={calculateSecondaryCLB}
                  disabled={!isSecondaryScoreComplete()}
                  className="mt-4 px-4 py-2 bg-[#019989] text-white rounded-lg disabled:opacity-50"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginTop: "25px",
                    lineHeight: "24px",
                  }}
                >
                  Calculate Secondary Language CLB Score
                </button>
              </>
            )}

            {/* Secondary CLB Score Display */}
            {secondaryCLB !== null && (
              <div className="w-full bg-gray-50 px-10 py-6 rounded-xl mb-8">
                <div className="font-semibold flex flex-col items-center">
                  <div>
                    Your {secondaryLanguage} CLB Score is{" "}
                    <span className="text-white px-3 py-1 bg-red-500 rounded-xl">
                      {Number.isInteger(secondaryCLB)
                        ? `${secondaryCLB}.0`
                        : secondaryCLB.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </CardHeader>
    </Card>
  );
};

export default CLB_Calculation;
