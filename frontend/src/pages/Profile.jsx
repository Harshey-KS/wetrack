import React from "react";
import { ProfileCard } from "../components/ProfileCard";
import Heading from "../components/Heading";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading title="Profile" />
      <ProfileCard />
    </div>
  );
};

export default Profile;
