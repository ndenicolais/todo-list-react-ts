import logo from '/logo-512x512.png';
import '/src/styles/main.css';

function Home() {
  
  return (
    <div className='Home'>
      <h1>PWA APP</h1>
      <img src={logo}
      className="Home-logo"
      alt="logo"
      />
      </div>
      )
    }

export default Home