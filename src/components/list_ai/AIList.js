import AnalyticsBlock from './AnalyticsBlock';
import BlockWrapperr from './BlockWrapperr';
import EducationBlock from './EducationBlock';
import FinanceBlock from './FinanceBlock';
import MarketingBlock from './MarketingBlock';
import ProductivityBlock from './ProductivityBlock';
import TechBlock from './TechBlock';

const AIList = ({ value }) => {
  console.log(value !== 'Productivity' || !value ? 'true' : 'false');
  return (
    <section className="z-[1]">
      <div className="container">
        <BlockWrapperr
          style={`${value === 'Productivity' || !value ? '' : 'hidden'} `}
          title={'Productivity'}
          text={'AI tools to streamline your work and boost efficiency'}
        >
          <ProductivityBlock />
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Tech' || !value ? '' : 'hidden'} `}
          title={'Tech'}
          text={'Smart AI support for developers, from debugging to DevOps'}
        >
          <TechBlock />
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Finance' || !value ? '' : 'hidden'} `}
          title={'Finance'}
          text={'AI for clear, efficient financial management and planning'}
        >
          <FinanceBlock />
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Education' || !value ? '' : 'hidden'} `}
          title={'Education'}
          text={'AI-powered aids for effective, personalized learning'}
        >
          <EducationBlock />{' '}
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Analytics' || !value ? '' : 'hidden'} `}
          title={'Analytics'}
          text={'Insights and trends from your data, simplified with AI'}
        >
          <AnalyticsBlock />
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Marketing' || !value ? '' : 'hidden'} `}
          title={'Marketing'}
          text={
            'AI tools to enhance ad creation, social media, and audience insights for better campaign results'
          }
        >
          <MarketingBlock />
        </BlockWrapperr>
      </div>
    </section>
  );
};

export default AIList;
