import Card from './AICard';

const ProductivityBlock = () => {
  return (
    <ul className="flex flex-wrap  gap-4 mt-4">
      <Card
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
        title={'Excel Assistant'}
        view={46}
        img={'./image/ExcelAssistant.png'}
        tag={'Productivity'}
      >
        Transform your data work with AI. From automating calculations to
        creating complex formulas, Excel Assistant streamlines your spreadsheet
        tasks and saves valuable time.
      </Card>
      <Card
        title={'Prompt Generator'}
        view={1443}
        img={'./image/PromptGenerator.png'}
        tag={'Productivity'}
      >
        Transform your data work with AI. From automating calculations to
        creating complex formulas, Excel Assistant streamlines your spreadsheet
        tasks and saves valuable time.
      </Card>
      <Card
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
        title={'Schedule Optimizer'}
        view={114}
        img={'./image/ScheduleOptimizer.png'}
        tag={'Productivity'}
      >
        Take control of your time with smart scheduling. Schedule Optimizer
        adjusts appointments and priorities for maximum productivity, balancing
        efficiency with your work-life needs.
      </Card>
      <Card
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
  );
};

export default ProductivityBlock;
