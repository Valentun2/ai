import { useState } from 'react';
import Card from './AICard';
import ModalAI from 'components/modals/ModalAI';
import BuyPremiumModal from 'components/modals/BuyPremiumModal';
import ScrollToHash from 'helpers/Scroll';

const AnalyticsBlock = () => {
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
    <div className="relative" id="analytics">
      <ScrollToHash offset={200} />

      <ul onClick={handleClick} className="flex flex-wrap gap-4 mt-4">
        <Card
          title={'Data Visualizer'}
          view={832}
          img={'./image/DataVisualizer.png'}
          tag={'Analytics'}
        >
          Transform raw data into clear visuals. Data Visualizer creates charts
          and graphs to help you see trends and patterns.
        </Card>
        <Card
          title={'Trend Forecaster'}
          view={65}
          img={'./image/TrendForecaster.png'}
          tag={'Analytics'}
        >
          Predict future trends with AI analysis. Trend Forecaster uses
          historical data to provide actionable insights.
        </Card>
        <Card
          title={'Customer Insights'}
          view={654}
          img={'./image/CustomerInsights.png'}
          tag={'Analytics'}
        >
          Understand your audience with customer data analysis. This AI
          identifies behaviors, preferences, and trends.
        </Card>
        <Card
          title={'Sales Tracker'}
          view={54}
          img={'./image/SalesTracker.png'}
          tag={'Analytics'}
        >
          Monitor your sales performance over time. Sales Tracker analyzes
          patterns to help you optimize revenue.
        </Card>
        <Card
          title={'Market Segmentation Tool'}
          view={32}
          img={'./image/MarketSegmentationTool.png'}
          tag={'Analytics'}
        >
          Segment your market based on data-driven insights. This tool clusters
          customers by demographics, behavior, and needs.
        </Card>
        <Card
          title={'ConversionRateOptimizer'}
          view={65}
          img={'./image/ConversionRateOptimizer.png'}
          tag={'Analytics'}
        >
          Improve your conversion rates. This AI analyzes visitor behavior to
          suggest strategies for boosting engagement.
        </Card>
        <Card
          title={'Social Media Analyzer'}
          view={23}
          img={'./image/SocialMediaAnalyzer.png'}
          tag={'Analytics'}
        >
          Measure the impact of your social campaigns. Social Media Analyzer
          reviews engagement, growth, and trends.
        </Card>
        <Card
          title={'Performance Dashboard'}
          view={65}
          img={'./image/PerformanceDashboard.png'}
          tag={'Analytics'}
        >
          Access all key metrics in one place. Performance Dashboard
          consolidates analytics for real-time insights.
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

export default AnalyticsBlock;
