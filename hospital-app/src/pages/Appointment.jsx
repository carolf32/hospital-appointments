import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDoctor = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDoctor();
  }, [docId, doctors]);

  return (
    docInfo && (
      <div>
        {/* Doctor details */}
        <div>
          <div>
            <img src={docInfo.image} alt="" />
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
