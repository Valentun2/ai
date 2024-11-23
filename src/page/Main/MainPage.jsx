import Hero from 'components/Hero';
import AIList from 'components/list_ai/AIList';
import Support from 'components/support/Support';
import { useEffect, useState } from 'react';

function MainPage() {
  const [value, setValue] = useState('');
  const handleClick = e => {
    console.dir(e.target.innerText);
    setValue(e.target.innerText);
    window.scrollBy({
      top: 300, // Кількість пікселів для скролу вниз
      behavior: 'smooth', // Плавна анімація
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero click={handleClick} />
      <AIList value={value} />
      <Support />
      {/* <Footer /> */}
    </>
  );
}

export default MainPage;
