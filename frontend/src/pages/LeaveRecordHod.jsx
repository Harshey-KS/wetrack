import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import Heading from "../components/Heading";
import { Button } from "../components/ui/button";
import { DatePickerDemo } from "../components/DatePicker";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const LeaveRecordHod = () => {
  const [leaveRecords, setLeaveRecords] = useState([]);
  const { user } = useAuthContext();

  const fetchData = async () => {
    const res = await axios.get(`leave-records/${user?.id}`);
    if (res?.data) {
      setLeaveRecords(res?.data);
    }
  };

  useEffect(() => {
    if (user?.id) fetchData();
  }, [user]);
  console.log(leaveRecords);

  return (
    <div className="flex justify-center items-center flex-col">
      <Heading title="Leave Record" />
      <Table className="bg-white rounded-2xl overflow-hidden w-4/5 mt-4 mx-auto shadowBig mb-6">
        <TableCaption> </TableCaption>
        <TableHeader className="bg-[#5932EA] ">
          <TableRow className="shadow-lg shadow-indigo-500/40 border-none">
            <TableHead className=" text-white text-center border-0">
              Faculty
            </TableHead>
            <TableHead className=" text-white text-center border-none">
              Date of Application
            </TableHead>
            <TableHead className=" text-white text-center border-none">
              Date of Leave
            </TableHead>
            <TableHead className=" text-white text-center border-0">
              Reason
            </TableHead>
            <TableHead className=" text-white text-center border-0">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveRecords?.map((leave) => (
            <TableRow className="border border-b-gray-400 shadowLittle hover:bg-zinc-300/90 transition-300">
              <TableCell className="text-center font-medium">
                Reeta Koshy
              </TableCell>
              <TableCell className="text-center font-medium">
                13th August 2023
              </TableCell>
              <TableCell className="text-center font-medium">
                16th August 2023
              </TableCell>
              <TableCell className="text-center font-medium">
                Sick Leave
              </TableCell>
              <TableCell className="flex justify-center ">
                <div className="bg-yellow-400 text-semibold text-white rounded-lg w-2/3 h-[30px] flex items-center justify-center font-semibold">
                  Pending
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Dialog>
        <DialogTrigger>
          {" "}
          <Button className="bg-[#5932EA] hover:bg-zinc-400 hover:text-black rounded-xl font-bold">
            Apply for Leave
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              {" "}
              <Button className="bg-[#5932EA] rounded-xl font-bold text-lg p-2 px-4 mb-8">
                APPLICATION FORM
              </Button>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="flex flex-col gap-4 justify-center w-full items-center">
            <div className="flex justify-between m-2 gap-8 mr-8">
              <Button className="  bg-white text-gray-500 rounded-lg font-bold  text-md p-2 px-5 h-9">
                DATE OF LEAVE:
              </Button>
              <DatePickerDemo />
            </div>
            <div className="flex justify-between m-4 mr-8">
              <Button className="bg-white text-gray-500 rounded-lg  text-md font-bold px-16 h-9">
                REASON:
              </Button>
              <input
                type="text"
                className="bg-white border border-slate-200 rounded-md h-9 mr-3 p-2 w-64"
                placeholder="Type Here"
              />
            </div>
            <Button className="bg-[#5932EA] rounded-xl font-bold text-md h-8 w-1/5 hover:bg-gray-300 hover:text-gray-600 duration-300 ">
              SUBMIT
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default LeaveRecordHod;
