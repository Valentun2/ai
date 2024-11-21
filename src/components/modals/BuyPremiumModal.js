const BuyPremiumModal = () => {
  return (
    <div className=" overflow-auto  w-[100%] h-screen fixed top-10  bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center ">
      <div className=" overflow-auto max-h-[calc(100vh-150px)] w-[358px]  md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl relative scrollbar-none">
        <button className="absolute right-0 top-0 md:right-3 md:top-3 bg-transparent">
          <svg
            width={24}
            height={24}
            className="flex p-2 justify-center items-center w-8 h-8  rounded-[6px] pointer-events-none"
          >
            <use
              width={14}
              height={14}
              href="ai/image/icons.svg#icon-close"
            ></use>
          </svg>
        </button>
        <h4 className="text-center font-semibold text-[24px]">
          Unlock Premium to Chat
        </h4>
        <p className="text-center text-pricingText text-[14px] mt-2">
          Get full access to our powerful AI tools and enhance your
          productivity!
        </p>
        <div className="overflow-hidden">
          <ul className="flex gap-4 mt-4 overflow-x-auto scroll-smooth snap-x snap-mandatory whitespace-nowrap">
            <li className="flex-none w-[173px] h-[212px] border border-modalBorder rounded-2xl p-4">
              <p className="font-semibold text-[24px]">1 month</p>
              <p className="font-semibold text-[16px]">$15 /month</p>
            </li>
            <li className="flex-none w-[173px] h-[212px] border border-modalBorder rounded-2xl p-4">
              <p className="font-semibold text-[24px]">3 months</p>
              <p className="font-semibold text-[16px]">$40 /3 month</p>
            </li>
            <li className="flex-none w-[173px] h-[212px] border border-modalBorder rounded-2xl p-4">
              <p className="font-semibold text-[24px]">12 months</p>
              <p className="font-semibold text-[16px]">$140 /year</p>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-[18px]">Features</p>
          <ul className="mt-1">
            <li>
              <p className="text-[16px] text-pricingText">
                Unlimited Access to All AI Models{' '}
              </p>
              <p className="text-[14px] text-cardsText">
                Use any AI tool at any time to tackle your tasks effortlessly{' '}
              </p>
            </li>
            <li className="mt-1">
              <p className="text-[16px] text-pricingText">Priority Support </p>
              <p className="text-[14px] text-cardsText">
                Get assistance whenever you need it, with priority support{' '}
              </p>
            </li>
            <li className="mt-1">
              <p className="text-[16px] text-pricingText">
                Regular Updates & New Models{' '}
              </p>
              <p className="text-[14px] text-cardsText">
                Access the latest AI tools as soon as they’re released, at no
                extra cost
              </p>
            </li>
          </ul>
        </div>
        <p className="text-[16px] text-pricingText mt-6">
          By proceeding with this purchase, you agree to our Terms of Service
          and acknowledge that all sales are final. Subscription renewals will
          be billed automatically unless canceled before the next billing cycle.
        </p>
        <button className="bg-[#0099FF] text-black rounded-xl w-[100%] py-3 text-center mt-4">
          Continue $40
        </button>
      </div>
    </div>
  );
};

export default BuyPremiumModal;
