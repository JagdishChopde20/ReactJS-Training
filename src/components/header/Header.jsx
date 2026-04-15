import './Header.css';

function Header(props) {
  return (
    <header className='app-bar'>
      <h2 className='heading'> { props.children } </h2>
    </header>
  );
}

export default Header;
