import MainPage from 'page/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ChatPage from 'page/Chat/ChatPage';
import PricingPage from 'page/Pricing/PricingPage';
import { Toaster } from 'react-hot-toast';
import Polisy from './Policy/Polisy';
import Terms from 'page/Terms/Terms';

export const App = () => {
  return (
    <>
      {/* <Header /> */}

      {/* <MainPage></MainPage> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="policy" element={<Polisy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
        <Route path="chat" element={<ChatPage />} />
      </Routes>
      <Toaster />
    </>
  );
};
