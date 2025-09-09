export const metadata = {
  title: "Andrin Schaller",
  description: "",
  keywords: "",
  authors: [{ name: "Andrin Schaller" }],
  publisher: "Andrin Schaller"
}

interface EllipsePropsType {
  className: string
}

function Ellipse({ className }: EllipsePropsType) {
  return <div className={`${className} absolute -z-[99]`} />
}

interface SocialButtonPropsType {
  children: React.ReactElement
}

function SocialButton({ children }: SocialButtonPropsType) {
  return <button>{children}</button>
}

export default function Home() {
  return (
    <div className="w-full max-w-screen-lg lg:pt-36">
      <h1 className="text-2xl font-black">Andrin Schaller</h1>
      <h2 className="mt-1 font-light text-stone-400">Computer Science Student and Software Engineer</h2>
      <div className="relative flex flex-col items-center">
        <Ellipse className="top-5 h-60 w-54 rounded-[50%] bg-blue-700 blur-[50px]" />
        <Ellipse className="top-10 h-92 w-92 rounded-full bg-gradient-to-t from-stone-950 from-70% to-blue-400 to-275%" />
        <h3 className="mt-44 text-5xl font-bold tracking-[0.2em]">WORK IN PROGRESS</h3>
        <p className="mt-16 text-xl">In the meanwhile, you can contact me here</p>
        <div className="mt-2">
          <SocialButton>
            <div></div>
          </SocialButton>
          <SocialButton>
            <div></div>
          </SocialButton>
          <SocialButton>
            <div></div>
          </SocialButton>
        </div>
      </div>
    </div>
  )
}
