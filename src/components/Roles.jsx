import { useState } from 'react'
import './Roles.css'

function Roles() {
  const [selectedTeam, setSelectedTeam] = useState('All')
  const [sortBy, setSortBy] = useState('category') // 'category' or 'alphabetical'

  const roles = [
    // Executive Roles
    {
      name: "Facility Director",
      icon: "👔",
      team: "Executive",
      description: "The highest authority in the facility. Make critical decisions, oversee all operations, and maintain order during crisis situations.",
      responsibilities: ["Overall facility management", "Strategic decisions", "Crisis leadership"]
    },
    {
      name: "Council Executive",
      icon: "💼",
      team: "Executive",
      description: "Senior leadership supporting the Director. Coordinate departments and ensure facility protocols are followed.",
      responsibilities: ["Department coordination", "Policy enforcement", "Administrative oversight"]
    },
    
    // Government Roles
    {
      name: "Government Official",
      icon: "🏛️",
      team: "Government",
      description: "Represent government interests at the facility. Oversee compliance with regulations and national security protocols.",
      responsibilities: ["Regulatory compliance", "Government liaison", "Security oversight"]
    },
    {
      name: "Intelligence Agent",
      icon: "🕵️",
      team: "Government",
      description: "Gather intelligence on threats to the facility. Investigate suspicious activities and counter espionage operations.",
      responsibilities: ["Intelligence gathering", "Threat investigation", "Counter-espionage"]
    },
    {
      name: "Protection Service",
      icon: "🛡️",
      team: "Government",
      description: "Provide elite security for government officials and VIPs at the facility. Ensure their safety at all costs.",
      responsibilities: ["VIP protection", "Secure escort", "Threat assessment"]
    },
    
    // Scientist Roles
    {
      name: "Rocket Scientist",
      icon: "🚀",
      team: "Scientist",
      description: "Design and execute nuclear test sequences. Manage rocket launches and monitor blast effects for research purposes.",
      responsibilities: ["Test design", "Launch operations", "Data analysis"]
    },
    {
      name: "Core Engineer",
      icon: "⚡",
      team: "Scientist",
      description: "Maintain the reactor core's stability and power output. Prevent meltdowns and manage emergency shutdown procedures.",
      responsibilities: ["Core monitoring", "Emergency protocols", "System maintenance"]
    },
    
    // Military Roles
    {
      name: "Military Officer",
      icon: "⭐",
      team: "Military",
      description: "Command military forces at the facility. Plan defensive strategies and coordinate tactical responses to threats.",
      responsibilities: ["Command operations", "Tactical planning", "Force coordination"]
    },
    {
      name: "Infantry Soldier",
      icon: "🪖",
      team: "Military",
      description: "Frontline military defense of the facility. Engage hostile forces and secure strategic positions.",
      responsibilities: ["Combat operations", "Position defense", "Patrol duties"]
    },
    {
      name: "Special Task Force",
      icon: "🎯",
      team: "Military",
      description: "Elite special operations unit for high-risk missions. Respond to critical threats with precision and force.",
      responsibilities: ["Special operations", "High-risk response", "Tactical strikes"]
    },
    {
      name: "Military Police",
      icon: "👮",
      team: "Military",
      description: "Enforce military law and discipline at the facility. Investigate incidents and maintain order among personnel.",
      responsibilities: ["Law enforcement", "Incident investigation", "Discipline maintenance"]
    },
    
    // Security Roles
    {
      name: "Security Supervisor",
      icon: "👁️",
      team: "Security",
      description: "Oversee security operations and personnel. Monitor surveillance systems and coordinate security responses.",
      responsibilities: ["Security oversight", "Surveillance monitoring", "Team coordination"]
    },
    {
      name: "Internal Security",
      icon: "🔒",
      team: "Security",
      description: "Guard interior zones and secure sensitive areas. Control access to restricted sections of the facility.",
      responsibilities: ["Interior patrol", "Access control", "Area securing"]
    },
    {
      name: "Exterior Guard",
      icon: "🚧",
      team: "Security",
      description: "Protect the facility perimeter and external checkpoints. First line of defense against external threats.",
      responsibilities: ["Perimeter defense", "Checkpoint control", "Exterior patrol"]
    },
    
    // Safety Roles
    {
      name: "Medic",
      icon: "⚕️",
      team: "Safety",
      description: "Provide emergency medical care to injured personnel. Respond to radiation exposure and combat casualties.",
      responsibilities: ["Medical treatment", "Emergency response", "Health monitoring"]
    },
    {
      name: "Maintenance Team",
      icon: "🔧",
      team: "Safety",
      description: "Maintain facility systems and infrastructure. Perform repairs and ensure operational safety of equipment.",
      responsibilities: ["System maintenance", "Repairs", "Safety inspections"]
    },
    {
      name: "Factory Personnel",
      icon: "🏭",
      team: "Safety",
      description: "Operate production facilities and manufacturing systems. Ensure safe and efficient production processes.",
      responsibilities: ["Production operations", "Quality control", "Safety compliance"]
    },
    {
      name: "Volunteer",
      icon: "🤝",
      team: "Safety",
      description: "Support various facility operations and assist where needed. Help maintain a safe environment for all personnel.",
      responsibilities: ["General support", "Safety assistance", "Volunteering tasks"]
    },
    {
      name: "Janitor",
      icon: "🧹",
      team: "Safety",
      description: "Maintain facility cleanliness and sanitation. Handle hazardous material cleanup and contamination control.",
      responsibilities: ["Facility cleaning", "Contamination control", "Waste management"]
    },
    
    // Logistics Roles
    {
      name: "Delivery Driver",
      icon: "🚚",
      team: "Logistics",
      description: "Transport supplies and equipment to and from the facility. Ensure timely delivery of critical materials.",
      responsibilities: ["Supply transport", "Delivery coordination", "Route management"]
    },
    
    // Rebellion Roles
    {
      name: "Warlord",
      icon: "👑",
      team: "Rebellion",
      description: "Supreme commander of rebel forces. Plan major assaults and coordinate all rebellion operations against the facility.",
      responsibilities: ["Rebellion leadership", "Strategic planning", "Force command"]
    },
    {
      name: "Raid Leader",
      icon: "⚔️",
      team: "Rebellion",
      description: "Lead organized raids on facility targets. Coordinate attack teams and execute tactical strikes.",
      responsibilities: ["Raid planning", "Team leadership", "Attack execution"]
    },
    {
      name: "Overseer",
      icon: "👁️‍🗨️",
      team: "Rebellion",
      description: "Monitor facility operations and identify vulnerabilities. Coordinate intelligence gathering for the rebellion.",
      responsibilities: ["Surveillance", "Intelligence coordination", "Target identification"]
    },
    {
      name: "Commando",
      icon: "🔫",
      team: "Rebellion",
      description: "Elite rebel combat specialist. Execute high-value missions and engage facility security forces.",
      responsibilities: ["Combat missions", "Target elimination", "Tactical operations"]
    },
    {
      name: "Raider",
      icon: "💥",
      team: "Rebellion",
      description: "Aggressive assault force member. Attack facility defenses and seize control of strategic locations.",
      responsibilities: ["Assault operations", "Location capture", "Combat engagement"]
    },
    {
      name: "Hitman",
      icon: "🎯",
      team: "Rebellion",
      description: "Specialized in eliminating high-value targets. Operate covertly to neutralize key facility personnel.",
      responsibilities: ["Target assassination", "Covert operations", "Infiltration"]
    },
    {
      name: "Spy",
      icon: "🕵️‍♂️",
      team: "Rebellion",
      description: "Infiltrate facility operations undercover. Gather intelligence and sabotage from within.",
      responsibilities: ["Undercover operations", "Intelligence theft", "Internal sabotage"]
    },
    
    // Neutral Roles
    {
      name: "Civilian",
      icon: "👤",
      team: "Neutral",
      description: "Independent individual at the facility. Choose your own path and allegiance as events unfold.",
      responsibilities: ["Independent action", "Flexible allegiance", "Survival"]
    }
  ]

  const teams = ['All', 'Executive', 'Government', 'Scientist', 'Military', 'Security', 'Safety', 'Logistics', 'Rebellion', 'Neutral']

  // Filter roles by selected team
  const filteredRoles = selectedTeam === 'All' 
    ? roles 
    : roles.filter(role => role.team === selectedTeam)

  // Sort roles
  const sortedRoles = [...filteredRoles].sort((a, b) => {
    if (sortBy === 'alphabetical') {
      return a.name.localeCompare(b.name)
    } else {
      // Sort by category (team), then by name within category
      if (a.team !== b.team) {
        return teams.indexOf(a.team) - teams.indexOf(b.team)
      }
      return a.name.localeCompare(b.name)
    }
  })

  return (
    <section className="roles">
      <div className="container">
        <h2 className="section-title">Roles & Teams</h2>
        
        <p className="roles-intro">
          Choose your role and define your path. Each role offers unique abilities, 
          responsibilities, and gameplay experiences.
        </p>

        {/* Filter Buttons */}
        <div className="filter-controls">
          <div className="filter-section">
            <h4>Filter by Team:</h4>
            <div className="filter-buttons">
              {teams.map(team => (
                <button
                  key={team}
                  className={`filter-btn ${selectedTeam === team ? 'active' : ''} team-${team.toLowerCase()}`}
                  onClick={() => setSelectedTeam(team)}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Sort by:</h4>
            <div className="sort-buttons">
              <button
                className={`sort-btn ${sortBy === 'category' ? 'active' : ''}`}
                onClick={() => setSortBy('category')}
              >
                Category
              </button>
              <button
                className={`sort-btn ${sortBy === 'alphabetical' ? 'active' : ''}`}
                onClick={() => setSortBy('alphabetical')}
              >
                Alphabetical
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="results-count">
          Showing {sortedRoles.length} {sortedRoles.length === 1 ? 'role' : 'roles'}
        </div>

        <div className="roles-grid">
          {sortedRoles.map((role, index) => (
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
