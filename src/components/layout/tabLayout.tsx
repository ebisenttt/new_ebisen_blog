'use client'

import { type ReactElement, useState } from 'react'

interface TabLayoutProps {
  menuTitles: string[]
  bodies: ReactElement[]
}

export const TabLayout = ({ menuTitles, bodies }: TabLayoutProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const onClick = (index: number) => {
    setSelectedIndex(index)
  }
  return (
    <>
      <TabHeader
        titles={menuTitles}
        selectedIndex={selectedIndex}
        onClick={(index) => {
          onClick(index)
        }}
      />
      <TabBody bodies={bodies} selectedIndex={selectedIndex} />
    </>
  )
}

interface TabHeaderProps {
  titles: string[]
  selectedIndex: number
  onClick: (index: number) => void
}
const TabHeader = ({ titles, selectedIndex, onClick }: TabHeaderProps) => {
  const notSelectedTabColor = 'text-slate-500'
  return (
    <div className="flex cursor-pointer">
      {titles.map((title, index) => (
        <div
          key={title}
          onClick={() => {
            onClick(index)
          }}
          className={index > 0 ? 'ml-8' : undefined}
        >
          <h2
            className={`${
              index !== selectedIndex ? notSelectedTabColor : undefined
            }
              mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight`}
          >
            {title}
          </h2>
        </div>
      ))}
    </div>
  )
}

interface TabBodyProps {
  bodies: ReactElement[]
  selectedIndex: number
}
const TabBody = ({ bodies, selectedIndex }: TabBodyProps) => {
  return bodies[selectedIndex]
}
