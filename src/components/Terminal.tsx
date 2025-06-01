import React from "react";


function Terminal() {
  return (
    <div className="relative hidden sm:block ">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl scale-95"></div>
      <div className="relative bg-gray-800 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl">
        {/* Terminal window */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="ml-2 text-gray-400 font-mono text-sm">
              harsh@developer:~
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-4 font-mono text-sm">
            <div className="flex">
              <span className="text-cyan-400 mr-2">$</span>
              <span className="text-white">whoami</span>
            </div>
            <div className="text-gray-300 mt-1">
              Harsh Singh - Full-Stack Developer
            </div>

            <div className="flex mt-3">
              <span className="text-cyan-400 mr-2">$</span>
              <span className="text-white">cat skills.json</span>
            </div>
            <div className="text-gray-300 mt-1">
              <div className="text-blue-400">&#123;</div>
              <div className="ml-2">
                <span className="text-green-400">&quot;frontend&quot;</span>:
                <span className="text-yellow-400">
                  {" "}
                  [&quot;React&quot;, &quot;Next.js&quot;,
                  &quot;TypeScript&quot;]
                </span>
                ,
              </div>
              <div className="ml-2">
                <span className="text-green-400">&quot;backend&quot;</span>:
                <span className="text-yellow-400">
                  {" "}
                  [&quot;Node.js&quot;, &quot;Python&quot;, &quot;MongoDB&quot;]
                </span>
                ,
              </div>
              <div className="ml-2">
                <span className="text-green-400">&quot;competitive&quot;</span>:
                <span className="text-yellow-400">
                  {" "}
                  [&quot;C++&quot;, &quot;Algorithms&quot;, &quot;DSA&quot;]
                </span>
              </div>
              <div className="text-blue-400">&#125;</div>
            </div>

            <div className="flex mt-3">
              <span className="text-cyan-400 mr-2">$</span>
              <span className="text-white">echo $PASSION</span>
            </div>
            <div className="text-green-400 mt-1">
              Building amazing digital experiences! 🚀
            </div>

            <div className="flex items-center mt-3">
              <span className="text-cyan-400 mr-2">$</span>
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Tech decorations */}
        <div className="absolute top-2 right-2 text-cyan-500/40 font-mono text-xs">
          01001000
        </div>
        <div className="absolute bottom-2 left-2 text-cyan-500/40 font-mono text-xs">
          01010011
        </div>
      </div>
    </div>
  );
}

export default Terminal;
