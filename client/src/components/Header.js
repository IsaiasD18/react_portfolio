function Header(propsObj) {
    const changePage = (e) => {
      e.preventDefault();
  
      const link = e.target;
      const text = link.innerText;
  
      switch (text) {
        case 'Portfolio':
          propsObj.setPage('portfolio');
          break;
        case 'Contact':
          propsObj.setPage('contact');
          break;
        default:
          propsObj.setPage('about');
      }
    }
  
    return (
      <header className="row justify-between align-center">
        <h3>Isaias</h3>
        <nav>
          <a onClick={changePage} className={propsObj.page === 'about' ? 'active' : ''} href="/">About me</a>
          <a onClick={changePage} className={propsObj.page === 'portfolio' ? 'active' : ''} href="/portfolio">Portfolio</a>
          <a onClick={changePage} className={propsObj.page === 'contact' ? 'active' : ''} href="/contact">Contact</a>
        </nav>
      </header>
    )
  }
  
  export default Header;