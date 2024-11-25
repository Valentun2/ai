import Hero from 'components/Hero';
import AIList from 'components/list_ai/AIList';
import Support from 'components/support/Support';
import { useEffect, useState } from 'react';

function MainPage() {
  const [value, setValue] = useState('');
  const [searchAI, setSearchAI] = useState('');
  // const [visibleContainer, setVisibleContainer] = useState(false);

  const scrollToElement = () => {
    const element = document.getElementById('productivity');
    if (element) {
      const rect = element.getBoundingClientRect(); // Позиція елемента відносно вікна
      const offset = 250; // Додаткові пікселі
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      window.scrollTo({
        top: rect.top + scrollTop - offset, // Додаємо додатковий відступ
        behavior: 'smooth', // Плавна прокрутка
      });
    }
  };

  const handleClick = e => {
    console.dir(e.target.innerText);
    setValue(e.target.innerText);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    setSearchAI(e.target.search.value);
    scrollToElement();
  };

  const handleClickReset = e => {
    e.target.parentElement.parentElement.reset();
    setSearchAI('');
  };

  return (
    <>
      <Hero
        click={handleClick}
        handleSearch={handleSearch}
        handleClickReset={handleClickReset}
      />
      <AIList value={value} searchValue={searchAI} />
      <Support />
      {/* <Footer /> */}
    </>
  );
}

export default MainPage;
