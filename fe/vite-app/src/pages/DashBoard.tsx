import { Body } from "../common/Body";
import { Sider } from "../common/Sider";

export const DashBoard = () => {
  return (
    <div className="flex ">
      <Sider />
      <Body />
    </div>
  );
};
