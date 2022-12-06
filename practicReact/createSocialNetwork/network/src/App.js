import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Messages</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="blockContent">Main Content</div>
    </div>
  );
}

export default App;
