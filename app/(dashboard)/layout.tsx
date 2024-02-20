interface DashoardLayout {
    children: React.ReactNode
}
import React from 'react'
import SideIndex from './_components/sidebar'

const layout = ({children}: DashoardLayout) => {
  return (
    <div>
        <SideIndex/>
        {children}
    </div>
  )
}

export default layout