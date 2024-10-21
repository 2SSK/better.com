"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";
import Navbar from "../_components/Navbar/Navbar";

const Page: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(50000);
  const [downPayment, setDownPayment] = useState<number>(10000);
  const [downPaymentPercentage, setDownPaymentPercentage] =
    useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  // Handler to update the home price
  const handleHomePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newHomePrice = Number(event.target.value);
    setHomePrice(newHomePrice);
    setDownPayment((newHomePrice * downPaymentPercentage) / 100);
  };

  // Handler to update the down payment
  const handleDownPaymentChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newDownPayment = Number(event.target.value);
    setDownPayment(newDownPayment);
    setDownPaymentPercentage((newDownPayment / homePrice) * 100);
  };

  // Handler to update the down payment percentage
  const handleDownPaymentPercentageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const percentage = Number(event.target.value);
    setDownPaymentPercentage(percentage);
    setDownPayment((homePrice * percentage) / 100);
  };

  // Handler to update the interest rate
  const handleInterestRateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInterestRate(Number(event.target.value));
  };

  // Handler to update the loan term
  const handleLoanTermChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLoanTerm(Number(event.target.value));
  };

  // Function to calculate monthly payment
  const calculateMonthlyPayment = useCallback(() => {
    const loanAmount = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (loanAmount <= 0 || monthlyInterestRate <= 0) return 0;

    // Formula for monthly mortgage payment
    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return isNaN(monthlyPayment) || !isFinite(monthlyPayment)
      ? 0
      : monthlyPayment;
  }, [homePrice, downPayment, interestRate, loanTerm]);

  // Update the monthly payment whenever home price, down payment, interest rate, or loan term changes
  useEffect(() => {
    const payment = calculateMonthlyPayment();
    setMonthlyPayment(payment);
  }, [homePrice, downPayment, interestRate, loanTerm, calculateMonthlyPayment]);

  return (
    <div className="w-full h-screen">
      <Navbar className="mb-4" />
      {/* Main Calculator Section */}
      <div className="w-full h-3/4 bg-green-100 bg-opacity-60">
        {/* Heading Section */}
        <div className="p-[3%]">
          <p className="text-5xl font-bold mb-6">Mortgage Calculator</p>
          <p className="text-lg text-gray-500 text-wrap w-[55%]">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get the whole picture and calculate your total monthly
            payment.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="p-[3%] flex flex-col items-center justify-center">
          {/* Home Price and Monthly Payment */}
          <div className="flex justify-between w-full mb-4">
            <div className="text-center">
              <p className="text-left text-lg mb-2">Home price</p>
              <p className="text-5xl font-bold bg-white border px-8 py-4 rounded-lg">
                ${homePrice.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-left text-lg mb-2">Monthly payment</p>
              <p className="text-5xl font-bold">
                ${monthlyPayment.toFixed(2)}/mo
              </p>
            </div>
            <button className="bg-green-700 hover:bg-green-900 text-white text-xl font-bold w-[20%] h-20 p-0 rounded-lg">
              Get pre-approved
            </button>
          </div>
          {/* Slider for Home Price */}
          <div className="w-full mb-6">
            <input
              type="range"
              min="50000"
              max="1000000"
              step="1000"
              value={homePrice}
              onChange={handleHomePriceChange}
              className="w-full border-none outline-none"
            />
          </div>
          {/* Input Section */}
          <div className="w-full flex items-center justify-evenly gap-4">
            {/* ZIP code Input */}
            <div className="relative">
              <span>ZIP code</span>
              <input
                type="text"
                placeholder="160015"
                className="border p-2 w-40 rounded-lg"
              />
            </div>

            {/* Down Payment Input */}
            <div className="w-[20%] bg-white border rounded-lg px-4 py-2 flex flex-col">
              <span className="text-sm text-gray-500">Down Payment</span>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                  className="bg-transparent border-none outline-none w-3/5"
                  placeholder="Amount"
                />
                <div className="flex items-center justify-center w-2/5">
                  <input
                    type="text"
                    value={downPaymentPercentage}
                    onChange={handleDownPaymentPercentageChange}
                    className="border-l border-gray-300 bg-transparent outline-none pl-2 w-full"
                    placeholder="%"
                  />
                  <FontAwesomeIcon icon={faPercent} className="ml-1" />
                </div>
              </div>
            </div>

            {/* Interest Rate Input */}
            <div className="w-[20%] bg-white flex flex-col items-start px-8 py-4 border rounded-lg">
              <span className="text-sm text-gray-500">Interest rate</span>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="bg-transparent border-none outline-none"
                />
                <FontAwesomeIcon icon={faPercent} />
              </div>
            </div>

            {/* Loan Term Input */}
            <div className="bg-white flex flex-col w-[20%] px-8 py-4 border rounded-lg">
              <span className="text-sm mb-3 text-gray-500">Length of loan</span>
              <select
                value={loanTerm}
                onChange={handleLoanTermChange}
                className="bg-transparent"
              >
                <option value={30}>30 years</option>
                <option value={20}>20 years</option>
                <option value={15}>15 years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
