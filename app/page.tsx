import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Halo */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1200,
          height: 1200,
          background: 'radial-gradient(circle, rgba(139,63,255,.18), rgba(0,212,255,.10) 40%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(8,9,13,.72)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 var(--space-5)',
          }}
        >
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/axetech-horizontal-dark.png"
              alt="Axe Tech"
              width={180}
              height={32}
              style={{ height: 32, width: 'auto' }}
              priority
            />
          </a>
          <a href="mailto:support@axetech.io" className="btn">
            Contact <span className="arrow">→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1240,
          margin: '0 auto',
          padding: 'clamp(80px, 12vw, 160px) var(--space-5) var(--space-10)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.3em',
            color: 'var(--text-mute)',
            marginBottom: 'var(--space-5)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--ax-aurora)',
              boxShadow: '0 0 12px var(--ax-aurora)',
            }}
          />
          AXE TECH · LIVE
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 9vw, 112px)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            marginBottom: 'var(--space-5)',
          }}
        >
          Cutting <span className="text-grad">Edge</span>
          <br />
          by design.
        </h1>
        <p
          style={{
            fontSize: 'clamp(16px, 1.6vw, 20px)',
            color: 'var(--text-soft)',
            maxWidth: '64ch',
            marginBottom: 'var(--space-7)',
          }}
        >
          Axe Tech Limited builds at the frontier of what physics, math, and software allow. From distributed ledgers to a perpetual motion energy device, we operate where most companies stop.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <a href="mailto:support@axetech.io" className="btn">
            Get in touch <span className="arrow">→</span>
          </a>
          <a href="#what-we-build" className="btn">
            What we build <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* Three pillars */}
      <section
        id="what-we-build"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1240,
          margin: '0 auto',
          padding: 'var(--space-9) var(--space-5)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.25em',
            color: 'var(--text-mute)',
            marginBottom: 'var(--space-5)',
          }}
        >
          01 · WHAT WE BUILD
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 500,
            letterSpacing: '-.02em',
            lineHeight: 1.1,
            marginBottom: 'var(--space-7)',
          }}
        >
          Three pillars. One operating principle.
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-5)',
          }}
        >
          {[
            {
              tag: 'BLOCKCHAIN',
              title: 'Distributed infrastructure.',
              body: 'A new layer-1 designed for sub-second finality, predictable cost, and verifiable energy provenance.',
            },
            {
              tag: 'SOFTWARE',
              title: 'Tooling for engineers.',
              body: 'Production-grade SDKs, developer portals, and visual contract designers. Built by engineers who ship.',
            },
            {
              tag: 'HARDWARE',
              title: 'Perpetual motion energy device.',
              body: 'Active R&D on low-input, long-duration energy systems. Publishing results as we validate them.',
            },
          ].map((p) => (
            <div
              key={p.tag}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                padding: 'var(--space-6)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.2em',
                  color: 'var(--ax-aurora)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                {p.tag}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: '-.01em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: 'var(--text-soft)', fontSize: 14 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid var(--border)',
          padding: 'var(--space-7) var(--space-5)',
          color: 'var(--text-mute)',
          fontSize: 13,
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}
        >
          <div>© 2026 Axe Tech Limited · Cutting Edge</div>
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            <a href="mailto:support@axetech.io">support@axetech.io</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
