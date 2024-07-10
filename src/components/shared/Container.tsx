import { ReactNode } from "react"

const Container = ({children}: {children: ReactNode}) => {
  return (
    <div className="2xl:max-w-[1440px] xl:max-w-7xl sm:max-w-4xl mx-auto">
        {children}
    </div>
  )
}

export default Container