'use client'

import { useEffect, useState, type ReactElement } from 'react'

const NOT_SELECTED_CLASS = 'text-slate-500'

export type TabLayoutProps = {
  menuTitles: string[]
  bodies: ReactElement[]
  initialIndex?: number
}

const clampIndex = (index: number, max: number) => {
  if (max === 0) return 0
  if (Number.isNaN(index) || index === undefined) return 0
  if (index < 0) return 0
  if (index >= max) return max - 1
  return index
}

export const TabLayout = ({
  menuTitles,
  bodies,
  initialIndex,
}: TabLayoutProps) => {
  const tabCount = Math.min(menuTitles.length, bodies.length)

  const [selectedIndex, setSelectedIndex] = useState(() =>
    clampIndex(initialIndex ?? 0, tabCount),
  )

  useEffect(() => {
    setSelectedIndex(clampIndex(initialIndex ?? 0, tabCount))
  }, [initialIndex, tabCount])

  const titles = menuTitles.slice(0, tabCount)
  const activeBody = tabCount === 0 ? null : (bodies[selectedIndex] ?? null)

  if (tabCount === 0 || activeBody === null) {
    return null
  }

  return (
    <>
      <nav className="flex flex-wrap gap-8" role="tablist">
        {titles.map((title, index) => {
          const isSelected = index === selectedIndex
          return (
            <button
              key={title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              role="tab"
              aria-selected={isSelected}
              className={`text-left ${isSelected ? '' : NOT_SELECTED_CLASS}`.trim()}
            >
              <h2 className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                {title}
              </h2>
            </button>
          )
        })}
      </nav>
      <div>{activeBody}</div>
    </>
  )
}
