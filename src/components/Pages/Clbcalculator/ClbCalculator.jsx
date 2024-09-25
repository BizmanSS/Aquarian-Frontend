import React, { useEffect, useState } from "react";
import freeicon from "../../../Assets/freeicon.png";
import intlstd from "../../../Assets/intlstndicon.png";
import precenticon from "../../../Assets/100icon.png";
import easyicon from "../../../Assets/easyicon.png";
import ielts from "../../../Assets/exam-logo/ielts.png";
import toefl from "../../../Assets/exam-logo/toefl.png";
import duolingo from "../../../Assets/exam-logo/duolingo.png";
import pearson from "../../../Assets/exam-logo/pearson.png";
import gre from "../../../Assets/exam-logo/gre.png";
import celpip from "../../../Assets/exam-logo/celpip.png";
import Confetti from "react-confetti";
import trophy from "../../../Assets/trophy.png";
import IltsTable from "../../ClbCalculator.jsx/IltsTable";
import CelpipTable from "../../ClbCalculator.jsx/CelpipTable";
import TcfTable from "../../ClbCalculator.jsx/TcfTable";
import TefTable from "../../ClbCalculator.jsx/TefTable";
import PteTable from "../../ClbCalculator.jsx/PteTable";

const ClbCalculator = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);
  const [total, setTotal] = useState(null);
  const [selectedExam, setSelectedExam] = useState("choose");
  const [inputData, setInputData] = useState({
    reading: null,
    writing: null,
    listening: null,
    speaking: null,
  });
  // const [inputData, setInputData] = useState({ reading: '', writing: '', listening: '', speaking: '' });

  const [showResult, setShowResult] = useState(false);

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
  const handleInputChange = (e) => {
    handleInputChangeMinMax(e);
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleExamChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedExam(selectedValue);

    // Alert if "Choose your exam" is selected
    if (selectedValue === "choose") {
      alert("Please select a valid exam.");
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!inputData) return;
    const { reading, writing, listening, speaking } = inputData;
    const total = Math.min(reading, writing, listening, speaking);
    setTotal(total);
    setShowResult(true);
    if (total >= 5) {
      setConfettiActive(true);
      setTimeout(() => {
        setConfettiActive(false);
      }, [3000]);
    }

    // Scroll to the showresult element
    const showResultElement = document.getElementById("showresult");
    if (showResultElement) {
      const scrollPosition = showResultElement.offsetTop - 250;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }

    return total;
  };
  useEffect(() => {
    if (showResult) {
      const showResultElement = document.getElementById("showresult");
      if (showResultElement) {
        const scrollPosition = showResultElement.offsetTop - 250;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    }
  }, [showResult]);

  useEffect(() => {
    if (
      inputData.reading &&
      inputData.writing &&
      inputData.listening &&
      inputData.speaking &&
      selectedExam !== "choose"
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputData, selectedExam]);

  const ResultData = () => {
    return (
      <div
        id="showresult"
        className="w-full h-[250px] bg-gray-50 shadow-md px-10 py-6 rounded-xl mb-8 mt-4"
      >
        <div className="text-4xl font-semibold flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4">
            <img src={trophy} alt="trophy" className="w-[6rem]" />
            <div>
              Congratulations, your CLB Score is{" "}
              <span className=" mt-6 mb-3 text-white px-3 py-2 bg-red-500 bold rounded-xl ">
                {Number.isInteger(total) ? `${total}.0` : total}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="text-xl mt-8 -mb-4">
              Individual CLB Module Score
            </div>
            <div className="flex items-center justify-between mt-10 w-full gap-6">
              <div className="text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide">
                Reading{" "}
                <span className="text-2xl">
                  {inputData && inputData.reading}
                </span>
              </div>
              <div className="text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide">
                Listening{" "}
                <span className="text-2xl">
                  {inputData && inputData.listening}
                </span>
              </div>
              <div className="text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide">
                Writing{" "}
                <span className="text-2xl">
                  {inputData && inputData.writing}
                </span>
              </div>
              <div className="text-lg bg-white w-[15rem] py-4 px-6 shadow-xl rounded-lg flex items-center justify-between shadow-gray-300 tracking-wide">
                Speaking{" "}
                <span className="text-2xl">
                  {inputData && inputData.speaking}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center w-full md:w-[95%]">
      <div className="mt-[2.9rem]">
        <div className="w-[95%] ml-7 bg-banner text-white bg-cover bg-no-repeat h-auto lg:h-[450px] rounded-3xl">
          <div className="flex items-center justify-between w-full flex-wrap md:flex-nowrap">
            <div className="flex flex-col items-start justify-between pl-8 md:px-14 lg:px-20">
              <p className=" text-gray-400 lg:pb-20 pt-10 lg:pt-10 text-[13px] cursor-pointer relative top-10">
                <a href="/" className="text-gray-400 ">
                  Home
                </a>{" "}
                &gt;{" "}
                <a href="/clb-calculator" className="text-gray-400  ">
                  CLB Score Calculator
                </a>
              </p>

              <div className="text-[35px] md:text-[40px] lg:text-[50px] font-normal font-serif leading-normal ">
                CLB Score <br />
                Calculator
              </div>
              <p className="text-[#D3D3D3] text-[18px] leading-normal pt-6 w-full mb-10">
                The Federal Skilled Worker (FSW) program is one of the three
                programs contained within Canada’s Express{" "}
              </p>
            </div>
            {/* CHANGED */}
            <div className="bg-white w-auto h-auto md:mt-[7rem] mx-auto md:mr-[6rem] px-1 py-3 rounded-2xl flex flex-col gap-2">
              <div className="px-4 pt-4">
                <select
                  id="countries"
                  defaultValue={"choose"}
                  onChange={handleExamChange}
                  className="border-[2px] border-[rgba(1,153,137,0.7)] text-gray-500 focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[350px] p-2.5 outline-none"
                >
                  <option disabled value="choose">
                    Choose your exam
                  </option>
                  <option className="text-black" value="IELTS">
                    IELTS (English)
                  </option>
                  <option className="text-black" value="CELPIP">
                    CELPIP (English)
                  </option>
                  <option className="text-black" value="PTE">
                    PTE (English)
                  </option>
                  <option className="text-black" value="TCF">
                    TCF (French)
                  </option>
                  <option className="text-black" value="TEF">
                    TEF (French)
                  </option>
                </select>
              </div>

              <div className="px-4 pt-4 flex items-center justify-between -mt-3 gap-4 min-w-full">
                {selectedExam === "IELTS" && (
                  <>
                    {" "}
                    <div className="relative">
                      <label
                        htmlFor="reading"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Reading
                      </label>
                      <select
                        id="reading"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        placeholder=""
                        onChange={handleInputChange}
                        name="reading"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}
                        </option>
                        <option className="text-black" value="10">
                          8-9
                        </option>
                        <option className="text-black" value="9">
                          7-7.5
                        </option>
                        <option className="text-black" value="8">
                          6.5
                        </option>
                        <option className="text-black" value="7">
                          6
                        </option>
                        <option className="text-black" value="6">
                          5-5.5
                        </option>
                        <option className="text-black" value="5">
                          4-4.5
                        </option>
                        <option className="text-black" value="4">
                          3.5
                        </option>
                      </select>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="listening"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Listening
                      </label>
                      <select
                        id="listening"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        placeholder=""
                        onChange={handleInputChange}
                        name="listening"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value=""></option>
                        <option className="text-black" value="10">
                          8.5-9
                        </option>
                        <option className="text-black" value="9">
                          8
                        </option>
                        <option className="text-black" value="8">
                          7.5
                        </option>
                        <option className="text-black" value="7">
                          6-7
                        </option>
                        <option className="text-black" value="6">
                          5.5
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4.5
                        </option>
                      </select>
                    </div>
                  </>
                )}

                {selectedExam === "CELPIP" && (
                  <>
                    {" "}
                    <div className="relative">
                      <label
                        htmlFor="reading"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Reading
                      </label>
                      <select
                        id="reading"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="reading"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          10
                        </option>
                        <option className="text-black" value="9">
                          9
                        </option>
                        <option className="text-black" value="8">
                          8
                        </option>
                        <option className="text-black" value="7">
                          7
                        </option>
                        <option className="text-black" value="6">
                          6
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4
                        </option>
                        <option className="text-black" value="3">
                          3
                        </option>
                      </select>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="listening"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Listening
                      </label>
                      <select
                        id="listening"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="listening"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          10
                        </option>
                        <option className="text-black" value="9">
                          9
                        </option>
                        <option className="text-black" value="8">
                          8
                        </option>
                        <option className="text-black" value="7">
                          7
                        </option>
                        <option className="text-black" value="6">
                          6
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4
                        </option>
                        <option className="text-black" value="3">
                          3
                        </option>
                      </select>
                    </div>
                  </>
                )}

                {selectedExam === "PTE" && (
                  <>
                    {" "}
                    <div className="relative">
                      <label
                        htmlFor="reading"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Reading
                      </label>
                      <select
                        id="reading"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="reading"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          88-90
                        </option>
                        <option className="text-black" value="9">
                          78-87
                        </option>
                        <option className="text-black" value="8">
                          69-77
                        </option>
                        <option className="text-black" value="7">
                          60-68
                        </option>
                        <option className="text-black" value="6">
                          51-59
                        </option>
                        <option className="text-black" value="5">
                          42-50
                        </option>
                        <option className="text-black" value="4">
                          33-41
                        </option>
                        <option className="text-black" value="3">
                          24-32
                        </option>
                      </select>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="listening"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Listening
                      </label>
                      <select
                        id="listening"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="listening"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          10
                        </option>
                        <option className="text-black" value="9">
                          9
                        </option>
                        <option className="text-black" value="8">
                          8
                        </option>
                        <option className="text-black" value="7">
                          7
                        </option>
                        <option className="text-black" value="6">
                          6
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4
                        </option>
                        <option className="text-black" value="3">
                          3
                        </option>
                      </select>
                    </div>
                  </>
                )}
                {selectedExam === "TCF" && (
                  <>
                    {" "}
                    <div className="relative">
                      <label
                        htmlFor="reading"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Reading
                      </label>
                      <select
                        id="reading"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="reading"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          549-699
                        </option>
                        <option className="text-black" value="9">
                          524-548
                        </option>
                        <option className="text-black" value="8">
                          499-523
                        </option>
                        <option className="text-black" value="7">
                          453-498
                        </option>
                        <option className="text-black" value="6">
                          406-452
                        </option>
                        <option className="text-black" value="5">
                          375-405
                        </option>
                        <option className="text-black" value="4">
                          342-374
                        </option>
                      </select>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="listening"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Listening
                      </label>
                      <select
                        disabled={selectedExam === "choose"}
                        id="listening"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="listening"
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          549-699
                        </option>
                        <option className="text-black" value="9">
                          523-548
                        </option>
                        <option className="text-black" value="8">
                          503-522
                        </option>
                        <option className="text-black" value="7">
                          458-502
                        </option>
                        <option className="text-black" value="6">
                          406-452
                        </option>
                        <option className="text-black" value="5">
                          375-405
                        </option>
                        <option className="text-black" value="4">
                          342-374
                        </option>
                      </select>
                    </div>
                  </>
                )}
                {selectedExam === "TEF" && (
                  <>
                    {" "}
                    <div className="relative">
                      <label
                        htmlFor="reading"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Reading
                      </label>
                      <select
                        disabled={selectedExam === "choose"}
                        id="reading"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="reading"
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          263-300
                        </option>
                        <option className="text-black" value="9">
                          248-262
                        </option>
                        <option className="text-black" value="8">
                          233-247
                        </option>
                        <option className="text-black" value="7">
                          207-232
                        </option>
                        <option className="text-black" value="6">
                          181-206
                        </option>
                        <option className="text-black" value="5">
                          151-180
                        </option>
                        <option className="text-black" value="4">
                          121-150
                        </option>
                      </select>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="listening"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Listening
                      </label>
                      <select
                        disabled={selectedExam === "choose"}
                        id="listening"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="listening"
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          316-360
                        </option>
                        <option className="text-black" value="9">
                          298-315
                        </option>
                        <option className="text-black" value="8">
                          280-297
                        </option>
                        <option className="text-black" value="7">
                          249-279
                        </option>
                        <option className="text-black" value="6">
                          217-248
                        </option>
                        <option className="text-black" value="5">
                          181-216
                        </option>
                        <option className="text-black" value="4">
                          145-180
                        </option>
                      </select>
                    </div>
                  </>
                )}
              </div>
              <div className="px-4 pt-4 flex items-center justify-between -mt-3 gap-4">
                {selectedExam === "IELTS" && (
                  <>
                    <div className="relative">
                      <label
                        htmlFor="writing"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Writing
                      </label>
                      <select
                        disabled={selectedExam === "choose"}
                        id="writing"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="writing"
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          7.5-9
                        </option>
                        <option className="text-black" value="9">
                          7
                        </option>
                        <option className="text-black" value="8">
                          6.5
                        </option>
                        <option className="text-black" value="7">
                          6
                        </option>
                        <option className="text-black" value="6">
                          5.5
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4-4.5
                        </option>
                      </select>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="speaking"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Speaking
                      </label>
                      <select
                        id="speaking"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="speaking"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          7.5-9
                        </option>
                        <option className="text-black" value="9">
                          7
                        </option>
                        <option className="text-black" value="8">
                          6.5
                        </option>
                        <option className="text-black" value="7">
                          6
                        </option>
                        <option className="text-black" value="6">
                          5.5
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4-4.5
                        </option>
                      </select>
                    </div>
                  </>
                )}
                {selectedExam === "CELPIP" && (
                  <>
                    <div className="relative">
                      <label
                        htmlFor="writing"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Writing
                      </label>
                      <select
                        id="writing"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="writing"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          10
                        </option>
                        <option className="text-black" value="9">
                          9
                        </option>
                        <option className="text-black" value="8">
                          8
                        </option>
                        <option className="text-black" value="7">
                          7
                        </option>
                        <option className="text-black" value="6">
                          6
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4
                        </option>
                        <option className="text-black" value="3">
                          3
                        </option>
                      </select>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="speaking"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Speaking
                      </label>
                      <select
                        id="speaking"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="speaking"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          10
                        </option>
                        <option className="text-black" value="9">
                          9
                        </option>
                        <option className="text-black" value="8">
                          8
                        </option>
                        <option className="text-black" value="7">
                          7
                        </option>
                        <option className="text-black" value="6">
                          6
                        </option>
                        <option className="text-black" value="5">
                          5
                        </option>
                        <option className="text-black" value="4">
                          4
                        </option>
                        <option className="text-black" value="3">
                          3
                        </option>
                      </select>
                    </div>
                  </>
                )}
                {selectedExam === "PTE" && (
                  <>
                    <div className="relative">
                      <label
                        htmlFor="writing"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Writing
                      </label>
                      <select
                        id="writing"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="writing"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          90
                        </option>
                        <option className="text-black" value="9">
                          88-89
                        </option>
                        <option className="text-black" value="8">
                          79-87
                        </option>
                        <option className="text-black" value="7">
                          69-78
                        </option>
                        <option className="text-black" value="6">
                          60-68
                        </option>
                        <option className="text-black" value="5">
                          51-59
                        </option>
                        <option className="text-black" value="4">
                          41-50
                        </option>
                        <option className="text-black" value="3">
                          32-40
                        </option>
                      </select>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="speaking"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Speaking
                      </label>
                      <select
                        id="speaking"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="speaking"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          89-90
                        </option>
                        <option className="text-black" value="9">
                          84-88
                        </option>
                        <option className="text-black" value="8">
                          76-83
                        </option>
                        <option className="text-black" value="7">
                          68-75
                        </option>
                        <option className="text-black" value="6">
                          59-67
                        </option>
                        <option className="text-black" value="5">
                          51-58
                        </option>
                        <option className="text-black" value="4">
                          42-50
                        </option>
                        <option className="text-black" value="3">
                          34-41
                        </option>
                      </select>
                    </div>
                  </>
                )}
                {selectedExam === "TCF" && (
                  <>
                    <div className="relative">
                      <label
                        htmlFor="writing"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Writing
                      </label>
                      <select
                        id="writing"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="writing"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          16-20
                        </option>
                        <option className="text-black" value="9">
                          14-15
                        </option>
                        <option className="text-black" value="8">
                          12-13
                        </option>
                        <option className="text-black" value="7">
                          10-11
                        </option>
                        <option className="text-black" value="6">
                          7-9
                        </option>
                        <option className="text-black" value="5">
                          6-6
                        </option>
                        <option className="text-black" value="4">
                          4-5
                        </option>
                      </select>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="speaking"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Speaking
                      </label>
                      <select
                        id="speaking"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="speaking"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          16-20
                        </option>
                        <option className="text-black" value="9">
                          14-15
                        </option>
                        <option className="text-black" value="8">
                          12-13
                        </option>
                        <option className="text-black" value="7">
                          10-11
                        </option>
                        <option className="text-black" value="6">
                          7-9
                        </option>
                        <option className="text-black" value="5">
                          6-6
                        </option>
                        <option className="text-black" value="4">
                          4-5
                        </option>
                      </select>
                    </div>
                  </>
                )}
                {selectedExam === "TEF" && (
                  <>
                    <div className="relative">
                      <label
                        htmlFor="writing"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Writing
                      </label>
                      <select
                        id="writing"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="writing"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          393-450
                        </option>
                        <option className="text-black" value="9">
                          371-392
                        </option>
                        <option className="text-black" value="8">
                          349-370
                        </option>
                        <option className="text-black" value="7">
                          310-348
                        </option>
                        <option className="text-black" value="6">
                          271-309
                        </option>
                        <option className="text-black" value="5">
                          226-270
                        </option>
                        <option className="text-black" value="4">
                          181-225
                        </option>
                      </select>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="speaking"
                        className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500"
                      >
                        Speaking
                      </label>
                      <select
                        id="speaking"
                        className="border-[2px] border-[rgba(1,153,137,0.7)] text-black focus:border-[#019989] placeholder-gray-500 text-md rounded-lg block w-[10rem] p-2.5 outline-none"
                        onChange={handleInputChange}
                        name="speaking"
                        disabled={selectedExam === "choose"}
                      >
                        <option disabled selected value="">
                          {}{" "}
                        </option>
                        <option className="text-black" value="10">
                          393-450
                        </option>
                        <option className="text-black" value="9">
                          371-392
                        </option>
                        <option className="text-black" value="8">
                          349-370
                        </option>
                        <option className="text-black" value="7">
                          310-348
                        </option>
                        <option className="text-black" value="6">
                          271-309
                        </option>
                        <option className="text-black" value="5">
                          226-270
                        </option>
                        <option className="text-black" value="4">
                          181-225
                        </option>
                      </select>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col items-center justify-center px-4">
                {" "}
                <button
                  onClick={handleClick}
                  disabled={isDisabled}
                  className={` font-normal px-12 py-2.5 rounded-[15px] text-[17px] hover:scale-105 transition ease-in delay-60 duration-150  ${
                    isDisabled
                      ? "bg-[rgba(1,153,137,0.4)] cursor-not-allowed"
                      : "bg-[#019989] cursor-pointer"
                  }`}
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 ">
        {" "}
        {confettiActive && (
          <Confetti numberOfPieces={200} gravity={0.15} tweenDuration={1} />
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-[90%] sm:w-[80%] flex flex-col items-start justify-center mt-8">
          <div className="font-semibold text-3xl border-b-[4px] border-[#019989]">
            Result
          </div>
          {showResult && <ResultData />}
          <div className="flex items-center justify-between gap-4 xl:gap-10 flex-wrap lg:flex-nowrap">
            <div className="bg-black flex flex-col items-center justify-center rounded-xl px-4 py-2 shadow-lg w-full sm:min-w-[15rem] mt-8">
              <img src={freeicon} alt="icon" className="w-[4rem]" />
              <p className="text-white text-xl font-semibold mt-2 text-center tracking-wider">
                FREE TO USE
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center rounded-xl px-4 py-2 shadow-lg w-full sm:min-w-[15rem] mt-8">
              <img src={easyicon} alt="icon" className="w-[4rem]" />
              <p className="text-black text-xl font-semibold mt-2 text-center tracking-wider">
                EASY TO USE
              </p>
            </div>
            <div className="bg-black flex flex-col items-center justify-center rounded-xl px-4 py-2 shadow-lg w-full sm:min-w-[15rem] mt-8">
              <img src={precenticon} alt="icon" className="w-[4rem]" />
              <p className="text-white text-xl font-semibold mt-2 text-center tracking-wider">
                100% ACCURACY
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center rounded-xl px-4 py-2 shadow-lg w-full sm:min-w-[15rem] mt-8">
              <img src={intlstd} alt="icon" className="w-[4rem]" />
              <p className="text-black text-xl font-semibold mt-2 text-center tracking-wider">
                INT’L STANDARDS
              </p>
            </div>
          </div>
          <div className="w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              Canadian Language Benchmarks
            </div>
            <p className="tracking-wide mt-8">
              The Canadian language benchmarks English language proficiency and
              French language proficiency. Since all exams have different
              scoring patterns, the Canadian Language Benchmark is a standard
              index to compare IELTS and CELPIP scores for English proficiency
              and TEF and TCF for French proficiency. IRCC uses the Canadian
              language benchmark to set the language requirements for
              immigration programs.
              <br /> <br />
              The CLB benchmarks the IELTS and CELPIP for English language
              proficiency and TCF and TEF for French Language proficiency. The
              CLB range is from 1 to 12. The Lower CLB score means that the
              applicant cannot communicate and understand English or French,
              while the higher CLB score suggests that the applicant is
              proficient in English or French.
            </p>
          </div>
          <div className="w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              CLB for Express Entry Programs
            </div>
            <p className="tracking-wide mt-8">
              The minimum CLB for Canadian Experience Class or CEC is five or
              more, and for Federal Skilled Worker Program, the minimum CLB of 7
              is required, and having more is the plus point for your
              application. The Federal Skilled Trades Program has a requirement
              of a minimum CLB 5 in Listening and Speaking, while CLB 4 in
              Reading and Writing. To apply for Study Visa under Student Direct
              Stream or SDS, an applicant needs a minimum CLB score of 7 or 6
              bands in each module of IELTS.
            </p>
          </div>
          <div className="w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              IELTS to CLB Calculator
            </div>
            <p className="tracking-wide mt-8">
              IELTS, or International English Language Testing System, organized
              by IDP International and the British Council on an international
              level, tests the English language ability of an applicant. It
              validates whether the applicant can communicate and understand the
              English language and gives scores based on each module's test. To
              Convert IELTS to CLB, you can use our free tool or follow the
              below-mentioned table, which might be complex. For example, if an
              applicant's IELTS score is 6 in each module, its equivalent score
              in CLB will be 7.
              <br />
              <br />
              <span className="text-[#009889] italic font-semibold">
                Please note, the IELTS Academic is NOT eligible for Immigration
                programs in Canada. The IRCC accepts only IELTS-General for
                Immigration. If you took IELTS-Academic, you must attempt the
                IELTS-General training exam.
              </span>
            </p>
            <div className=" w-full h-auto rounded-3xl mt-14">
              <IltsTable />
            </div>
          </div>
          <div className="w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              CELPIP to CLB Calculator
            </div>
            <div className=" w-full h-auto rounded-3xl mt-14">
              <CelpipTable />
            </div>
          </div>
          <div className="w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              PTE to CLB Calculator
            </div>
            <div className=" w-full h-auto rounded-3xl mt-14">
              <PteTable />
            </div>
          </div>
          <div className="w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              TCF to CLB Calculator
            </div>
            <div className=" w-full h-auto rounded-3xl mt-14">
              <TcfTable />
            </div>
          </div>
          <div className="w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              TEF to CLB Calculator
            </div>
            <div className=" w-full h-auto rounded-3xl mt-14">
              <TefTable />
            </div>
          </div>
          <div className="w-[100%] sm:w-[90%] flex flex-col items-start justify-center mt-8">
            <div className="font-semibold text-3xl border-b-[4px] border-[#019989] mt-8">
              Exam Guides
            </div>
            <div className="w-full h-auto rounded-3xl mt-14 flex items-center justify-center gap-4 ml-0 xl:ml-20 flex-wrap xl:flex-nowrap">
              <div className="flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[24rem] border border-gray-300 shadow-2xl">
                <img src={ielts} alt="icon" className="w-[8rem] mx-4 my-2" />
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">IELTS Overview</p>
                    <p className="cursor-pointer">IELTS Syllabus</p>
                    <p className="cursor-pointer">IELTS Results</p>
                  </div>
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">IELTS Exam Pattern</p>
                    <p className="cursor-pointer">IELTS Registration</p>
                    <p className="cursor-pointer">IELTS Exam Dates</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[24rem] border border-gray-300 shadow-2xl">
                <img src={toefl} alt="icon" className="w-[8rem] mx-4 my-2" />
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">TOEFL Overview</p>
                    <p className="cursor-pointer">TOEFL Exam Dates</p>
                    <p className="cursor-pointer">TOEFL Results</p>
                  </div>
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">TOEFL Exam Pattern</p>
                    <p className="cursor-pointer">TOEFL Registration</p>
                    <p className="cursor-pointer">TOEFL Vouchers</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[24rem] border border-gray-300 shadow-2xl">
                <img src={duolingo} alt="icon" className="w-[8rem] mx-4 my-2" />
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">Duolingo Overview</p>
                    <p className="cursor-pointer">Duolingo Syllabus</p>
                    <p className="cursor-pointer">Duolingo Results</p>
                  </div>
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">Duolingo Exam Pattern</p>
                    <p className="cursor-pointer">Duolingo Registration</p>
                    <p className="cursor-pointer">Duolingo Vouchers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto rounded-3xl mt-14 flex items-center justify-center gap-4 xl:ml-20 mb-20 flex-wrap xl:flex-nowrap">
              <div className="flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[24rem] border border-gray-300 shadow-2xl">
                <img src={pearson} alt="icon" className="w-[8rem] mx-4 my-2" />
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">PTE Overview</p>
                    <p className="cursor-pointer">PTE Exam Dates</p>
                    <p className="cursor-pointer">PTE Results</p>
                  </div>
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">PTE Exam Pattern</p>
                    <p className="cursor-pointer">PTE Registration</p>
                    <p className="cursor-pointer">PTE Vouchers</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[24rem] border border-gray-300 shadow-2xl">
                <img src={gre} alt="icon" className="w-[8rem] mx-4 my-2" />
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">GRE Overview</p>
                    <p className="cursor-pointer">GRE Syllabus</p>
                    <p className="cursor-pointer">GRE Results</p>
                  </div>
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">GRE Exam Pattern</p>
                    <p className="cursor-pointer">GRE Registration</p>
                    <p className="cursor-pointer">GRE Vouchers</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center rounded-xl px-4 py-2 flex-wrap w-full md:min-w-[24rem] border border-gray-300 shadow-2xl">
                <img src={celpip} alt="icon" className="w-[8rem] mx-4 my-2" />
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">CELPIP Overview</p>
                    <p className="cursor-pointer">CELPIP Syllabus</p>
                    <p className="cursor-pointer">CELPIP Results</p>
                  </div>
                  <div className="text-[14px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2">
                    <p className="cursor-pointer">CELPIP Exam Pattern</p>
                    <p className="cursor-pointer">CELPIP Registration</p>
                    <p className="cursor-pointer">CELPIP Exam Dates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClbCalculator;
