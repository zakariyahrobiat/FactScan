import { PropsWithChildren } from "react"
const BackgroundLayout = ({children}:PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center relative h-[100%] overflow-hidden bg-customGray">
        <div className="w-screen">{children}</div>
    </div>
  )
}

export default BackgroundLayout