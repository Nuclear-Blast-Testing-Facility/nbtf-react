import './Community.css'

function Community() {
  return (
    <section id="community" className="community">
      <div className="container">
        <h2 className="section-title">Join the Community</h2>
        
        <div className="community-intro">
          <p>
            Connect with thousands of NBTF players worldwide. Get updates, share strategies, 
            find teammates, and participate in community events.
          </p>
        </div>

        <div className="community-grid">
          <div className="community-card">
            <div className="community-icon">💬</div>
            <h3>Discord Server</h3>
            <p>
              Join our active Discord community to chat with players, get real-time updates, 
              participate in events, and connect with the development team.
            </p>
            <a href="#" className="btn btn-discord">Join Discord</a>
          </div>

          <div className="community-card">
            <div className="community-icon">🎮</div>
            <h3>Roblox Group</h3>
            <p>
              Become a member of the official NBTF Roblox group for exclusive perks, 
              group events, and community announcements.
            </p>
            <a href="https://www.roblox.com/games/6153709" target="_blank" rel="noopener noreferrer" className="btn btn-roblox">
              Visit Roblox Page
            </a>
          </div>

          <div className="community-card">
            <div className="community-icon">📢</div>
            <h3>Updates & News</h3>
            <p>
              Stay informed about the latest game updates, new features, events, and 
              community highlights. Never miss important announcements.
            </p>
            <a href="#" className="btn btn-updates">Get Updates</a>
          </div>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <a href="https://www.roblox.com/games/6153709" target="_blank" rel="noopener noreferrer" className="quick-link">
              <span className="link-icon">🚀</span>
              <span>Play Now</span>
            </a>
            <a href="#" className="quick-link">
              <span className="link-icon">📖</span>
              <span>Game Guide</span>
            </a>
            <a href="#" className="quick-link">
              <span className="link-icon">🎯</span>
              <span>Wiki</span>
            </a>
            <a href="#" className="quick-link">
              <span className="link-icon">📊</span>
              <span>Statistics</span>
            </a>
            <a href="#" className="quick-link">
              <span className="link-icon">🏆</span>
              <span>Leaderboards</span>
            </a>
            <a href="#" className="quick-link">
              <span className="link-icon">🎨</span>
              <span>Fan Art</span>
            </a>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Enter the Facility?</h2>
          <p>Join millions of players in the ultimate nuclear roleplay experience</p>
          <a 
            href="https://www.roblox.com/games/6153709" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-large"
          >
            ☢️ Play NBTF Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Community
