import React from 'react';
import { VscVerifiedFilled } from "react-icons/vsc";
const Packages = () => {
  const plans = [
    {
      name: 'Basic plan',
      price: '₹499',
      discount: '70% off',
      features: [
        'Access to basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        'Basic chat and email support',
      ],
    },
    {
      name: 'Silver plan',
      price: '₹2999',
      discount: '50% off',
      features: [
        'Access to basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        'Basic chat and email support',
      ],
    },
    {
      name: 'Golden plan',
      price: '₹4999',
      discount: '60% off',
      features: [
        'Access to basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        'Basic chat and email support',
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:mt-16 mt-0 justify-center items-center gap-12 p-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white   border border-gray-300 shadow-xl rounded-2xl p-6 w-full max-w-xs lg:w-1/3"
        >
          <div className="flex justify-start gap-x-2 items-center mb-6">
            <h2 className="text-lg font-bold">{plan.name}</h2>
            <span className="bg-[#022213] text-white text-xs px-2 py-1 rounded-lg font-medium">
              {plan.discount}
            </span>
          </div>
          <div className="text-3xl font-bold mb-6">
            {plan.price}
            <span className="text-base font-normal"> Per month</span>
          </div>
          <p className="text-gray-900 font-medium  mb-5">Basic features for up to 10 users</p>
          <div className="mb-4">
            <h3 className="font-semibold">FEATURES</h3>
            <ul className="mt-2 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <VscVerifiedFilled className="text-[#72A10F]" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-[#022213] hover:bg-[#72A10F] transition duration-300 my-4 text-white py-2 rounded-sm ">
            Buy now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Packages;
