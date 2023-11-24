import { useState } from "react";
import { IoToggleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  const [naira, setNaira] = useState(1133);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[93.6vh] ">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <h1 className="text-[35px] font-[600] mb-7">
          <span className="text-purple-500">TaskVue.</span> Task Management
          Platform Plans and Pricing
        </h1>
        <div className="flex items-center gap-2 text-[20px] mb-7">
          Pay in{" "}
          {toggle ? (
            <div> Dollar </div>
          ) : (
            <div className="font-semibold"> Dollar </div>
          )}
          {toggle ? (
            <div className="text-[35px] text-[gray]" onClick={toggleBtn}>
              <IoToggleSharp />
            </div>
          ) : (
            <div
              className="text-[35px] text-[gray] rotate-180"
              onClick={toggleBtn}
            >
              <IoToggleSharp />
            </div>
          )}
          {toggle ? (
            <div className="font-semibold"> Naira </div>
          ) : (
            <div> Naira </div>
          )}
        </div>
        <div className="w-[60%] border h-[70%] flex shadow-lg">
          <div className="w-[33.3%] border-r px-[25px] py-[30px]">
            <h3 className="font-semibold text-[23px] mb-3 text-red-500">
              FreeMo
            </h3>
            <p className="text-[14px] mb-[80px]">Manage companies projects</p>
            {!toggle ? (
              <h2 className="text-[40px] font-semibold flex mb-3">
                <div className="text-[23px] font-semibold">$</div>0
              </h2>
            ) : (
              <h2 className="text-[40px] font-semibold flex mb-3">
                <div className="text-[23px] font-semibold">₦</div>
                {naira * 0}
              </h2>
            )}
            <p className="text-[14px] mb-10">Pay in Naira or Dollar</p>

            <Link to={"sign-up?freemo"}>
              <button className="px-[30px] w-full bg-red-500 py-[8px] rounded-sm text-white font-bold mb-8">
                Buy Now
              </button>
            </Link>

            <div className="text-[14px] mb-2">HighLights of plan features:</div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">Free</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">5 Staffs</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">7 Company Projects</div>
            </div>
          </div>

          <div className="w-[33.3%] px-[25px] py-[30px]">
            <h3 className="font-semibold text-[23px] mb-3 text-yellow-500">
              BroMo
            </h3>
            <p className="text-[14px] mb-[80px]">Manage companies projects</p>
            {!toggle ? (
              <h2 className="text-[40px] font-semibold flex mb-3">
                <div className="text-[23px] font-semibold">$</div>4.99
              </h2>
            ) : (
              <h2 className="text-[40px] font-semibold flex mb-3">
                <div className="text-[23px] font-semibold">₦</div>
                {(naira * 4.99).toLocaleString()}
              </h2>
            )}
            <p className="text-[14px] mb-10">Pay in Naira or Dollar</p>

            <Link to={"sign-up?bromo"}>
              <button className="px-[30px] w-full bg-yellow-500 py-[8px] rounded-sm text-white font-bold mb-8">
                Buy Now
              </button>
            </Link>

            <div className="text-[14px] mb-2">HighLights of plan features:</div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">Plan Budgets</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">10 Staffs</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">15 Company Projects</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">Project Statistics</div>
            </div>
          </div>

          <div className="w-[33.3%] border-l px-[25px] py-[30px]">
            <h3 className="font-semibold text-[23px] mb-3 text-purple-500">
              PreMo
            </h3>
            <p className="text-[14px] mb-[80px]">Manage companies projects</p>
            {!toggle ? (
              <h2 className="text-[40px] font-semibold flex mb-3">
                <div className="text-[23px] font-semibold">$</div>9.99
              </h2>
            ) : (
              <h2 className="text-[40px] font-semibold flex mb-3">
                <div className="text-[23px] font-semibold">₦</div>
                {(naira * 9.99).toLocaleString()}
              </h2>
            )}
            <p className="text-[14px] mb-10">Pay in Naira or Dollar</p>

            <Link to={"/sign-up?premo"}>
              <button className="px-[30px] w-full bg-purple-500 py-[8px] rounded-sm text-white font-bold mb-8">
                Buy Now
              </button>
            </Link>

            <div className="text-[14px] mb-2">HighLights of plan features:</div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">Plan Budgets</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">Unlimited Staffs</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">Unlimited Company Projects</div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="text-[20px] text-green-600 ">✓</div>
              <div className="text-[15px]">Project Statistics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
