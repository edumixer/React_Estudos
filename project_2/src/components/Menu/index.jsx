import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <nav style={{ 
      width: '100%',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/abc">ABC</Link>
    </nav>
  );
}