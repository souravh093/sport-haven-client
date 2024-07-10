import { NavLink } from "react-router-dom";

type TMenuItemProps = {
  name: string;
  path: string;
};

const MenuItem = ({ name, path }: TMenuItemProps) => {
  return (
    <NavLink
      className="text-white font-semibold hover:text-[#F7E7DC] transition duration-100 cursor-pointer"
      to={path}
    >
      {name}
    </NavLink>
  );
};

export default MenuItem;
