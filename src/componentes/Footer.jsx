const Footer = ()=>{
  //en una variable guardo el año actual
  const currentYear = new Date().getFullYear();
  return(
    <footer>
      <p><img src="img/footer.svg"/> </p>
      <p>© {currentYear} Manual Brew. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;