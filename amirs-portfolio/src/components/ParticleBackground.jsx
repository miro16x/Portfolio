import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground({ className = 'absolute inset-0 h-full w-full' }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    detectRetina: true,
    fpsLimit: 60,
    fullScreen: {
      enable: false,
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: true,
          mode: ['push', 'bubble'],
        },
        onHover: {
          enable: true,
          mode: ['grab', 'repulse'],
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        bubble: {
          distance: 220,
          duration: 0.45,
          opacity: 0.75,
          size: 6,
        },
        grab: {
          distance: 220,
          links: {
            opacity: 0.45,
          },
        },
        push: {
          quantity: 6,
        },
        repulse: {
          distance: 170,
          duration: 0.35,
          factor: 80,
        },
      },
    },
    particles: {
      color: {
        value: ['#3B82F6', '#8B5CF6', '#06B6D4'],
      },
      links: {
        color: '#3B82F6',
        distance: 155,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 0.75,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 650,
        },
        value: 130,
      },
      opacity: {
        value: {
          min: 0.22,
          max: 0.58,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: {
          min: 1,
          max: 3.4,
        },
      },
    },
  }), [])

  if (!ready) return null

  return (
    <Particles
      id="site-particles"
      className={className}
      options={options}
    />
  )
}
