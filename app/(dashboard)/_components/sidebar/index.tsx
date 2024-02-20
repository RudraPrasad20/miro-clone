import React from 'react'
import { NewButton } from './new-button'


const SideIndex = () => {
  return (
<aside className="fixed z-[1] left-0 bg-red-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
     
      <NewButton />
      
    </aside>
  )
}

export default SideIndex