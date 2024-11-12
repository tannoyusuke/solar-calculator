"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SolarInvestmentCalculator = () => {
  // Format number with commas for display
  const formatNumber = (num) => {
    return new Intl.NumberFormat('ja-JP').format(Math.round(num));
  };

  // Remove commas for calculation
  const parseFormattedNumber = (str) => {
    if (typeof str === 'number') return str;
    return Number(str.replace(/,/g, ''));
  };

  // State for input values
  const [annualRevenue, setAnnualRevenue] = useState(45000000);
  const [remainingYears, setRemainingYears] = useState(12.5);
  const [mwCapacity, setMwCapacity] = useState(1.6);
  const [postFitPrice, setPostFitPrice] = useState(12);
  const [targetIRR, setTargetIRR] = useState(5.5);
  
  // Calculate operating costs based on revenue
  const defaultOperatingCost = useMemo(() => 
    Math.round(annualRevenue * 0.165), [annualRevenue]
  );
  const [operatingCost, setOperatingCost] = useState(defaultOperatingCost);

  // Handler for number input with comma formatting
  const handleNumberChange = (setter) => (e) => {
    const value = parseFormattedNumber(e.target.value);
    if (!isNaN(value)) {
      setter(value);
    }
  };

  // Calculations
  const calculations = useMemo(() => {
    try {
      // Basic calculations
      const annualEBITDA = annualRevenue - operatingCost;
      const annualDegradation = 0.005; // 年間劣化率0.5%

      // FCF Series Calculation for IRR-based valuation
      const calculatePV = (cashFlow, year, irr) => {
        return cashFlow / Math.pow(1 + irr/100, year);
      };

      // Generate yearly FCF series for FIT period
      const fitPeriodFCF = Array.from({length: Math.ceil(remainingYears)}, (_, i) => {
        const degradationFactor = 1 - (annualDegradation * i);
        return annualEBITDA * degradationFactor;
      });

      // Post-FIT calculations (10 years)
      const estimatedAnnualGeneration = (annualRevenue / 35.2) * 0.95;
      const postFitAnnualRevenue = estimatedAnnualGeneration * postFitPrice;
      const postFitEBITDA = postFitAnnualRevenue - (operatingCost * 0.9);

      const postFitPeriodFCF = Array.from({length: 10}, (_, i) => {
        const degradationFactor = 1 - (annualDegradation * (i + remainingYears));
        return postFitEBITDA * degradationFactor;
      });

      // Calculate present value based on target IRR
      const fitPeriodPV = fitPeriodFCF.reduce((sum, fcf, i) => 
        sum + calculatePV(fcf, i + 1, targetIRR), 0
      );

      const postFitPeriodPV = postFitPeriodFCF.reduce((sum, fcf, i) => 
        sum + calculatePV(fcf, i + Math.ceil(remainingYears) + 1, targetIRR), 0
      );

      const totalPV = fitPeriodPV + postFitPeriodPV;

      // Calculate price range
      const irrBasedPrice = totalPV;
      const multipleMin = 8.5;
      const multipleMax = 10.5;
      const multipleBasedPriceMin = annualEBITDA * multipleMin;
      const multipleBasedPriceMax = annualEBITDA * multipleMax;

      // Final price range (weighted average)
      const finalPriceMin = Math.round((irrBasedPrice * 0.6 + multipleBasedPriceMin * 0.4));
      const finalPriceMax = Math.round((irrBasedPrice * 0.6 + multipleBasedPriceMax * 0.4));

      // Borrowing capacity calculations
      const interestRate = 0.03;
      const targetDSCR = 1.15;
      const loanPeriod = remainingYears;
      const annualPaymentPerMillion = (1000000 * interestRate * Math.pow(1 + interestRate, loanPeriod)) / 
        (Math.pow(1 + interestRate, loanPeriod) - 1);

      // FIT期間のみのDSCR計算
      const maxAnnualPayment = annualEBITDA / targetDSCR;
      const maxBorrowingAmount = (maxAnnualPayment / annualPaymentPerMillion) * 1000000;

      // 卒FIT含むDSCR計算（10年分）- 改善版
      const yearlyEBITDA = [
        ...Array(Math.ceil(remainingYears)).fill(annualEBITDA),
        ...Array(10).fill(postFitEBITDA)
      ].map((ebitda, year) => ebitda * (1 - annualDegradation * year));

      const maxBorrowingByYear = yearlyEBITDA.map(ebitda => 
        (ebitda / targetDSCR / annualPaymentPerMillion) * 1000000
      );

      const maxBorrowingAmountWithPostFit = Math.min(...maxBorrowingByYear);

      // Calculate average and total FCF
      const averageAnnualFCF = annualEBITDA * (1 - annualDegradation * remainingYears/2);
      const totalFitFCF = fitPeriodFCF.reduce((sum, fcf) => sum + fcf, 0);
      const postFitTotalFCF = postFitPeriodFCF.reduce((sum, fcf) => sum + fcf, 0);

      return {
        annualEBITDA,
        averageAnnualFCF,
        totalFitFCF,
        postFitTotalFCF,
        totalFCF: totalFitFCF + postFitTotalFCF,
        finalPriceMin,
        finalPriceMax,
        maxBorrowingAmount,
        maxBorrowingAmountWithPostFit,
        postFitAnnualRevenue,
        estimatedAnnualGeneration,
        irrBasedPrice,
        multipleBasedPriceMin,
        multipleBasedPriceMax,
        postFitEBITDA
      };
    } catch (error) {
      console.error('Calculation error:', error);
      return {
        annualEBITDA: 0,
        averageAnnualFCF: 0,
        totalFitFCF: 0,
        postFitTotalFCF: 0,
        totalFCF: 0,
        finalPriceMin: 0,
        finalPriceMax: 0,
        maxBorrowingAmount: 0,
        maxBorrowingAmountWithPostFit: 0,
        postFitAnnualRevenue: 0,
        estimatedAnnualGeneration: 0,
        irrBasedPrice: 0,
        multipleBasedPriceMin: 0,
        multipleBasedPriceMax: 0,
        postFitEBITDA: 0
      };
    }
  }, [annualRevenue, remainingYears, operatingCost, postFitPrice, targetIRR]);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>ソーラー投資評価システム</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>年間売電収入 (円)</Label>
              <Input 
                value={formatNumber(annualRevenue)}
                onChange={handleNumberChange(setAnnualRevenue)}
                className="text-right"
              />
            </div>
            <div>
              <Label>残存FIT期間 (年)</Label>
              <Input 
                type="number" 
                step="0.1"
                value={remainingYears}
                onChange={(e) => setRemainingYears(Number(e.target.value))}
                className="text-right"
              />
            </div>
            <div>
              <Label>設備容量 (MW)</Label>
              <Input 
                type="number"
                step="0.1"
                value={mwCapacity}
                onChange={(e) => setMwCapacity(Number(e.target.value))}
                className="text-right"
              />
            </div>
            <div>
              <Label>運営費用 (円/年)</Label>
              <Input 
                value={formatNumber(operatingCost)}
                onChange={handleNumberChange(setOperatingCost)}
                className="text-right"
              />
            </div>
            <div>
              <Label>卒FIT想定単価 (円/kWh)</Label>
              <Input 
                type="number"
                step="0.1"
                value={postFitPrice}
                onChange={(e) => setPostFitPrice(Number(e.target.value))}
                className="text-right"
              />
            </div>
            <div>
              <Label>期待IRR (%)</Label>
              <Input 
                type="number"
                step="0.1"
                value={targetIRR}
                onChange={(e) => setTargetIRR(Number(e.target.value))}
                className="text-right"
              />
            </div>
          </div>

          {/* Valuation Range Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">買収価格検討レンジ</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">最小値: </span>
                <span>{formatNumber(calculations.finalPriceMin)}円</span>
              </div>
              <div>
                <span className="font-semibold">最大値: </span>
                <span>{formatNumber(calculations.finalPriceMax)}円</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>IRRベース価格: {formatNumber(calculations.irrBasedPrice)}円</p>
              <p>マルチプルベース価格: {formatNumber(calculations.multipleBasedPriceMin)}円
                 ～{formatNumber(calculations.multipleBasedPriceMax)}円</p>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <h3 className="font-bold text-lg mb-4">評価指標</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <span className="font-semibold">年間EBITDA: </span>
                <span>{formatNumber(calculations.annualEBITDA)}円</span>
              </div>
              <div>
                <span className="font-semibold">年間平均FCF: </span>
                <span>{formatNumber(calculations.averageAnnualFCF)}円</span>
              </div>
              <div>
                <span className="font-semibold">FIT期間中FCF: </span>
                <span>{formatNumber(calculations.totalFitFCF)}円</span>
              </div>
              <div>
                <span className="font-semibold">卒FIT後FCF (10年): </span>
                <span>{formatNumber(calculations.postFitTotalFCF)}円</span>
              </div>
              <div>
                <span className="font-semibold">総FCF (FIT+卒FIT): </span>
                <span>{formatNumber(calculations.totalFCF)}円</span>
              </div>
              <div>
                <span className="font-semibold">最大借入可能額: </span>
                <span>{formatNumber(calculations.maxBorrowingAmount)}円</span>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="text-sm text-gray-600">
            <p>※ 想定条件：年間劣化率0.5%、DSCR 1.15、金利3.0%</p>
            <p>※ 買収価格はIRRベース(60%)とマルチプルベース(40%)の加重平均</p>
            <p>※ 卒FIT後の想定発電量：{formatNumber(calculations.estimatedAnnualGeneration)}kWh/年</p>
            <p>※ 卒FIT後の想定売電収入：{formatNumber(calculations.postFitAnnualRevenue)}円/年</p>
            <p>※ DSCR基準借入可能額（FIT期間のみ）：{formatNumber(calculations.maxBorrowingAmount)}円</p>
            <p>※ DSCR基準借入可能額（卒FIT含10年）：{formatNumber(calculations.maxBorrowingAmountWithPostFit)}円</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarInvestmentCalculator;