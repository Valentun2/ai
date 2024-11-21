import Card from './AICard';

const EducationBlock = () => {
  return (
    <ul className="flex flex-wrap gap-4 mt-4">
      <Card
        title={'Language Tutor'}
        view={4313}
        img={'./image/LanguageTutor.png'}
        tag={'Education'}
      >
        Learn new languages with personalized lessons. Language Tutor adjusts to
        your level, making language learning engaging and effective.
      </Card>
      <Card
        title={'Math Solver'}
        view={541}
        img={'./image/MathSolver.png'}
        tag={'Education'}
      >
        Solve equations and understand math concepts easily. Math Solver
        explains each step, so you learn as you go.
      </Card>
      <Card
        title={'Study Organizer'}
        view={623}
        img={'./image/StudyOrganizer.png'}
        tag={'Education'}
      >
        Keep track of assignments and exams. Study Organizer creates a
        personalized study schedule based on your goals.
      </Card>
      <Card
        title={'Essay Assistant'}
        view={724}
        img={'./image/EssayAssistant.png'}
        tag={'Education'}
      >
        Draft and improve your essays with AI guidance. Essay Assistant helps
        with structure, clarity, and grammar.
      </Card>
      <Card
        title={'Flashcard Generator'}
        view={135}
        img={'./image/FlashcardGenerator.png'}
        tag={'Education'}
      >
        Boost your memory with custom flashcards. Flashcard Generator helps you
        review key concepts effectively.
      </Card>
      <Card
        title={'Quiz Creator'}
        view={6234}
        img={'./image/QuizCreator.png'}
        tag={'Education'}
      >
        Create quizzes to test your knowledge. Quiz Creator generates questions
        and tracks progress to aid your studies.
      </Card>
      <Card
        title={'Reading Comprehension'}
        view={154}
        img={'./image/ReadingComprehension.png'}
        tag={'Education'}
      >
        Improve your understanding of complex texts. Comprehension Helper
        highlights key points and explains difficult concepts.
      </Card>
      <Card
        title={'Science Lab Helper'}
        view={314}
        img={'./image/ScienceLabHelper.png'}
        tag={'Education'}
      >
        Conduct virtual experiments with ease. Lab Helper provides simulations
        and explanations for hands-on learning.
      </Card>
    </ul>
  );
};

export default EducationBlock;
