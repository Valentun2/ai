import { useState } from 'react';
import Card from './AICard';
import ModalAI from 'components/modals/ModalAI';
import BuyPremiumModal from 'components/modals/BuyPremiumModal';
// import { useLocation } from 'react-router-dom';
import ScrollToHash from 'helpers/Scroll';

const ProductivityBlock = ({ arr }) => {
  const [openBuyPremium, setOpenBuyPremium] = useState(false);

  const [dataAI, setDataAI] = useState({});
  const [visible, setVisible] = useState(false);

  const handleClick = e => {
    const arr = [...e.target.children[1].children];
    const arr2 = [...e.target.children[2].children];
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
    <div id="productivity" className="relative">
      <ScrollToHash offset={200} />
      <ul onClick={handleClick} className="flex flex-wrap  gap-4 mt-4">
        <Card
          arr={arr}
          title={'AI Bookkeeping'}
          view={743}
          img={'./image/AI-Bookkeeper-logo.png'}
          tag={'Productivity'}
        >
          Effortlessly organize your finances with AI-driven bookkeeping. Track
          expenses, manage invoices, and simplify reporting—so you can focus on
          growing your business.
        </Card>
        <Card
          arr={arr}
          title={'Excel Assistant'}
          view={46}
          img={'./image/ExcelAssistant.png'}
          tag={'Productivity'}
        >
          Transform your data work with AI. From automating calculations to
          creating complex formulas, Excel Assistant streamlines your
          spreadsheet tasks and saves valuable time.
        </Card>
        <Card
          arr={arr}
          title={'Prompt Generator'}
          view={1443}
          img={'./image/PromptGenerator.png'}
          tag={'Productivity'}
        >
          Transform your data work with AI. From automating calculations to
          creating complex formulas, Excel Assistant streamlines your
          spreadsheet tasks and saves valuable time.
        </Card>
        <Card
          arr={arr}
          title={'Email Composer'}
          view={821}
          img={'./image/EmailComposer.png'}
          tag={'Productivity'}
        >
          Write professional emails faster than ever. Email Composer crafts
          concise and effective messages, handling everything from introductions
          to follow-ups with AI-powered.
        </Card>
        <Card
          arr={arr}
          title={'Schedule Optimizer'}
          view={114}
          img={'./image/ScheduleOptimizer.png'}
          tag={'Productivity'}
        >
          Take control of your time with smart scheduling. Schedule Optimizer
          adjusts appointments and priorities for maximum productivity,
          balancing efficiency with your work-life needs.
        </Card>
        <Card
          arr={arr}
          title={'Content Outliner'}
          view={813}
          img={'./image/ContentOutliner.png'}
          tag={'Productivity'}
        >
          Boost your writing productivity by structuring ideas with Content
          Outliner. From blogs to reports, this AI helps you create clear,
          organized outlines tailored to your audience.
        </Card>
        <Card
          arr={arr}
          title={'Task Prioritizer'}
          view={32}
          img={'./image/TaskPrioritizer.png'}
          tag={'Productivity'}
        >
          Stay on top of your to-do list with intelligent prioritization. Task
          Prioritizer organizes tasks by importance and deadline, helping you
          tackle the most critical items first.
        </Card>
        <Card
          arr={arr}
          title={'Document Summarizer'}
          view={2}
          img={'./image/DocumentSummarizer.png'}
          tag={'Productivity'}
        >
          Speed up your reading with AI-generated summaries. Document Summarizer
          condenses lengthy texts, reports, and articles into key points, so you
          can focus on what matters.
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

export default ProductivityBlock;
