import './Roles.css'

function Roles() {
  const roles = [
    {
      name: "Rocket Scientist",
      icon: "🚀",
      team: "Facility",
      description: "Design and execute nuclear test sequences. Manage rocket launches and monitor blast effects. Critical for conducting safe and controlled nuclear experiments.",
      responsibilities: ["Nuclear test planning", "Rocket system management", "Blast analysis"]
    },
    {
      name: "Core Engineer",
      icon: "⚡",
      team: "Facility",
      description: "Maintain the reactor core's stability and power output. Respond to emergencies and prevent meltdowns. The facility's lifeline.",
      responsibilities: ["Core monitoring", "Emergency response", "System maintenance"]
    },
    {
      name: "Security Forces",
      icon: "🛡️",
      team: "Facility",
      description: "Protect the facility from rebel infiltrators. Guard critical zones, respond to breaches, and maintain perimeter security.",
      responsibilities: ["Perimeter defense", "Threat neutralization", "Access control"]
    },
    {
      name: "Facility Commander",
      icon: "⭐",
      team: "Facility",
      description: "Lead facility operations and coordinate all teams. Make strategic decisions and manage crisis situations. Command authority over all facility personnel.",
      responsibilities: ["Strategic oversight", "Team coordination", "Crisis management"]
    },
    {
      name: "Rebel Infiltrator",
      icon: "🎭",
      team: "Rebels",
      description: "Sneak into secure zones and gather intelligence. Avoid detection while positioning for strikes against facility operations.",
      responsibilities: ["Stealth operations", "Intelligence gathering", "Sabotage preparation"]
    },
    {
      name: "Rebel Demolitions",
      icon: "💣",
      team: "Rebels",
      description: "Execute sabotage operations against facility systems. Plant explosives and disrupt critical infrastructure to create chaos.",
      responsibilities: ["Explosive deployment", "System sabotage", "Infrastructure disruption"]
    },
    {
      name: "Rebel Commander",
      icon: "🔥",
      team: "Rebels",
      description: "Lead rebel forces and plan coordinated attacks. Organize strikes, manage team movements, and adapt to facility defenses.",
      responsibilities: ["Attack coordination", "Team leadership", "Tactical planning"]
    },
    {
      name: "Civilian Scientist",
      icon: "🔬",
      team: "Neutral",
      description: "Conduct research and observe facility operations. Choose to assist defenders or aid rebels based on your allegiance.",
      responsibilities: ["Research activities", "Data collection", "Flexible allegiance"]
    }
  ]

  return (
    <section className="roles">
      <div className="container">
        <h2 className="section-title">Roles & Teams</h2>
        
        <p className="roles-intro">
          Choose your role and define your path. Each role offers unique abilities, 
          responsibilities, and gameplay experiences.
        </p>

        <div className="roles-grid">
          {roles.map((role, index) => (
            <div key={index} className={`role-card team-${role.team.toLowerCase()}`}>
              <div className="role-header">
                <div className="role-icon">{role.icon}</div>
                <div className="role-team-badge">{role.team}</div>
              </div>
              <h3>{role.name}</h3>
              <p className="role-description">{role.description}</p>
              <div className="role-responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roles
