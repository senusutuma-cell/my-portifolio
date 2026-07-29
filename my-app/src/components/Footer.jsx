
function Footer({ name }) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {name}. Built with React & Vite.</p>
    </footer>
  );
}

export default Footer;