import React from 'react'
import { Link } from 'gatsby'
import Nav from './Nav'
import DiscordBot from './DiscordBot'

import WidgetBot from '@widgetbot/react-embed'
import GitHubButton from 'react-github-btn'

import matrix from '../assets/images/matrix.png';
import irc from '../assets/images/irc.png';
import discord from '../assets/images/discordlogo.png';


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
            <p>
                Leave us some Bitcoin, alts, even your shitcoins! Drop us a line in our Discord if you don't see a wallet of your preffered choice.
            </p> 
            <ul>
                <li>
                    <div>
                        BTC
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="1LrufiuFTzn2ZzKsgdPH1K1AKZDenCeYrQ"/>
                    {/* <button class="copy-button" type="button"></button>
                    <div>
                        class="notify-popup" style={{position: "absolute"};will-change:transorm;top:0px;left:0px;transform:translate3d(749px,999px,0px);" data-placement="top"}
                        Copied
                        <div class="arrow" style="left:24px;">
                                ::before
                        </div>
                    </div> */}
                </li>
                <li>
                    <div>
                            BCH
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="192PJCrtvP7UPFpX9ZCcti2mVD6PViw3o2"/>                    
                </li>
                <li>
                    <div>
                        ETH
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="0x75d60297fc0b42492a3d99700db770b547c74617"/>                        
                </li>
                <li>
                    <div>
                        ETC
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="0x397cf3b5f19110bda7ecdfb1c7134770fdbdc487"/>                                            
                </li>
                <li>
                    <div>
                        LTC
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="LQqKv8mps5nP2DMHdThAnvJtNSdcSc3XJe"/>                                                                
                </li>
                <li>
                    <div>
                        NEO
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="AKxoCE8YjP7jyQcDCxEXHuFvtWh74Km64g"/>                                                                     
                </li>
                <li>
                    <div>
                        DOGE
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="DG7zCPmQYBue9rL1iHtugignX3cfJ2hb4c"/>                                                                     
                </li>
                <li>
                    <div>
                        Cardano ADA
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="DdzFFzCqrht2CsRqSYPvR9Mw3L2sPMgGx44CHDjLxSuQzrnw628AXiB42uiGJ1sPxTKW6352ZGBS9RG3RtzeDF6wWbTu2n6jEvF9CMdZ"/>                                                                     
                </li>
                <li>
                    <div>
                        Augur REP
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="0x75d60297fc0b42492a3d99700db770b547c74617"/>                                                                     
                    
                </li>
                <li>
                    <div>
                        Lisk
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="12320849510539754337L"/>                                                                     
                </li>
                <li>
                    <div>
                        TRON TRX
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="TB3QGqV5qEPFxoN6gM8iFj3VoM19UiyMTc"/>                                                                     
                </li>
                <li>
                    <div>
                        BAT
                    </div>
                    <input class="wallet-id" type="text" readOnly="" value="0x75d60297fc0b42492a3d99700db770b547c74617"/>                                                                     
                </li>
            </ul>             
                     
        </div>
           
        <div class="column">
            <ul className="icons"style={{ listStyleType: "none" }} align="center">
                {/* <li><img src={github} alt="Github" width= "24" height="24"/> <a href="https://github.com/GetEpona/GetEpona-site/tree/master">GitHub</a></li> */}
                <li><img src={matrix} alt="Matrix" width= "24" height="24"/> <a href="https://riot.im/app/#/room/#epona:getepona.com">Matrix</a></li>
                <li><img src={irc} alt="IRC" width= "24" height="24"/> <a href="irc://freenode/epona">IRC</a></li>
                <li><img src={discord} alt="Discord" width= "24" height="24"/> <a href="https://discord.gg/DrPFqa2">Discord</a></li>
            </ul>
             <DiscordBot/>  

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
