import './Gameplay.css'

function Gameplay() {
  return (
    <section className="gameplay">
      <div className="container">
        <h2 className="section-title">How to Play</h2>
        
        <div className="gameplay-intro">
          <p>
            NBTF is built around two core gameplay loops: <strong>facility defense</strong> and 
            <strong>rebel infiltration</strong>. Choose your side and master the mechanics to 
            achieve victory.
          </p>
        </div>

        <div className="gameplay-grid">
          <div className="gameplay-card">
            <div className="card-icon">🔒</div>
            <h3>Facility Defense</h3>
            <p>
              As a facility defender, your mission is to maintain the nuclear reactor core, 
              conduct controlled tests, and protect critical infrastructure from rebel attacks.
            </p>
            <ul>
              <li>Monitor reactor core stability</li>
              <li>Respond to security alerts</li>
              <li>Coordinate nuclear test sequences</li>
              <li>Defend against infiltrators</li>
            </ul>
          </div>

          <div className="gameplay-card">
            <div className="card-icon">💥</div>
            <h3>Rebel Infiltration</h3>
            <p>
              Join the rebellion to sabotage facility operations, disrupt nuclear tests, 
              and take control of the reactor core through stealth and coordinated attacks.
            </p>
            <ul>
              <li>Infiltrate secure zones</li>
              <li>Sabotage reactor systems</li>
              <li>Disrupt test sequences</li>
              <li>Coordinate team strikes</li>
            </ul>
          </div>

          <div className="gameplay-card">
            <div className="card-icon">⚙️</div>
            <h3>Core Mechanics</h3>
            <p>
              The reactor core is the heart of NBTF. Managing its stability, power output, 
              and test sequences requires teamwork and strategic planning.
            </p>
            <ul>
              <li>Real-time reactor monitoring</li>
              <li>Dynamic alert systems</li>
              <li>Nuclear blast effects</li>
              <li>Progressive role unlocks</li>
            </ul>
          </div>

          <div className="gameplay-card">
            <div className="card-icon">🎯</div>
            <h3>Teamwork & Strategy</h3>
            <p>
              Success in NBTF requires coordination with your team. Communication and 
              role specialization are key to achieving your objectives.
            </p>
            <ul>
              <li>Team-based objectives</li>
              <li>Role specialization</li>
              <li>Strategic planning</li>
              <li>Real-time coordination</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gameplay
