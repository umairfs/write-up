import './App.css';

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

const Header = () => {
  const Title = () => (
    <img src="/images/Writeup-logo.jpg" className="write-up-logo"/>
  );
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>SignIn</li>
          <li>Create Your Blog</li>
        </ul>
      </div>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <p className='body-text'>WriteUp is a modern, user-friendly blogging platform designed for seamless content creation and publishing. It enables writers to draft, edit, and publish articles effortlessly through a clean and intuitive interface. Built with a scalable Node.js backend and a responsive React frontend, WriteUp ensures fast performance and real-time content visibility after publishing. The platform supports secure user authentication, post management, and public sharing — empowering users to focus on creating great content while WriteUp handles performance, reliability, and accessibility behind the scenes.</p>
      <button>Create Your Blog</button>
    </div>
  );
}

const Footer = () => {
  return (
    <div className='footer'>
      <h1>Footer</h1>
    </div>
  );
}


export default App;
