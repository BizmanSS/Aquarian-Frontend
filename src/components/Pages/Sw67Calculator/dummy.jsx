import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LanguageExamSelector = () => {
  const [primaryLanguage, setPrimaryLanguage] = useState('');
  const [secondaryLanguage, setSecondaryLanguage] = useState('');
  const [selectedPrimaryExam, setSelectedPrimaryExam] = useState('');
  const [selectedSecondaryExam, setSelectedSecondaryExam] = useState('');
  const [primaryScores, setPrimaryScores] = useState({
    reading: '',
    writing: '',
    listening: '',
    speaking: ''
  });
  const [secondaryScores, setSecondaryScores] = useState({
    reading: '',
    writing: '',
    listening: '',
    speaking: ''
  });
  const [primaryCLB, setPrimaryCLB] = useState(null);
  const [secondaryCLB, setSecondaryCLB] = useState(null);
  const [showSecondaryExam, setShowSecondaryExam] = useState(false);


  const handlePrimaryLanguageChange = (e) => {
    const selected = e.target.value;
    setPrimaryLanguage(selected);
    setSecondaryLanguage(selected === 'English' ? 'French' : 'English');
    setSelectedPrimaryExam('');
    setPrimaryScores({
      reading: '',
      writing: '',
      listening: '',
      speaking: ''
    });
    setPrimaryCLB(null);
    setShowSecondaryExam(false);
  };

  const handlePrimaryExamChange = (e) => {
    setSelectedPrimaryExam(e.target.value);
    setPrimaryScores({
      reading: '',
      writing: '',
      listening: '',
      speaking: ''
    });
    setPrimaryCLB(null);
  };

  const handleSecondaryExamChange = (e) => {
    setSelectedSecondaryExam(e.target.value);
    setSecondaryScores({
      reading: '',
      writing: '',
      listening: '',
      speaking: ''
    });
    setSecondaryCLB(null);
  };

  const handlePrimaryScoreChange = (e) => {
    setPrimaryScores({
      ...primaryScores,
      [e.target.name]: e.target.value
    });
  };

  const handleSecondaryScoreChange = (e) => {
    setSecondaryScores({
      ...secondaryScores,
      [e.target.name]: e.target.value
    });
  };

  const isPrimaryScoreComplete = () => {
    return Object.values(primaryScores).every(score => score !== '');
  };

  const isSecondaryScoreComplete = () => {
    return Object.values(secondaryScores).every(score => score !== '');
  };

  const calculatePrimaryCLB = () => {
    // Simple average calculation for demo - replace with actual CLB calculation logic
    const average = Object.values(primaryScores).reduce((a, b) => Number(a) + Number(b), 0) / 4;
    setPrimaryCLB(average);
    setShowSecondaryExam(true);
  };

  const calculateSecondaryCLB = () => {
    // Simple average calculation for demo - replace with actual CLB calculation logic
    const average = Object.values(secondaryScores).reduce((a, b) => Number(a) + Number(b), 0) / 4;
    setSecondaryCLB(average);
  };

  const renderScoreSelects = (examType, scores, handleChange) => {
    const getOptions = (skill) => {
      if (examType === 'IELTS') {
        if (skill === 'reading' || skill === 'listening') {
          return [
            { value: '10', label: '8-9' },
            { value: '9', label: '7-7.5' },
            { value: '8', label: '6.5' },
            { value: '7', label: '6' },
            { value: '6', label: '5-5.5' },
            { value: '5', label: '4-4.5' },
            { value: '4', label: '3.5' }
          ];
        } else {
          return [
            { value: '10', label: '7-9' },
            { value: '9', label: '6.5' },
            { value: '8', label: '6' },
            { value: '7', label: '5.5' },
            { value: '6', label: '5' },
            { value: '5', label: '4.5' },
            { value: '4', label: '4' }
          ];
        }
      }
      // Add other exam type options here
      return [];
    };

    return (
      <div className="grid grid-cols-2 gap-4 mt-4">
        {['reading', 'writing', 'listening', 'speaking'].map((skill) => (
          <div key={skill}>
            <label htmlFor={skill} className="block mb-2 capitalize">
              *{skill}
            </label>
            <select
              id={skill}
              name={skill}
              value={scores[skill]}
              onChange={handleChange}
              className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] text-md rounded-lg block w-full p-2.5 outline-none"
            >
              <option value="" disabled>Select</option>
              {getOptions(skill).map(opt => (
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

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <CardContent>
        <div className="space-y-6">
          {/* Primary Language Selection */}
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
              <option value="" disabled>Select Primary Language</option>
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>

          {/* Primary Language Exam Selection */}
          {primaryLanguage && (
            <div>
              <label htmlFor="primaryExam" className="block mb-2">
                {primaryLanguage} Exam
              </label>
              <select
                id="primaryExam"
                onChange={handlePrimaryExamChange}
                value={selectedPrimaryExam}
                className="border-[2px] border-[rgba(1,153,137,0.7)] text-gray-500 focus:border-[#019989] text-md rounded-lg block w-full p-2.5 outline-none"
              >
                <option value="" disabled>Select {primaryLanguage} Exam</option>
                {primaryLanguage === 'English' ? (
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
          )}

          {/* Primary Exam Scores */}
          {selectedPrimaryExam && (
            <>
              {renderScoreSelects(selectedPrimaryExam, primaryScores, handlePrimaryScoreChange)}
              <button
                onClick={calculatePrimaryCLB}
                disabled={!isPrimaryScoreComplete()}
                className="mt-4 px-4 py-2 bg-[#019989] text-white rounded-lg disabled:opacity-50"
              >
                Calculate Primary Language CLB Score
              </button>
            </>
          )}

          {/* Primary CLB Score Display */}
          {primaryCLB !== null && (
            <div className="w-full bg-gray-50 px-10 py-6 rounded-xl mb-8">
              <div className="font-semibold flex flex-col items-center">
                <div>
                  Your {primaryLanguage} CLB Score is{" "}
                  <span className="text-white px-3 py-1 bg-red-500 rounded-xl">
                    {Number.isInteger(primaryCLB) ? `${primaryCLB}.0` : primaryCLB.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Language Section */}
          {showSecondaryExam && (
            <>
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Secondary Language: {secondaryLanguage}</h3>
                <label htmlFor="secondaryExam" className="block mb-2">
                  {secondaryLanguage} Exam
                </label>
                <select
                  id="secondaryExam"
                  onChange={handleSecondaryExamChange}
                  value={selectedSecondaryExam}
                  className="border-[2px] border-[rgba(1,153,137,0.7)] text-gray-500 focus:border-[#019989] text-md rounded-lg block w-full p-2.5 outline-none"
                >
                  <option value="" disabled>Select {secondaryLanguage} Exam</option>
                  {secondaryLanguage === 'English' ? (
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
                  {renderScoreSelects(selectedSecondaryExam, secondaryScores, handleSecondaryScoreChange)}
                  <button
                    onClick={calculateSecondaryCLB}
                    disabled={!isSecondaryScoreComplete()}
                    className="mt-4 px-4 py-2 bg-[#019989] text-white rounded-lg disabled:opacity-50"
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
                        {Number.isInteger(secondaryCLB) ? `${secondaryCLB}.0` : secondaryCLB.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageExamSelector;


