import xIcon from "./assets/fi_5969020.png"
import linkIcon from "./assets/fi_145807.png"
import fIcon from "./assets/fi_5968764.png"
import mailIcon from "./assets/fi_6244710.png"



export default function Footer () {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-9">
  <aside>
    
    <p className="w-80">
      <h1 className="font-extrabold text-3xl">CS — Ticket System</h1>
      <br />
      Our platform is designed to provide reliable, secure, and efficient services for all users. We focus on delivering quality solutions, improving user experience, and supporting businesses with modern technology. Thank you for trusting us and being part of our growing community.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
    
  </nav>
  
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>

  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex gap-2"><img src={xIcon} alt="" />@CS — Ticket System</a>
    <a className="link link-hover flex gap-2"><img src={linkIcon} alt="" />@CS — Ticket System</a>
    <a className="link link-hover flex gap-2"><img src={fIcon} alt="" />@CS — Ticket System</a>
    <a className="link link-hover flex gap-2"><img src={mailIcon} alt="" />support@cst.com</a>

  </nav>
</footer>

    )
}


