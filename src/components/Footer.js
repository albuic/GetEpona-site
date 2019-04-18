import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Powered by Textile</h2>
            <p>Epona runs on Textile's open-sourced technology. It supports offline and mobile-first usage of IPFS.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Join the Community</h2>
            <dl className="alt">
                <dt>GitHub</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
                <dt>Matrix</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
                <dt>IRC</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
                <dt>Discord</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
            </dl>
{/*         
            <dl className="alt">
                <dt>Address</dt>
                <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(000) 000-0000 x 0000</dd>
                <dt>Email</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
            </dl> */}
            {/* <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul> */}
        </section>
        <p className="copyright">&copy; 2019 </p>
    </footer>
)

export default Footer
