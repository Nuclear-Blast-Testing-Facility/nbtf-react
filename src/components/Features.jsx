import './Features.css'

function Features() {
  const features = [
    {
      icon: "☢️",
      title: "Nuclear Testing",
      description: "Experience realistic nuclear test sequences with spectacular blast effects. Watch as mushroom clouds rise and shockwaves ripple across the facility.",
      highlights: ["Realistic blast physics", "Multiple nuke types", "Spectacular visual effects"]
    },
    {
      icon: "⚡",
      title: "Reactor Core System",
      description: "Manage a complex nuclear reactor with real-time monitoring. Balance power output, temperature, and stability to prevent catastrophic meltdowns.",
      highlights: ["Real-time monitoring", "Emergency protocols", "Dynamic stability system"]
    },
    {
      icon: "🎯",
      title: "Team Objectives",
      description: "Work with your team to achieve victory. Facility defenders must maintain operations while rebels coordinate to seize control.",
      highlights: ["Dynamic objectives", "Team-based scoring", "Strategic gameplay"]
    },
    {
      icon: "📊",
      title: "Progression System",
      description: "Unlock new roles and abilities as you play. Gain experience, earn promotions, and access advanced equipment and positions.",
      highlights: ["Role unlocks", "Experience system", "Rank progression"]
    },
    {
      icon: "🔊",
      title: "Alert Systems",
      description: "Respond to dynamic alerts and emergencies. From core instability warnings to security breaches, stay ready for anything.",
      highlights: ["Emergency alerts", "Siren systems", "Real-time notifications"]
    },
    {
      icon: "🗺️",
      title: "Exploration",
      description: "Discover secret areas, hidden passages, and strategic locations. The facility is filled with rooms, tunnels, and vantage points to explore.",
      highlights: ["Secret areas", "Strategic locations", "Hidden passages"]
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Features & Highlights</h2>
        
        <div className="features-intro">
          <p>
            NBTF is packed with unique mechanics and systems that create an 
            immersive nuclear facility experience. Here's what makes the game special:
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-highlights">
                {feature.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight-badge">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
