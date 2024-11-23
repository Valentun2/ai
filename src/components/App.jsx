import MainPage from 'page/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ChatPage from 'page/Chat/ChatPage';
import PricingPage from 'page/Pricing/PricingPage';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      {/* <Header /> */}

      {/* <MainPage></MainPage> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="pricing" element={<PricingPage />} />
        </Route>
        <Route path="chat" element={<ChatPage />} />
      </Routes>
      <Toaster />
    </>
  );
};
