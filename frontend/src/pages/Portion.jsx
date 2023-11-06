import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Cards from "../components/Cards";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const Portion = () => {
  const { user } = useAuthContext();
  const [teacher, setTeacher] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`teachers/${user?.id}`);
    if (res?.data) {
      console.log(res?.data);
      setTeacher(res?.data);
    }
  };

  const updatePortion = async (classes) => {
    const res = await axios.put(`teachers/${user.id}`, { ...teacher, classes });
    if (res?.data) {
      await fetchData();
    }
  };

  useEffect(() => {
    if (user?.id) fetchData();
  }, [user]);
  return (
    <div className="flex flex-col">
      <Heading title={"Portion"} />
      <Cards
        cards={teacher?.classes}
        updatePortion={updatePortion}
        setTeacher={setTeacher}
      />
    </div>
  );
};

export default Portion;
