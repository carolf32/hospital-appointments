import React from "react";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-white border-r border-gray-200">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            to={"/admin-dashboard"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] border-r-4 border-[var(--color-primary)]"
                  : ""
              } flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer`
            }
          >
            <img src={assets.home_icon} alt="Dashboard's icon" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            to={"/all-appointments"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] border-r-4 border-[var(--color-primary)]"
                  : ""
              } flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer`
            }
          >
            <img src={assets.appointment_icon} alt="Appointment's icon" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>
          <NavLink
            to={"/add-doctor"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] border-r-4 border-[var(--color-primary)]"
                  : ""
              } flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer`
            }
          >
            <img src={assets.add_icon} alt="Add doctor's icon" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>
          <NavLink
            to={"/doctors-list"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] border-r-4 border-[var(--color-primary)]"
                  : ""
              } flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer`
            }
          >
            <img src={assets.people_icon} alt="Doctors List's icon" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}
      {dToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            to={"/doctor-dashboard"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] border-r-4 border-[var(--color-primary)]"
                  : ""
              } flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer`
            }
          >
            <img src={assets.home_icon} alt="Dashboard's icon" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            to={"/doctor-appointments"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] border-r-4 border-[var(--color-primary)]"
                  : ""
              } flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer`
            }
          >
            <img src={assets.appointment_icon} alt="Appointment's icon" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink
            to={"/doctor-profile"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] border-r-4 border-[var(--color-primary)]"
                  : ""
              } flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer`
            }
          >
            <img src={assets.people_icon} alt="Doctors List's icon" />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
