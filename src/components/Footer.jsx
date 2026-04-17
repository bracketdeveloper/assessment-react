import "../assets/css/footer-style.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <p className="copyright">
                    Copyright &copy; {currentYear} i2c Inc. All rights reserved.
                </p>

                <nav aria-label="Footer navigation">
                    <ul className="footer-links">
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Other</a></li>
                        <li>
                            <a href="" className="btn btn-primary">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}