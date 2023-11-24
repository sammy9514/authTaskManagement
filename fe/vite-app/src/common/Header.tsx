import { Link, NavLink } from "react-router-dom";
import { IoSunnyOutline, IoDesktopOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineNightsStay } from "react-icons/md";
import { useEffect, useState } from "react";
export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  // useEffect(() => {
  // })

  const user = JSON.parse(localStorage.getItem("user")!);
  const onToggle = () => {
    setToggle(!toggle);
  };
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  const [colorr, setColorr] = useState<any>(color);
  useEffect(() => {
    const col = (colo: any) => {
      setColorr(() => {
        localStorage.setItem("color", JSON.stringify(colo));
      });
    };
  }, []);
  const get: any = () => {
    JSON.parse(localStorage.getItem("color")!);
  };

  return (
    <div>
      <div className="flex w-full h-[70px] border-b justify-center relative ">
        <div className="flex items-center justify-between w-[96%]  ">
          <div className="text-purple-500 font-bold text-[20px]">TaskVue.</div>

          <div className="flex items-center">
            {user ? (
              <div
                className="w-10 h-10 flex justify-center items-center rounded-full text-white font-bold text-[20px] mx-3 hover:cursor-pointer "
                style={{ backgroundColor: colorr }}
                onClick={onToggle}
              >
                {user.data.companyName.charAt(0).toUpperCase()}
              </div>
            ) : (
              <Link
                to="/login"
                className="min-w-10 px-5 h-10 flex justify-center items-center rounded-md bg-purple-500 text-white font-bold text-[15px] mx-3 hover:cursor-pointer hover:bg-purple-700 transition-all duration-250"
                onClick={() => {}}
              >
                Log in
              </Link>
            )}

            {user ? (
              <div className="flex items-center bg-gray-200 px-3 py-1 border rounded-md">
                <NavLink
                  to="/dark"
                  className={({ isActive }: any) =>
                    isActive
                      ? "mx-1 text-[30px] bg-white text-[#565656] rounded-[4px] py-1 px-3 shadow-sm"
                      : "mx-1 text-[35px] rounded-[4px] py-1 px-2 "
                  }
                >
                  <IoSunnyOutline size={25} />
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }: any) =>
                    isActive
                      ? "mx-1 text-[30px] bg-white text-[#565656] rounded-[4px] py-1 px-3 shadow-sm "
                      : "mx-1 text-[35px]  rounded-[4px] py-1 px-2 "
                  }
                >
                  <MdOutlineNightsStay size={25} />
                </NavLink>

                <IoDesktopOutline className="mx-1 text-[35px] rounded-[4px] py-1 px-2 " />
              </div>
            ) : (
              <Link
                to="/sign-up?freemo"
                className="min-w-10 px-3 h-10 flex justify-center items-center rounded-md border-purple-500 font-semibold border text-[15px] mx-3 hover:cursor-pointer "
                onClick={() => {}}
              >
                Sign up for FreeMo
              </Link>
            )}
          </div>
        </div>
      </div>

      {toggle && (
        <div className="w-[400px] h-[200px] bg-white shadow-md border rounded-md absolute right-[10%] top-[10%] z-2">
          <div className="flex mt-6 ">
            <div
              className="w-16 h-16 flex justify-center items-center rounded-full text-white font-bold text-[20px] mx-3  "
              style={{ backgroundColor: colorr }}
            >
              {user.data.companyName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-[20px] font-bold  ">
                {user.data.companyName}
              </div>
              <div className="leading-3">{user.data.email}</div>
            </div>
          </div>

          <div className="mt-6 pl-4 py-3 flex items-center  text-[gray] hover:bg-[lightgray] transition-all duration-200 hover:cursor-pointer">
            <LuLogOut />
            <span
              className="ml-8"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
                onToggle();
              }}
            >
              Log Out
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// tew@gmail.com
