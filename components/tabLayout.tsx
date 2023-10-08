import { ReactElement, useState } from 'react'
type TabLayoutProps = { bodies: ReactElement[] }

const TITLES = ['Posts', 'Tags']

export const TabLayout = ({ bodies }: TabLayoutProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const onClick = (index) => {
    setSelectedIndex(index)
  }
  return (
    <>
      <TabHeader
        titles={TITLES}
        selectedIndex={selectedIndex}
        onClick={(index) => onClick(index)}
      />
      <TabBody bodies={bodies} selectedIndex={selectedIndex} />
    </>
  )
}

type TabHeaderProps = {
  titles: string[]
  selectedIndex: number
  onClick: (index: number) => void
}
const TabHeader = ({ titles, selectedIndex, onClick }: TabHeaderProps) => {
  const notSelectedTabColor = 'text-slate-500'
  return (
    <div className="flex cursor-pointer">
      {titles.map((title, index) => (
        <div onClick={() => onClick(index)} className={index > 0 && 'ml-8'}>
          <h2
            className={`${index !== selectedIndex && notSelectedTabColor}
              mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight`}
          >
            {title}
          </h2>
        </div>
      ))}
    </div>
  )
}

type TabBodyProps = {
  bodies: ReactElement[]
  selectedIndex: number
}
const TabBody = ({ bodies, selectedIndex }: TabBodyProps) => {
  return bodies[selectedIndex]
}
