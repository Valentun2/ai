import { useState } from 'react';
import Card from './AICard';
import ModalAI from 'components/modals/ModalAI';
import BuyPremiumModal from 'components/modals/BuyPremiumModal';

const FinanceBlock = () => {
  const [openBuyPremium, setOpenBuyPremium] = useState(false);

  const [dataAI, setDataAI] = useState({});
  const [visible, setVisible] = useState(false);

  const handleClick = e => {
    const arr = [...e.target.children[0].children];
    const arr2 = [...e.target.children[1].children];
    const photo = arr[0].currentSrc;
    const name = arr[1].innerText;
    const text = arr[2].innerText;
    const view = arr2[1].innerText;
    setDataAI({
      name,
      photo,
      text,
      view,
    });
    setVisible(true);
  };
  return (
    <div className="relative">
      <ul onClick={handleClick} className="flex flex-wrap gap-4 mt-4">
        <Card
          title={'Expense Tracker'}
          view={452}
          img={'./image/ExpenseTracker.png'}
          tag={'Finance'}
        >
          Monitor expenses effortlessly. Expense Tracker categorizes
          transactions, helping you maintain a clear financial picture.
        </Card>
        <Card
          title={'Investment Analyzer'}
          view={132}
          img={'./image/InvestmentAnalyzer.png'}
          tag={'Finance'}
        >
          Make informed investment decisions with detailed insights. Investment
          Analyzer reviews performance and risk factors for smarter choices.
        </Card>
        <Card
          title={'Tax Calculatorr'}
          view={564}
          img={'./image/TaxCalculator.png'}
          tag={'Finance'}
        >
          Take the stress out of tax season. Tax Calculator helps estimate
          taxes, find deductions, and simplify filing."
        </Card>
        <Card
          title={'Budget Planner'}
          view={73}
          img={'./image/BudgetPlanner.png'}
          tag={'Finance'}
        >
          Plan and manage your budget effectively. Budget Planner categorizes
          spending and helps you stay on track financially.
        </Card>
        <Card
          title={'Loan Calculator'}
          view={153}
          img={'./image/LoanCalculator.png'}
          tag={'Finance'}
        >
          Get a clear view of loan terms. Loan Calculator provides accurate
          estimates for monthly payments and interest.
        </Card>
        <Card
          title={'Credit Score Tracker'}
          view={642}
          img={'./image/CreditScoreTracker.png'}
          tag={'Finance'}
        >
          Keep tabs on your credit health. Credit Score Tracker monitors changes
          and provides tips to improve your score.
        </Card>
        <Card
          title={'Portfolio Rebalancer'}
          view={42}
          img={'./image/PortfolioRebalancer.png'}
          tag={'Finance'}
        >
          Optimize your investment portfolio. Portfolio Rebalancer analyzes
          asset allocation and suggests adjustments for stability and growth.
        </Card>
        <Card
          title={'Retirement Planner'}
          view={14}
          img={'./image/RetirementPlanner.png'}
          tag={'Finance'}
        >
          Prepare for the future with confidence. Retirement Planner helps
          calculate savings goals and timelines for a secure retirement.
        </Card>
      </ul>
      {visible && (
        <ModalAI
          data={dataAI}
          setVisible={setVisible}
          setOpenBuyPremium={setOpenBuyPremium}
        />
      )}
      {openBuyPremium && (
        <BuyPremiumModal setOpenBuyPremium={setOpenBuyPremium} />
      )}
    </div>
  );
};

export default FinanceBlock;
