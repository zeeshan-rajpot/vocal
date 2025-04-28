import React from 'react';

const Pricing = () => {
  const features = [
    {
      title: 'Trust and privacy by design',
      description:
        'We only collect the minimum data needed to find you coupon codes, giving you complete control. Our technology automatically detects and respects existing partnerships, ensuring fair compensation.',
      icon: 'https://cdn.simplycodes.com/web/images/home/trust.png?width=1536&outputFormat=avif&fit=min', // Placeholder for illustration
    },
    {
      title: 'Rewards at all stores',
      description:
        "At any online destination where you can make a transaction, you’ll earn points— from trending brands to old faves, and even subscription sign-ups!",
      icon: 'https://cdn.simplycodes.com/web/images/home/stores_img.png?width=1536&outputFormat=avif&fit=min', // Placeholder for illustration
    },
    {
      title: 'Powered by AI and community',
      description:
        'SimplyCodes coupon finder combines thousands of new discount codes captured daily by artificial intelligence with insights from real people who share and verify deals. Together, they create a more reliable way to save.',
      icon: 'https://cdn.simplycodes.com/web/images/home/verified_codes_img.png?width=1536&outputFormat=avif&fit=min', // Placeholder for illustration
    },
  ];

  return (
    <div className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col items-start text-start shadow-lg"
          >
            <h3 className="text-[28px] font-bold mb-4">{feature.title}</h3>
            <p className="text-black mb-6 text-[17px]">{feature.description}</p>
            <div >
              {/* Placeholder for illustration */}
              <div className="  ml-auto ">
                {/* <span className="text-4xl">{feature.icon}</span> */}
                <img src={feature.icon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;