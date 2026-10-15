import { GlassFold } from "@/components/GlassFold";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#06081e] text-white">
      {/* Background WebGL Shader */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GlassFold
          color1="#1e3cc8"
          color2="#06081e"
          color3="#96d7ff"
          speed={0.5}
          scale={1}
          noise={0.12}
        />
      </div>

      {/* Foreground UI overlay replicating the GradFlow showcase layout */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-12 pointer-events-none select-none">
        {/* Top bar controls / mock actions */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white/80">
            <button
              type="button"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Fullscreen"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            </button>
            <button
              type="button"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Theme toggle"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </button>
            <button
              type="button"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Randomize"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-auto">
          <div className="max-w-md space-y-1">
            <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-white drop-shadow-md">
              Glass fold
            </h1>
            <p className="text-sm sm:text-base text-white/70 font-light drop-shadow">
              One of twenty WebGL shaders from GradFlow. Three colors, no dependencies.
            </p>
          </div>

          <div>
            <a
              href="https://gradflow.meerbahadin.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm text-white/90 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md rounded-full transition-all shadow-lg hover:border-white/30"
            >
              <span>gradflow.meerbahadin.dev</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
