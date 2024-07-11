import React, { useState, useEffect } from 'react';
import banner from '../../../Assets/Rectangle 156.png';
import QuestionCrs from './QuestionCrs';
import questionConfig from './questionConfig';
import '../../../styles/CrsCalculator.css';
import { scoreMapPws, scoreMapPWOS, secDScore } from './scoreMap';
import ProgressBar from './ProgressBar';
const CrsForm = () => {

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const calculateScore = () => {
    setShowFinalScore(false)
    let newScore = 0
    let scoreMap = scoreMapPws //change a bit here
    let maxA = 460 //change?
    let secC = 0
    if ((answers[1] === "M" || answers[1] === "CL") && (answers[5] === "yes")) //PWS - calculate section 3 first
    {
      console.log(scoreMap[9]?.[answers[9]] ?? 0, "hello")
      secC += scoreMap[9]?.[answers[9]] ?? 0 //spouse qualifications
      secC += scoreMap[11]?.[answers[11]] ?? 0 //spouse canada exp

      switch (answers[10])  //spouse language
      {
        case "IELTS":
          {
            secC += (scoreMap[10][answers[10.11]] ?? 0) + (scoreMap[10][answers[10.12]] ?? 0)
              + (scoreMap[10][answers[10.13]] ?? 0) + (scoreMap[10][answers[10.14]] ?? 0)
            break;
          }
        case "PTE":
          {
            secC += (scoreMap[10][answers[10.21]] ?? 0) + (scoreMap[10][answers[10.22]] ?? 0)
              + (scoreMap[10][answers[10.23]] ?? 0) + (scoreMap[10][answers[10.24]] ?? 0)
            break;
          }
        case "CEL":
          {
            secC += (scoreMap[10][answers[10.31]] ?? 0) + (scoreMap[10][answers[10.32]] ?? 0)
              + (scoreMap[10][answers[10.33]] ?? 0) + (scoreMap[10][answers[10.34]] ?? 0)
            break;
          }
        case "TEF":
          {
            secC += (scoreMap[10][answers[10.41]] ?? 0) + (scoreMap[10][answers[10.42]] ?? 0)
              + (scoreMap[10][answers[10.43]] ?? 0) + (scoreMap[10][answers[10.44]] ?? 0)
            break;
          }
        case "TCF":
          {
            secC += (scoreMap[10][answers[10.51]] ?? 0) + (scoreMap[10][answers[10.52]] ?? 0)
              + (scoreMap[10][answers[10.53]] ?? 0) + (scoreMap[10][answers[10.54]] ?? 0)
            break;
          }
      }

      secC = secC > 40 ? 40 : secC
    }
    else //PWOS
    {
      scoreMap = scoreMapPWOS
      maxA = 500
    }

    let secA = 0
    secA += scoreMap[2]?.[answers[2]] ?? 0 // age
    secA += scoreMap[3]?.[answers[3]] ?? 0 // Qualifications
    secA += scoreMap[8]?.[answers[8]] ?? 0  //Canada Exp

    let eng = undefined
    let fr = undefined
    if (answers[5.5] == "ENG") //default French?
    {
      eng = "FL"
      fr = "SL"
    }
    else {
      eng = "SL"
      fr = "FL"
    }
    let ClbLang = { //initial 3(lowest) - score: 0
      "FL": {
        "R": 3,
        "W": 3,
        "L": 3,
        "S": 3
      },
      "SL": {
        "R": 3,
        "W": 3,
        "L": 3,
        "S": 3
      }
    }

    switch (answers[6]) //English 
    {
      case "IELTS":
        {
          ClbLang[eng]["R"] = answers[6.11] ?? 3
          ClbLang[eng]["W"] = answers[6.12] ?? 3
          ClbLang[eng]["L"] = answers[6.13] ?? 3
          ClbLang[eng]["S"] = answers[6.14] ?? 3
          break;
        }
      case "PTE":
        {
          ClbLang[eng]["R"] = answers[6.21] ?? 3
          ClbLang[eng]["W"] = answers[6.22] ?? 3
          ClbLang[eng]["L"] = answers[6.23] ?? 3
          ClbLang[eng]["S"] = answers[6.24] ?? 3
          break;
        }
      case "CEL":
        {
          ClbLang[eng]["R"] = answers[6.31] ?? 3
          ClbLang[eng]["W"] = answers[6.32] ?? 3
          ClbLang[eng]["L"] = answers[6.33] ?? 3
          ClbLang[eng]["S"] = answers[6.34] ?? 3
          break;
        }
    }

    secA += scoreMap[eng][ClbLang[eng]["R"]] + scoreMap[eng][ClbLang[eng]["W"]] +
      scoreMap[eng][ClbLang[eng]["L"]] + scoreMap[eng][ClbLang[eng]["S"]]

    switch (answers[7]) { //French
      case "TEF":
        {
          ClbLang[fr]["R"] = answers[7.11] ?? 3
          ClbLang[fr]["W"] = answers[7.12] ?? 3
          ClbLang[fr]["L"] = answers[7.13] ?? 3
          ClbLang[fr]["S"] = answers[7.14] ?? 3
          break;
        }
      case "TCF":
        {
          ClbLang[fr]["R"] = answers[7.21] ?? 3
          ClbLang[fr]["W"] = answers[7.22] ?? 3
          ClbLang[fr]["L"] = answers[7.23] ?? 3
          ClbLang[fr]["S"] = answers[7.24] ?? 3
          break;
        }
    }

    secA += scoreMap[fr][ClbLang[fr]["R"]] + scoreMap[fr][ClbLang[fr]["W"]] +
      scoreMap[fr][ClbLang[fr]["L"]] + scoreMap[fr][ClbLang[fr]["S"]]

    secA = secA > maxA ? maxA : secA


    //Section D
    let secD = 0

    if (ClbLang.FL.R >= 9 && ClbLang.FL.W >= 9 && ClbLang.FL.S >= 9 && ClbLang.FL.L >= 9) //skill 1 and 3 - case 1
    {
      secD += secDScore.Sk_Case1[answers[3]] ?? 0
      secD += secDScore.Sk34_Case1[answers[12]] ?? 0
      if (answers[13] === "yes") { secD += 50 } //skill 5 case 1
    }
    else if (ClbLang.FL.R >= 7 && ClbLang.FL.W >= 7 && ClbLang.FL.S >= 7 && ClbLang.FL.L >= 7) //skill 1 and 3 - case 2
    {
      if (answers[13] === "yes") { secD += 50 } //skill 5 case 1
      if (ClbLang.FL.R >= 9 || ClbLang.FL.W >= 9 || ClbLang.FL.S >= 9 || ClbLang.FL.L >= 9) {
        secD += secDScore.Sk_Case2[answers[3]] ?? 0
        secD += secDScore.Sk34_Case2[answers[12]] ?? 0
      }
    }

    if (answers[8] === "B") //skill 2 and 4 - case 2
    {
      secD += secDScore.Sk_Case2[answers[3]] ?? 0
      secD += secDScore.Sk34_Case2[answers[12]] ?? 0
    }
    else if (answers[8] && answers[8] !== "Default" && answers[8] !== "A") // skill 2 and 4- case 1
    {
      secD += secDScore.Sk_Case1[answers[3]] ?? 0
      secD += secDScore.Sk34_Case1[answers[12]] ?? 0
    }

    if (ClbLang.FL.R >= 5 && ClbLang.FL.W >= 5 && ClbLang.FL.S >= 5 && ClbLang.FL.L >= 5) {
      if (ClbLang.FL.R < 7 || ClbLang.FL.W < 7 || ClbLang.FL.S < 7 || ClbLang.FL.L < 7) {
        if (answers[13] === "yes") { secD += 25 } //skill 5 case 2
      }
    }

    secD = secD > 100 ? 100 : secD

    let secE = 0

    if (answers[17] === "yes") //a
    {
      secE += 15
    }

    if (ClbLang[fr].R >= 7 && ClbLang[fr].W >= 7 && ClbLang[fr].S >= 7 && ClbLang[fr].L >= 7) {
      if (ClbLang[eng].R <= 4 || ClbLang[eng].W <= 4 || ClbLang[eng].S <= 4 || ClbLang[eng].L <= 4) {
        secE += 25 //b
      }
      else {
        secE += 50 //c
      }
    }

    if (answers[3.2] === "B") {
      secE += 15 //d
    }
    else if (answers[3.2] === "C" || answers[3.2] === "D") {
      secE += 30 //e
    }

    if (answers[15] == "A") {
      secE += 200
    }
    else if (answers[15] == "B") {
      secE += 50
    }

    if (answers[16] === "yes") {
      secE += 600
    }

    secE = secE > 600 ? 600 : secE

    console.log("secA: ", secA, " secC: ", secC, " secD: ", secD, "secE", secE)

    newScore = secA + secC + secD + secE

    setScore(newScore)
  }

  useEffect(() => {
    if (answers.length != 0) { calculateScore(); } // Recalculate the score whenever answers change
  }, [answers]);

  const handleChange = (id, value, name = '') => {
    const newAnswers = { ...answers, [id]: value };
    const currentQuestionIndex = questionConfig.findIndex(q => q.id.toString() === id);

    for (let i = currentQuestionIndex + 1; i < questionConfig.length; i++) {
      const question = questionConfig[i];
      if (!question.condition(newAnswers)) {
        delete newAnswers[question.id];
      }
    }
    console.log(newAnswers);
    setAnswers(newAnswers);
  };

  const validateAndCalculateScore = () => {
    const newErrors = {};
    let allFilled = true;

    questionConfig.forEach(question => {
      if (question.condition(answers)) {  // Check if the question should be rendered
        const answerValue = answers[question.id];
        // Validate the answer for the rendered question
        if (!answerValue || answerValue === "Default") {
          newErrors[question.id] = true; // Mark this field as having an error
          allFilled = false; // Set to false if any are unfilled or 'Default'
        }
      }
    });

    setErrors(newErrors);

    if (allFilled) {
      console.log("Final validation and score calculation");
      setShowFinalScore(true);
      setShowError(false);  // Hide error message if all fields are valid
    } else {
      setShowFinalScore(false);
      setShowError(true);  // Show error message if not all fields are valid
    }
  }


  return (
    <div>
      <div className='flex flex-col md:flex-row items-start'>
        <div className="crs-form-container">
          <div className="p4">{questionConfig.map(question => (
            question.condition(answers) && (
              <QuestionCrs
                key={question.id}
                id={question.id.toString()}
                questionText={question.text}
                options={question.options}
                onChange={handleChange}
                error={errors[question.id]}
                width= {question.width}
              />
            )
          ))}</div>
          {answers[17] &&
            <button
              className="bg-[#01F9E1] font-normal text-black px-4 py-2 rounded-[10px] text-[16px] hover:scale-105 transition ease-in delay-60 duration-150 mr-10"
              onClick={validateAndCalculateScore}>
              Validate and Calculate Final Score
            </button>
          }
          {showError && <div className="error-message">Please complete all highlighted fields.</div>}
          {showFinalScore && (
            <div>
              <div className="text-green-500 text-lg font-semibold">
                Validated <span className="tick-icon">&#10004;</span>
              </div>
              <div className="crs-final-score-display">Your Final CRS Score: {score}</div>
            </div>
          )}
        </div>
        {(!answers[17] || !showFinalScore) &&
          <div className="crs-score-display sticky top-10">
            <ProgressBar progress={(score / 1200) * 100} />
            CRS Score: {score} / 1200</div>
        }
      </div>
    </div>
  );
};

export default CrsForm;
