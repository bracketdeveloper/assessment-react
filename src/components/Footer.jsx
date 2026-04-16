import "../assets/css/footer-style.css"
const Footer = ()=>{
    return (
        <footer className="site-footer" role="contentinfo" id="contact">
            <div className="container footer-inner">
                <p className="copyright">Copyright &copy; 2026 i2c Inc. All rights reserved.</p>
                <nav aria-label="Footer navigation">
                    <ul role="list" className="footer-links">
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#other">Other</a></li>
                        <li><a href="#contact" className="btn btn-primary">Contact us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
export default Footer