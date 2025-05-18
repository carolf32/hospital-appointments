import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { getData, getDashData, aToken, cancelAppointment } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 hover:scale-105 transition-all border-gray-100 cursor-pointer">
            <img src={assets.doctor_icon} alt="Doctor icon" className="w-14" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.doctors}
              </p>
              <p className="text-gray-400">Doctors</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 hover:scale-105 transition-all border-gray-100 cursor-pointer">
            <img
              src={assets.appointments_icon}
              alt="Appointments icon"
              className="w-14"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 hover:scale-105 transition-all border-gray-100 cursor-pointer">
            <img
              src={assets.patients_icon}
              alt="Patients icon"
              className="w-14"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.patients}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-gray-200">
            <img src={assets.list_icon} alt="List icon" />
            <p className="font-semibold">Latest bookings</p>
          </div>
          <div className="pt-4 border border-t-0 border-gray-200">
            {dashData.latestAppointments.map((item, index) => {
              <div
                key={index}
                className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
              >
                <img
                  src={item.docData.image}
                  alt="Doctor picture"
                  className="rounded-full w-10"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800  font-medium">
                    {item.docData.name}
                  </p>
                  <p className="text-gray-600">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-400 text-xs font-medium">Cancelled</p>
                ) : (
                  <img
                    className="w-10 cursor-pointer"
                    src={assets.cancel_icon}
                    alt="Cancel icon"
                    onClick={() => cancelAppointment(item._id)}
                  />
                )}
              </div>;
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
