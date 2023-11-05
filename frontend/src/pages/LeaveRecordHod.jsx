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
  const [modalOpen, setModalOpen] = useState(false);

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
              Type
            </TableHead>
            <TableHead className=" text-white text-center border-0">
              Status
            </TableHead>
            <TableHead className="text-white text-left">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
            <TableCell>
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger className="flex justify-center ">
                  <div className="bg-[#547AFF] -ml-1 text-semibold text-white rounded-lg w-full h-[30px] px-2 flex items-center justify-center font-semibold">
                    View
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex justify-center"> </DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="flex flex-col gap-4 justify-center w-full items-center">
                    <Button className="bg-[#5932EA] rounded-xl w-32 font-bold text-md px-2 h-8 -mt-6">
                      DETAILS
                    </Button>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">FACULTY:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        Reeta Koshy
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">
                        DATE OF APPLICATION:
                      </h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        15-08-2023
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">DATE OF LEAVE:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        20-08-2023
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">TYPE OF LEAVE:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        Sick Leave
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">REASON:</h2>
                      <h6 className="text-base font-normal text-gray-400 mb-6">
                        I am very very sick
                      </h6>
                    </div>
                    <div className="w-full flex gap-4 justify-center items-center">
                      <div className="bg-[#37E534] hover:bg-[#FFBE42] w-24 -ml-1 text-semibold text-white rounded-lg  h-[30px] px-2 flex items-center justify-center font-semibold shadowBig duration-200 cursor-pointer">
                        ACCEPT
                      </div>
                      <div className="bg-[#FD3535] w-24 -ml-1 text-semibold text-white rounded-lg h-[30px] px-2 flex items-center justify-center font-semibold shadowBig hover:bg-[#FFBE42] duration-200 cursor-pointer">
                        REJECT
                      </div>
                    </div>
                    <div className="bg-[#547AFF] w-24 -ml-1 font-bold text-white rounded-lg h-[30px] px-2 flex items-center justify-center  shadowBig hover:bg-gray-700 duration-200 cursor-pointer">
                      CONFIRM
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
          {/* 2 */}
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
              <div className="bg-[#37E534] text-semibold px-6 text-white rounded-lg w-2/3 h-[30px] flex items-center justify-center font-semibold">
                Approved
              </div>
            </TableCell>
            <TableCell>
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger className="flex justify-center ">
                  <div className="bg-[#547AFF] -ml-1 text-semibold text-white rounded-lg w-full h-[30px] px-2 flex items-center justify-center font-semibold">
                    View
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex justify-center"> </DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="flex flex-col gap-4 justify-center w-full items-center">
                    <Button className="bg-[#5932EA] rounded-xl w-32 font-bold text-md px-2 h-8 -mt-6">
                      DETAILS
                    </Button>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">FACULTY:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        Reeta Koshy
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">
                        DATE OF APPLICATION:
                      </h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        15-08-2023
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">DATE OF LEAVE:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        20-08-2023
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">TYPE OF LEAVE:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        Sick Leave
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">REASON:</h2>
                      <h6 className="text-base font-normal text-gray-400 mb-6">
                        I am very very sick
                      </h6>
                    </div>
                    <div className="w-full flex gap-4 justify-center items-center">
                      <div className="bg-[#37E534] hover:bg-[#FFBE42] w-24 -ml-1 text-semibold text-white rounded-lg  h-[30px] px-2 flex items-center justify-center font-semibold shadowBig duration-200 cursor-pointer">
                        ACCEPT
                      </div>
                      <div className="bg-[#FD3535] w-24 -ml-1 text-semibold text-white rounded-lg h-[30px] px-2 flex items-center justify-center font-semibold shadowBig hover:bg-[#FFBE42] duration-200 cursor-pointer">
                        REJECT
                      </div>
                    </div>
                    <div className="bg-[#547AFF] w-24 -ml-1 font-bold text-white rounded-lg h-[30px] px-2 flex items-center justify-center  shadowBig hover:bg-gray-700 duration-200 cursor-pointer">
                      CONFIRM
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
          {/* 3 */}
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
              <div className="bg-[#FD3535] text-semibold text-white rounded-lg w-2/3 h-[30px] flex items-center justify-center font-semibold">
                Rejected
              </div>
            </TableCell>
            <TableCell>
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger className="flex justify-center ">
                  <div className="bg-[#547AFF] -ml-1 text-semibold text-white rounded-lg w-full h-[30px] px-2 flex items-center justify-center font-semibold">
                    View
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex justify-center"> </DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="flex flex-col gap-4 justify-center w-full items-center">
                    <Button className="bg-[#5932EA] rounded-xl w-32 font-bold text-md px-2 h-8 -mt-6">
                      DETAILS
                    </Button>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">FACULTY:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        Reeta Koshy
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">
                        DATE OF APPLICATION:
                      </h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        15-08-2023
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">DATE OF LEAVE:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        20-08-2023
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">TYPE OF LEAVE:</h2>
                      <h6 className="text-base font-normal text-gray-400 ">
                        Sick Leave
                      </h6>
                    </div>
                    <div className="w-full flex gap-2  -mb-3">
                      <h2 className="font-bold text-base">REASON:</h2>
                      <h6 className="text-base font-normal text-gray-400 mb-6">
                        I am very very sick
                      </h6>
                    </div>
                    <div className="w-full flex gap-4 justify-center items-center">
                      <div className="bg-[#37E534] hover:bg-[#FFBE42] w-24 -ml-1 text-semibold text-white rounded-lg  h-[30px] px-2 flex items-center justify-center font-semibold shadowBig duration-200 cursor-pointer">
                        ACCEPT
                      </div>
                      <div className="bg-[#FD3535] w-24 -ml-1 text-semibold text-white rounded-lg h-[30px] px-2 flex items-center justify-center font-semibold shadowBig hover:bg-[#FFBE42] duration-200 cursor-pointer">
                        REJECT
                      </div>
                    </div>
                    <div className="bg-[#547AFF] w-24 -ml-1 font-bold text-white rounded-lg h-[30px] px-2 flex items-center justify-center  shadowBig hover:bg-gray-700 duration-200 cursor-pointer">
                      CONFIRM
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaveRecordHod;
