import React from 'react'
import { Link } from 'gatsby'
import Nav from './Nav'


import matrix from '../assets/images/matrix.png';
import irc from '../assets/images/irc.png';
import discord from '../assets/images/discordlogo.png';
import github from '../assets/images/githublogo.png';
import WidgetBot from '@widgetbot/react-embed'
import GitHubButton from 'react-github-btn'

const Footer = (props) => (
    
    <footer id="footer">   
        <h1 align="center">
            Join the Community
        </h1>
    <div class="row">
        <div class="column">
            <h2>Open Source</h2>
            <p>
                Epona is on Github. Give us a Star!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <GitHubButton href="https://github.com/GetEpona/Epona-js" data-size="large" data-show-count="true" aria-label="Star GetEpona/Epona-js on GitHub">Star</GitHubButton>
            </p>
           
                <h2>Contribute</h2>
                <p>
                    We're always looking for contributors. Epona is built in React Electron, and uses IPFS and Textile. 
                    &nbsp;<a href="https://gateway.textile.cafe/ipfs/QmcLYowzA59kMoNAsQ5Ch8pCU3ZFxdmJjVGZD9wDjPw6Mf?key=d1x3adUwxMay1FY8kgq7hjT2x9YGtEMKJFP5SbkzBXh9dYTYKtuJGNUXoQha">Become a contributor</a>.
                </p>
                <h2> Feature Requests</h2>
                    <p>Suggest new features and report any bugs on our <a href="https://github.com/GetEpona/Epona-js/issues">GitHub Issues</a> page.</p>
                <h2>Donate</h2> 
                <p>Setting up wallets for your shitcoins. Coming soon!</p>  
        </div>
           
        <div class="column">
            <ul className="icons"style={{ listStyleType: "none" }} align="center">
                {/* <li><img src={github} alt="Github" width= "24" height="24"/> <a href="https://github.com/GetEpona/GetEpona-site/tree/master">GitHub</a></li> */}
                <li><img src={matrix} alt="Matrix" width= "24" height="24"/> <a href="https://riot.im/app/#/room/#epona:getepona.com">Matrix</a></li>
                <li><img src={irc} alt="IRC" width= "24" height="24"/> <a href="irc://freenode/epona">IRC</a></li>
                <li><img src={discord} alt="Discord" width= "24" height="24"/> <a href="https://discord.gg/DrPFqa2">Discord</a></li>
            </ul>
            <WidgetBot
                server="475789330380488707"
                channel="509533264206233610"
                shard="https://cl1.widgetbot.io"
                height="800"
                width="450"
                onAPI={api => {
                        /*api.on('signIn', user => {
                        console.log(`Guest signed in as ${user.name}`, user)
                        api.emit('sendMessage', 'Hello world')
                        })*/
                }}
            />
           
        </div>
    </div>
                 
        {/*         
                    <dl className="alt">
                        <dt>Address</dt>
                        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                        <dt>Phone</dt>
                        <dd>(000) 000-0000 x 0000</dd>
                        <dt>Email</dt>
                        <dd><a href="#">information@untitled.tld</a></dd>
                    </dl> 
                <ul className="icons">
                        <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
                    </ul> */}
     
        <p className="copyright" align="center">&copy; 2019 Epona</p>
</footer>
)

export default Footer
