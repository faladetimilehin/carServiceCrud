import React from 'react'

const Footer = () => {
    return(
       
        <footer className="container">
        <p className="float-right"><a href="#">Back to top</a></p>
        <p>Powered by Nibss ©{new Date(Date.now()).getFullYear()} <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
   
    )
}
export default Footer;