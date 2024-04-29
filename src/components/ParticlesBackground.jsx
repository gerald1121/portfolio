import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

import particlesConfig from "./config/particlesConfig";

const ParticlesBackground = () => {
  const [, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div>
      <Particles id="tsparticles" options={particlesConfig} />
    </div>
  );
};

export default ParticlesBackground;
