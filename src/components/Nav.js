import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const link = [{
  id: 1,
  title: "Saga",
  to: "/saga"
}]

const Nav = () => {
  return (
    <div>
      <nav className="p-5 bg-slate-700 text-white text-base w-full ">
        {link.map(item=>(
          <NavLink key={item.id} to={item.to}>{item.title}</NavLink>
        ))}
      </nav> 
      <Outlet></Outlet>
    </div>
  );
};

export default Nav;