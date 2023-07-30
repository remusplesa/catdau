type BackgroundProps = {
  children: React.ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <section
      id="about"
      className="relative h-screen bg-[url(https://images.unsplash.com/photo-1521478706270-f2e33c203d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)] bg-cover bg-center bg-no-repeat"
    >
      <div className="xs:bg-transparent absolute inset-0 bg-white/75 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute inset-0 h-full w-full"
      >
        <filter id="noise" x="0" y="0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.95"
            stitchTiles="stitch"
          />
        </filter>

        <rect className="h-full w-full" filter="url(#noise)" opacity="0.70" />
      </svg>
      <div className="relative pt-20">
      {children}
      </div>
    </section>
  )
}