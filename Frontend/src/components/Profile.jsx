import React, { useState } from "react";
import Navbar from "./shared/Navbar";
// import { Avatar } from "@radix-ui/react-avatar";
// import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./button";
import { Pen, Mail, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import { Avatar, AvatarImage } from "./ui/avatar";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
// const skills = ["Html", "css", "Javascript", "React"];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl max-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/business-abstract-logo-symbol-concept-600w-1263069847.jpg"
                alt="Company Logo"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right">
            <Pen />
          </Button>
        </div>
        {/* my-for gap */}
        <div className="my-5">
          <div className="flex items-center gap-3">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gal-1">
            {user?.profile?.skills && user.profile.skills.length !== 0 ? (
  user.profile.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
) : (
  <span>NA</span>
)}

          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {
            // for target blank to go on another page if is resume is true
            isResume ? (
              <a
                target="black"
                href={user?.profile?.resume}
                className="text-blue-500 w-full hover:underline cursor-pointer"
              >{user?.profile?.resumeOriginalName}
              </a>
            ) : (
              <span>NA</span>
            )
          }
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          {/* AppliedJob Table table */}
          <AppliedJobTable />
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
