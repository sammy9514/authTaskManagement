import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FC, useState } from "react";
import { createBromo, createFremo, createPremo } from "../api/authApi";
import LoadingScreen from "../common/LoadingScreen";

// import { SyncLoader } from "react-spinners";

export const Sign_up: FC = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const schema = yup.object({
    companyName: yup.string().required("User name must be filled"),
    email: yup.string().email().required("email must be filled"),
    password: yup.string().min(6).required("password must be filled"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const url = window.location.search.substring(1);

  console.log(url);

  const color: any = (free: any, bro: any, pro: any) => {
    return url === "freemo"
      ? free
      : url === "bromo"
      ? bro
      : url === "premo"
      ? pro
      : null;
  };
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    setToggle(true);
    // console.log(data);

    const { companyName, email, password, confirm } = data;
    {
      url === "freemo"
        ? createFremo({
            companyName,
            email,
            password,
            confirm,
            plan: "freemo",
          }).then(() => {
            setToggle(false);
            navigate("/login");
          })
        : url === "bromo"
        ? createBromo({
            companyName,
            email,
            password,
            confirm,
            plan: "bromo",
          }).then(() => {
            setToggle(false);
            navigate("/login");
          })
        : url === "premo"
        ? createPremo({
            companyName,
            email,
            password,
            confirm,
            plan: "premo",
          }).then(() => {
            setToggle(false);
            navigate("/login");
          })
        : null;
    }
    reset();
  });

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {toggle && <LoadingScreen />}
      <div className="border rounded-md w-[400px] min-h-[300px] shadow-sm mx-4 p-[10px]">
        <form className="pl-4 mt-8" onSubmit={onHandleSubmit}>
          <span className="font-bold text-[20px] capitalize">
            Register{" "}
            <span style={{ color: color("#ed4444", "#eab307", "#a855f7") }}>
              {url}{" "}
            </span>
            Account
          </span>
          <br />
          <br />
          <hr />
          <br />
          <br />
          {/* Input form */}

          <div>
            <div className=" text-[12px] ">companyName</div>
            <input
              className="pl-2 border h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="companyName"
              {...register("companyName")}
            />
            <div className="w-[95%] justify-end flex">
              {errors.companyName?.message && (
                <div className="text-[12px] text-red-600 ">
                  {errors.companyName?.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className=" text-[12px] mt-2">email</div>
            <input
              className="pl-2 border h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="email"
              {...register("email")}
            />
            <div className="w-[95%] justify-end flex">
              {errors.email?.message && (
                <div className="text-[12px] text-red-600 ">
                  {errors.email?.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className=" text-[12px] mt-2">password</div>
            <input
              className="pl-2 border h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="password"
              {...register("password")}
            />
            <div className="w-[95%] justify-end flex">
              {errors.password?.message && (
                <div className="text-[12px] text-red-600 ">
                  {errors.password?.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className=" text-[12px] mt-2 ">confirm</div>
            <input
              className="pl-2 border h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="confirm"
              {...register("confirm")}
            />
            <div className="w-[95%] justify-end flex ">
              {errors.confirm?.message && (
                <div className="text-[12px] text-red-600 ">
                  password must match
                </div>
              )}
            </div>
          </div>

          <br />
          <br />
          <div className="w-[95%]">
            {url === "freemo" ? (
              <>
                <button
                  className="w-full flex bg-red-500 rounded-sm justify-center py-3 text-white duration-300 transition-all hover:shadow-md "
                  type="submit"
                >
                  {toggle ? "dd" : "sign up"}
                  {/* <SyncLoader color="white" size={11} /> */}
                </button>
                <div className="text-[12px] mt-2 text-center">
                  Already have an Account,
                  <Link to="/login">
                    <strong
                      className="text-purple-900 ml-1 font-bold"
                      style={{ color: color("#ed4444", "#eab307", "#a855f7") }}
                    >
                      Sign in here
                    </strong>
                  </Link>
                </div>{" "}
              </>
            ) : url === "bromo" ? (
              <>
                <button
                  className="w-full flex bg-yellow-500 rounded-sm justify-center py-3 text-white duration-300 transition-all hover:shadow-md "
                  type="submit"
                >
                  {toggle ? "dd" : "sign up"}
                  {/* <SyncLoader color="white" size={11} /> */}
                </button>
                <div className="text-[12px] mt-2 text-center">
                  Already have an Account,
                  <Link to="/login">
                    <strong
                      className="text-purple-900 ml-1 font-bold"
                      style={{ color: color("#ed4444", "#eab307", "#a855f7") }}
                    >
                      Sign in here
                    </strong>
                  </Link>
                </div>
              </>
            ) : url === "premo" ? (
              <>
                <button
                  className="w-full flex bg-purple-500 rounded-sm justify-center py-3 text-white duration-300 transition-all hover:shadow-md "
                  type="submit"
                >
                  {toggle ? "dd" : "sign up"}
                  {/* <SyncLoader color="white" size={11} /> */}
                </button>
                <div className="text-[12px] mt-2 text-center">
                  Already have an Account,
                  <Link to="/login">
                    <strong
                      className="text-purple-900 ml-1 font-bold"
                      style={{ color: color("#ed4444", "#eab307", "#a855f7") }}
                    >
                      Sign in here
                    </strong>
                  </Link>
                </div>
              </>
            ) : null}
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};
