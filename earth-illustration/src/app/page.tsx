export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="absolute inset-x-0 top-10 mx-auto h-48 max-w-4xl rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] px-10 pb-12 pt-14 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">
            Earth Rotation
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Axial Tilt and Direction of Rotation
          </h1>
          <p className="mt-4 text-lg leading-7 text-[var(--text-muted)]">
            Earth spins once every 24 hours around an axis tilted{" "}
            <span className="font-semibold text-sky-200">23.5°</span>. This tilt
            shapes seasons, while rotation draws the day and night boundary
            across the globe.
          </p>
        </header>

        <section className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/20 p-8 shadow-inner">
          <svg
            viewBox="0 0 900 620"
            className="mx-auto w-full"
            role="img"
            aria-labelledby="earth-diagram-title earth-diagram-desc"
          >
            <title id="earth-diagram-title">
              Illustration of Earth rotating on a tilted axis
            </title>
            <desc id="earth-diagram-desc">
              Diagram showing Earth tilted 23.5 degrees with arrows indicating
              rotation direction, a glow separating day and night sides, and
              labels for key features.
            </desc>
            <defs>
              <clipPath id="earth-clip">
                <circle cx="0" cy="0" r="165" />
              </clipPath>
              <radialGradient id="earth-ocean" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor="#5edcfa" />
                <stop offset="45%" stopColor="#21a4f1" />
                <stop offset="100%" stopColor="#04337c" />
              </radialGradient>
              <radialGradient id="earth-atmosphere" cx="50%" cy="50%" r="70%">
                <stop offset="55%" stopColor="#76d9ff" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#76d9ff" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="terminator" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#01030d" stopOpacity="0.92" />
                <stop offset="50%" stopColor="#01030d" stopOpacity="0.68" />
                <stop offset="68%" stopColor="#e6f3ff" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#a0dbff" stopOpacity="0.25" />
              </linearGradient>
              <filter
                id="soft-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="18" result="blurred" />
                <feMerge>
                  <feMergeNode in="blurred" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <marker
                id="arrow-head"
                markerWidth="9"
                markerHeight="9"
                refX="6"
                refY="4.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,9 L7,4.5 z" fill="#7ad0ff" />
              </marker>
              <marker
                id="arrow-tail"
                markerWidth="10"
                markerHeight="10"
                refX="4"
                refY="5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <circle cx="4" cy="5" r="2.6" fill="#7ad0ff" />
              </marker>
            </defs>

            <g transform="translate(450 310)">
              <circle
                r="192"
                fill="url(#earth-atmosphere)"
                opacity="0.7"
                filter="url(#soft-glow)"
              />
              <g transform="rotate(-23.5)">
                <line
                  x1="0"
                  y1="-210"
                  x2="0"
                  y2="210"
                  stroke="#80c7ff"
                  strokeWidth="4"
                  strokeOpacity="0.65"
                />
                <line
                  x1="0"
                  y1="-210"
                  x2="0"
                  y2="210"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                  strokeOpacity="0.55"
                />
              </g>
              <g clipPath="url(#earth-clip)" transform="rotate(-23.5)">
                <circle r="165" fill="url(#earth-ocean)" />
                <g fill="#8ef5c2" opacity="0.85">
                  <path d="M-98 -14.5c24-44 90-67 136-33s11 74-22 96-100 20-112-18.5c-6-19 2-32 8-44z" />
                  <path d="M-128 64c12-22 46-34 70-24s38.5 44 20 68-68 28-90 7c-13-12-13-34 0-51z" />
                  <path d="M56 -92c20-14 70-22 102 0s28 70-16 92-98 5-112-30c-7-18 5-48 26-62z" />
                  <path d="M74 74c24-12 76-14 100 16s-4 68-42 82-88-6-98-36 14-42 40-62z" />
                  <path d="M-32 116c10-12 38-12 46 4s-3 38-20 46-38-2-42-16 6-22 16-34z" />
                </g>
                <circle r="165" fill="url(#terminator)" />
              </g>
              <circle
                r="165"
                fill="none"
                stroke="rgba(210, 237, 255, 0.35)"
                strokeWidth="3"
              />
            </g>

            <g>
              <path
                d="M285 310a165 90 0 0 1 330 0"
                fill="none"
                stroke="rgba(122, 208, 255, 0.65)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerStart="url(#arrow-tail)"
                markerEnd="url(#arrow-head)"
              />
            </g>

            <g>
              <text
                x="450"
                y="128"
                fontSize="22"
                fontWeight="600"
                fill="#d0e8ff"
                textAnchor="middle"
              >
                23.5° Axial Tilt
              </text>
              <line
                x1="450"
                y1="138"
                x2="450"
                y2="178"
                stroke="#89caff"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                opacity="0.7"
              />
              <path
                d="M450 178 L434 210"
                stroke="#89caff"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <path
                d="M450 178 L466 210"
                stroke="#89caff"
                strokeWidth="1.5"
                opacity="0.7"
              />
            </g>

            <g>
              <line
                x1="640"
                y1="320"
                x2="720"
                y2="320"
                stroke="#7ad0ff"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.6"
              />
              <rect
                x="720"
                y="288"
                width="150"
                height="64"
                rx="14"
                fill="rgba(10, 25, 52, 0.85)"
                stroke="rgba(128, 203, 255, 0.5)"
                strokeWidth="1"
              />
              <text
                x="795"
                y="314"
                fontSize="18"
                fontWeight="600"
                fill="#e1f4ff"
                textAnchor="middle"
              >
                Rotation Direction
              </text>
              <text
                x="795"
                y="338"
                fontSize="14"
                fill="rgba(210, 229, 255, 0.75)"
                textAnchor="middle"
              >
                West → East
              </text>
            </g>

            <g>
              <line
                x1="230"
                y1="260"
                x2="158"
                y2="214"
                stroke="#7ad0ff"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.6"
              />
              <rect
                x="40"
                y="160"
                width="145"
                height="70"
                rx="14"
                fill="rgba(9, 21, 44, 0.82)"
                stroke="rgba(128, 203, 255, 0.45)"
                strokeWidth="1"
              />
              <text
                x="112.5"
                y="196"
                fontSize="17"
                fontWeight="600"
                fill="#e1f4ff"
                textAnchor="middle"
              >
                Night Side
              </text>
              <text
                x="112.5"
                y="220"
                fontSize="13"
                fill="rgba(210, 229, 255, 0.72)"
                textAnchor="middle"
              >
                Facing away from Sun
              </text>
            </g>

            <g>
              <line
                x1="640"
                y1="272"
                x2="704"
                y2="220"
                stroke="#9fe4ff"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.6"
              />
              <rect
                x="704"
                y="168"
                width="168"
                height="78"
                rx="14"
                fill="rgba(12, 32, 60, 0.85)"
                stroke="rgba(128, 203, 255, 0.45)"
                strokeWidth="1"
              />
              <text
                x="788"
                y="206"
                fontSize="17"
                fontWeight="600"
                fill="#f2fbff"
                textAnchor="middle"
              >
                Daylight Side
              </text>
              <text
                x="788"
                y="230"
                fontSize="13"
                fill="rgba(210, 229, 255, 0.72)"
                textAnchor="middle"
              >
                Sunlit hemisphere
              </text>
            </g>
          </svg>
        </section>

        <footer className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-muted)] sm:text-base">
          <div className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 ring-1 ring-white/10">
            <span className="inline-flex h-3 w-3 rounded-full bg-sky-300" />
            <span>Axis points toward Polaris</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 ring-1 ring-white/10">
            <span className="inline-flex h-3 w-3 rounded-full bg-sky-200" />
            <span>Terminator separates day &amp; night</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 ring-1 ring-white/10">
            <span className="inline-flex h-3 w-3 rounded-full bg-sky-100" />
            <span>Visible rotation takes ~24 hours</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
