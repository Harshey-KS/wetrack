import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { LuMail } from "react-icons/lu";
import { useAuthContext } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";

export function ProfileCard() {
  const { user } = useAuthContext();
  return (
    <Card className="w-96 h-64 flex justify-center items-center mt-8 overflow-hidden rounded-2xl shadowBig">
      <div className="bg-[#5932EA] w-full flex justify-center p-4 ">
        <CardHeader floated={false} className="h-28 w-28 rounded-full mt-5 ">
          <CgProfile className="h-[120px] w-[120px] pr-2 pb-1.5 bg-white" />
        </CardHeader>
      </div>
      <CardBody className="text-center">
        <Typography variant="h4" color="black" className="font-bold -mt-4">
          {user?.name}
        </Typography>
        <Typography
          className="font-base -mt-1 text-sm text-gray-500"
          textGradient
        >
          {user?.department}{" "}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-end items-end gap-1 pt-2 ">
        <LuMail />
        <p className="text-xs ">{user?.email}</p>
      </CardFooter>
    </Card>
  );
}
