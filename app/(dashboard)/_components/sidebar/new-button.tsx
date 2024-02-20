// "use client";

// import { Plus } from "lucide-react";

// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// export const NewButton = () => {
//   return (
//     <>
//       <Dialog>
//         <DialogTrigger asChild>
//             <div className=" aspect-square">
//           <button className=" bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-55 hover:opacity-100 transition bg-blue-500">
//             <Plus className="text-white" />
//           </button>
//           </div>
//         </DialogTrigger>
//       </Dialog>
//     </>
//   );
// };








"use client";

import { Plus } from "lucide-react";


import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";


export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        
         
            <button className="bg-white/25 w-full flex items-center justify-center p-1 rounded-md opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          
      
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
       
      </DialogContent>
    </Dialog>
  );
};