import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Nuclear Blast Testing Facility</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>What is NBTF?</h3>
            <p>
              Nuclear Blast Testing Facility is a top-secret nuclear testing facility roleplay game 
              on Roblox that combines intense military simulation with tactical team-based gameplay. 
              Created by Ryanblaze, NBTF has become one of the most popular military roleplay 
              experiences on the platform.
            </p>
            <p>
              Players dive into a high-stakes environment where defense forces clash with rebel 
              infiltrators. Whether you're maintaining the facility's critical nuclear operations 
              or attempting to sabotage them, every decision matters.
            </p>
            <p>
              With its unique blend of nuclear reactor mechanics, tactical combat, and deep roleplay 
              elements, NBTF offers an experience unlike any other Roblox game.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">40M+</div>
              <div className="stat-label">Total Visits</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">88%+</div>
              <div className="stat-label">Positive Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎮</div>
              <div className="stat-number">400+</div>
              <div className="stat-label">Daily Players</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">Ryanblaze</div>
              <div className="stat-label">Creator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
