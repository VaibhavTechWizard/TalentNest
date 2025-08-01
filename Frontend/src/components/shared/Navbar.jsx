// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@radix-ui/react-popover";
// import React from "react";
// import { Button } from "../button";
// import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

// const Navbar = () => {
//   return (
//     <div className="bg-white">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h2 className="text-2xl font-bold">
//             Job<span className="text-[#F83002]">Portal</span>
//           </h2>
//         </div>
//         <div className="flex items-center gap-12">
//   <ul className="flex font-medium items-center gap-5">
//     {/* <li><Link>Home</Link></li>
// <li><Link>Jobs</Link></li>
// <li><Link>Browse</Link></li> */}

//     <li>Home</li>
//     <li>Jobs</li>
//     <li>Browse</li>
//   </ul>

//           <Popover>
//             <PopoverTrigger asChild>
//               <Avatar className="cursor-pointer w-10 h-10 rounded-full overflow-hidden">
//                 <AvatarImage
//                   src="https://github.com/shadcn.png"
//                   alt="@shadcn"
//                   className="w-full h-full object-cover"
//                 />
//               </Avatar>

//             </PopoverTrigger>
//            <PopoverContent className="w-80">
//   <Avatar>
//     <AvatarImage
//       src="https://github.com/shadcn.png"
//       alt="@shadcn"
//       className="w-full h-full object-cover"
//     />
//   </Avatar>
//   <h4 className="font-medium">Vaibhav Mernstack</h4>
// </PopoverContent>

//           </Popover>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Button } from "@/components/button"; // ✅ Adjust path as needed
import { User2 } from "lucide-react"; // ✅ Make sure to add this if you meant to use Lucide

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const user = false

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h2>
        </div>

        {/* Nav Links + Profile */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Jobs</li>
            <li className="cursor-pointer">Browse</li>
          </ul>

     {
      !user ? (
        <div className="flex items-center gap-2">
          <Link to="/login">
          <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
          <Button className="bg-[#6A38C2] hover:bg-[#524173]">Signup</Button> 
          </Link>
          </div>
      )  :(
<Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer w-10 h-10 rounded-full overflow-hidden">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className="w-8">
              <div>
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="user"
                    />
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Vaibhav Mernstack
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div> 
                </div>
              
          <div className='flex flex-col my-2 text-gray-600'>
             <div className="flex w-fit items.center gap-2 cursor-pointer">
              
              <User2/>
              <Button variant="link">View Profile</Button>
             </div>
             <div className="flex w-fit items-center gap-2 cursor-pointer">
              <LogOut/>
              <Button variant="link">Logout</Button>
             </div>
              </div>
             </div>
            </PopoverContent>
          </Popover>
      )
     }
          {/* Profile Popover */}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
