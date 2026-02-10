import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
        <nav className="navbar">
            <a href="index.html">
                <img id="logo" src="https://res.cloudinary.com/dgib19szk/image/upload/v1761733236/ChatGPT_Image_Oct_29_2025_03_50_19_PM_rfp6bu.png" alt="logo" />
            </a>
            <ul className="main-nav">
                <li><a className="navs" href="#">Product</a></li>
                <li><a className="navs1" href="#">Solutions</a></li>
                <li><a className="navs1" href="#">Pricing</a></li>
                <li><a className="navs1" href="Ent.html">Enterprise</a></li>
                <li><a className="navs1" href="why.html">Why Postman</a></li>
                <li><a className="navs1" href="#">Resource</a></li>
            </ul>
        </nav>
        
        <div className="left-area">
            <div className="c">Contact Sales</div>
            <a className="linked" href="signIN.html">
            <div className="s">Sign in</div>
            </a>
            <div className="f">Sign Up for Free</div>
        </div>
    </div>

    
    <section className="hero">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-left">
                    <h1 className="hero-title">AI needs context. APIs deliver it.</h1>
                    <p className="hero-text">
                        Postman is the platform where teams build those APIs together. 
                        With built-in support for the Model Context Protocol (MCP), 
                        Postman helps you design, test, and manage APIs that power 
                        both human workflows and intelligent agents.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Sign Up for Free</button>
                        <button className="btn-secondary">Watch a Demo</button>
                    </div>
                    <div className="download-section">
                        <p className="download-text">Download the desktop app for</p>
                        <div className="download-icons">
                            <a href="#" className="download-link">
                                <img src="https://img.icons8.com/ios-filled/50/000000/windows-10.png" alt="Windows" width="24" height="24" />
                            </a>
                            <a href="#" className="download-link">
                                <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="Mac" width="24" height="24" />
                            </a>
                            <a href="#" className="download-link">
                                <img src="https://img.icons8.com/ios-filled/50/000000/linux.png" alt="Linux" width="24" height="24" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761744360/Screenshot_2025-10-29_185546_igfs0x.png" alt="Postman API Illustration" className="hero-image" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="ready-section">
        <div className="ready-container">
            <div className="ready-card">
                <div className="ready-left">
                    <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761771149/Screenshot_2025-10-30_021641_g3rqwe.png" alt="AI Box" className="ai-box-image" />
                </div>
                <div className="ready-right">
                    <h2 className="ready-title">AI-ready APIs in 90 days</h2>
                    <p className="ready-text">
                        Most APIs aren't built for AI. Inconsistent specs, hidden changes, and unreliable 
                        responses slow agents down and stall workflows. Get the playbook for AI-ready 
                        deployment in 90 days, with APIs that are structured, tested, and trusted by both 
                        humans and agents.
                    </p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
            </div>
        </div>
    </section>

     <section className="speed-up-section">
        <div className="speed-up-container">
            <h2 className="speed-up-title">Speed up API development through team collaboration</h2>
            <p className="speed-up-text">
                Prototype, document, test, and demo all your APIs in one place. Get early feedback by having 
                conversations in the context of any API, whether internal, public, or partner, without jumping 
                between tools.
            </p>
            <div className="video-container">
                <video autoPlay loop muted playsInline className="demo-video">
                    <source src="https://res.cloudinary.com/dgib19szk/video/upload/v1761771976/drastically-speed-up-api-development-by-reducing-collaboration-friction-video_gwril2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>

  <div className="main-container">
  <div className="content-wrapper">
    <div className="left-section">
      <h1 className="main-heading">Move fast to that <span className="highlight-text">200 OK</span></h1>
      <p className="description-text">Transform API development from an individual to a team sport. Get to that first API call faster, improve developer onboarding, and increase API discoverability.</p>
      
      <div className="video-container">
        <video className="postman-video" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dgib19szk/video/upload/v1761772533/move-fast-200-ok-postman-1_kijnuq.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    
    <div className="right-section">
      <div className="accordion-item">
        <div className="accordion-header">
          <h2 className="accordion-title">Execute, test, and interact with APIs in seconds</h2>
          <span className="accordion-icon">−</span>
        </div>
        <p className="accordion-content">Open and extensible by design, collections in Postman expedite self-serve API consumption across the org, so devs can start testing APIs and building workflows.</p>
      </div>
      
      <div className="accordion-item">
        <div className="accordion-header">
          <h2 className="accordion-title">Reduce duplication of work for your teams</h2>
          <span className="accordion-icon">+</span>
        </div>
      </div>
      
      <div className="accordion-item">
        <div className="accordion-header">
          <h2 className="accordion-title">Faster time to first API call</h2>
          <span className="accordion-icon">+</span>
        </div>
      </div>
    </div>
  </div>
</div>
   
<div className="section-container">
  <div className="section-wrapper">
    <div className="left-content">
      <h1 className="section-heading">Fewer errors means higher-quality APIs</h1>
      <p className="section-description">Move fast to build quality APIs without breaking things by managing every phase of the API workflow together on a single platform.</p>
      
      <div className="video-box">
        <video className="interface-video" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dgib19szk/video/upload/v1761819593/fewer-errors-higher-quality-apis-1_dxof80.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    
    <div className="right-content">
      <div className="feature-item">
        <div className="feature-header">
          <h2 className="feature-title">Discover, share, and run tests, together</h2>
          <span className="feature-icon">−</span>
        </div>
        <p className="feature-description">Avoid building from scratch or writing lengthy descriptions about API issues by storing and sharing APIs in Collections.</p>
      </div>
      
      <div className="feature-item">
        <div className="feature-header">
          <h2 className="feature-title">Change doesn't have to be hard</h2>
          <span className="feature-icon">+</span>
        </div>
      </div>
      
      <div className="feature-item">
        <div className="feature-header">
          <h2 className="feature-title">Debug and write tests with Postbot</h2>
          <span className="feature-icon">+</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="trust-container">
  <div className="trust-wrapper">
    <h1 className="trust-heading">Trusted by over 500,000 companies, 40 million users, and 98% of the Fortune 500</h1>
    
    <div className="logos-grid">
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848825/Screenshot_2025-10-30_235427_srotyr.png" alt="Microsoft" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848825/Screenshot_2025-10-30_235431_sjvoxk.png" alt="Stripe" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848825/Screenshot_2025-10-30_235436_x5eqj6.png" alt="Meta" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848826/Screenshot_2025-10-30_235440_mcplok.png" alt="Notion" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848825/Screenshot_2025-10-30_235446_u3repf.png" alt="Salesforce" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848826/Screenshot_2025-10-30_235450_nf7hep.png" alt="Mercedes-Benz" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848826/Screenshot_2025-10-30_235501_piznq6.png" alt="Datadog" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235504_ajvrat.png" alt="PayPal" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235508_gwrg7l.png" alt="AWS" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848826/Screenshot_2025-10-30_235512_s703hy.png" alt="Twitter" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235517_l7ajxt.png" alt="Cisco DevNet" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235521_xk3z7f.png" alt="Intuit" className="company-logo" />
      </div>
    </div>
    
    <div className="logos-grid">
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235528_jzj2a4.png" alt="MongoDB" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235533_jocnli.png" alt="HubSpot" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235538_jhrrza.png" alt="Dolby.io" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235544_jsdsvn.png" alt="Oracle" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235550_unaamt.png" alt="Slack" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848828/Screenshot_2025-10-30_235554_cbgctb.png" alt="Google Maps" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848828/Screenshot_2025-10-30_235559_vm0kww.png" alt="Mastercard" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848827/Screenshot_2025-10-30_235538_jhrrza.png" alt="Adobe" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848828/Screenshot_2025-10-30_235612_xk1vfm.png" alt="Uber" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848825/Screenshot_2025-10-30_235617_nfyccv.png" alt="Miro" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848826/Screenshot_2025-10-30_235623_apms22.png" alt="Anvil" className="company-logo" />
      </div>
      <div className="logo-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761848826/Screenshot_2025-10-30_235628_nxebjc.png" alt="Plaid" className="company-logo" />
      </div>
    </div>
  </div>
</div>

<div className="connect-container">
  <div className="connect-wrapper">
    <h2 className="connect-heading">Connect Postman to your favorite tools</h2>
    <p className="connect-description">Seamlessly integrate with the most important tools your team uses.</p>
    
    <div className="tools-row">
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849610/Screenshot_2025-10-31_000846_ktbcak.png" alt="CircleCI" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849610/Screenshot_2025-10-31_000852_kvk7ha.png" alt="Jenkins" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849610/Screenshot_2025-10-31_000856_sxx1mw.png" alt="GitHub" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849611/Screenshot_2025-10-31_000902_sg6jo5.png" alt="GitLab" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849611/Screenshot_2025-10-31_000907_zumkm2.png" alt="AWS" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849611/Screenshot_2025-10-31_000911_fx1iey.png" alt="Terraform" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849611/Screenshot_2025-10-31_000916_mjtpjy.png" alt="Datadog" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849611/Screenshot_2025-10-31_000920_sitm2d.png" alt="Figma" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849649/Screenshot_2025-10-31_000931_wka4ka.png" alt="Microsoft Teams" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849727/Screenshot_2025-10-31_000939_oirfm2.png" alt="Dropbox" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849727/Screenshot_2025-10-31_000945_v4w4xy.png" alt="Travis CI" className="tool-logo" />
      </div>
      <div className="tool-item">
        <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761849728/Screenshot_2025-10-31_000949_alaoxh.png" alt="1Password" className="tool-logo" />
      </div>
    </div>
  </div>
</div>

<div className="demo-container">
  <div className="demo-wrapper">
    <div className="video-section">
      <video className="demo-video" autoPlay loop muted playsInline>
        <source src="https://www.postman.com/mkapi/postman-demo-for-engineering-leaders-workflow-recut-v2.mp4" type="video/mp4" />
      </video>
    </div>
    
    <div className="form-section">
      <h2 className="form-heading">See how Postman works</h2>
      <p className="form-subtext">Fill out the form to get instant access to our guided platform demo.</p>
      
      <ul className="benefits-list">
        <li className="benefit-item">Learn how to design, build, and scale APIs</li>
        <li className="benefit-item">Watch a real team workflow in action</li>
        <li className="benefit-item">See why 40M+ developers choose Postman</li>
      </ul>
      
      <form className="demo-form">
        <div className="form-group">
          <label className="form-label">First name *</label>
          <input type="text" className="form-input" required />
        </div>
        
        <div className="form-group">
          <label className="form-label">Last name *</label>
          <input type="text" className="form-input" required />
        </div>
        
        <div className="form-group">
          <label className="form-label">Company name *</label>
          <input type="text" className="form-input" required />
        </div>
        
        <div className="form-group">
          <label className="form-label">Job title *</label>
          <input type="text" className="form-input" required />
        </div>
        
        <div className="form-group">
          <label className="form-label">Work email *</label>
          <input type="email" className="form-input" required />
        </div>
        
        <div className="checkbox-group">
          <input type="checkbox" className="form-checkbox" id="marketing" />
          <label className="checkbox-label" htmlFor="marketing">Yes, sign me up to receive product updates, news, event information, and other marketing communications, at which I can unsubscribe from at a later time.</label>
        </div>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  </div>
</div>

<div className="report-container">
  <div className="report-wrapper">
    <div className="report-content">
      <h2 className="report-heading">Broken collaboration leads to broken APIs.</h2>
      <p className="report-text">Ninety-three percent of API teams still face collaboration blockers. The 2025 State of the API report reveals how you can unlock the productivity gains that API-first promises, but scattered tooling prevents.</p>
      <a href="#" className="report-button">Read the report</a>
    </div>
    
    <div className="report-image-section">
      <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761850735/ChatGPT_Image_Oct_31_2025_12_28_35_AM_qyyhmy.png" alt="State of the API Report" className="report-image" />
    </div>
  </div>
</div>

<div className="footer-container">
  <div className="footer-wrapper">
    <div className="footer-logo-section">
      <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761851047/Screenshot_2025-10-31_003125_kdolet.png" alt="Postman Logo" className="footer-logo" />
    </div>
    
    <div className="footer-columns">
      <div className="footer-column">
        <h3 className="column-heading">Product</h3>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">What is Postman?</a></li>
          <li><a href="#" className="footer-link">Enterprise</a></li>
          <li><a href="#" className="footer-link">Spec Hub</a></li>
          <li><a href="#" className="footer-link">Flows</a></li>
          <li><a href="#" className="footer-link">Postbot</a></li>
          <li><a href="#" className="footer-link">VS Code Extension</a></li>
          <li><a href="#" className="footer-link">Postman CLI</a></li>
          <li><a href="#" className="footer-link">Integrations</a></li>
          <li><a href="#" className="footer-link">Tools</a></li>
          <li><a href="#" className="footer-link">API Governance</a></li>
          <li><a href="#" className="footer-link">Workspaces</a></li>
          <li><a href="#" className="footer-link">Plans and pricing</a></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3 className="column-heading">API Network</h3>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">App security</a></li>
          <li><a href="#" className="footer-link">Artificial intelligence</a></li>
          <li><a href="#" className="footer-link">Communication</a></li>
          <li><a href="#" className="footer-link">Data analytics</a></li>
          <li><a href="#" className="footer-link">Database</a></li>
          <li><a href="#" className="footer-link">Developer productivity</a></li>
          <li><a href="#" className="footer-link">DevOps</a></li>
          <li><a href="#" className="footer-link">E-commerce</a></li>
          <li><a href="#" className="footer-link">eSignature</a></li>
          <li><a href="#" className="footer-link">Financial services</a></li>
          <li><a href="#" className="footer-link">Payments</a></li>
          <li><a href="#" className="footer-link">Travel</a></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3 className="column-heading">Resources</h3>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">Postman Docs</a></li>
          <li><a href="#" className="footer-link">Academy</a></li>
          <li><a href="#" className="footer-link">Community</a></li>
          <li><a href="#" className="footer-link">Templates</a></li>
          <li><a href="#" className="footer-link">Intergalactic</a></li>
          <li><a href="#" className="footer-link">Videos</a></li>
          <li><a href="#" className="footer-link">MCP Servers <span className="new-badge">NEW</span></a></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3 className="column-heading">Legal and Security</h3>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">Legal Terms Hub</a></li>
          <li><a href="#" className="footer-link">Terms of Service</a></li>
          <li><a href="#" className="footer-link">Postman Product Terms</a></li>
          <li><a href="#" className="footer-link">Trust and Safety</a></li>
          <li><a href="#" className="footer-link">Website Terms of Use</a></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3 className="column-heading">Company</h3>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">About</a></li>
          <li><a href="#" className="footer-link">Careers and culture</a></li>
          <li><a href="#" className="footer-link">Contact us</a></li>
          <li><a href="#" className="footer-link">Partner program</a></li>
          <li><a href="#" className="footer-link">Customer stories</a></li>
          <li><a href="#" className="footer-link">Student programs</a></li>
          <li><a href="#" className="footer-link">Press and media</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  <div className="social-section">
    <div className="social-wrapper">
      <div className="social-icons">
        <a href="#" className="social-link">
          <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761850945/Screenshot_2025-10-31_003132_v4pytj.png" alt="Twitter" className="social-icon" />
        </a>
        <a href="#" className="social-link">
          <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761850946/Screenshot_2025-10-31_003138_mygnlt.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="#" className="social-link">
          <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761850946/Screenshot_2025-10-31_003146_stb1ws.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="#" className="social-link">
          <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761850947/Screenshot_2025-10-31_003154_mjvo8n.png" alt="YouTube" className="social-icon" />
        </a>
        <a href="#" className="social-link">
          <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761850948/Screenshot_2025-10-31_003200_kcr4mf.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="#" className="social-link">
          <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1761850949/Screenshot_2025-10-31_003206_zbfey0.png" alt="Discord" className="social-icon" />
        </a>
      </div>
    </div>
  </div>
  
  <div className="footer-bottom">
    <div className="footer-bottom-wrapper">
      <div className="footer-bottom-links">
        <a href="#" className="bottom-link">Download Postman</a>
        <a href="#" className="bottom-link">Privacy Policy</a>
        <a href="#" className="bottom-link">Do Not Sell or Share My Personal Information</a>
      </div>
      <div className="copyright-text">© 2025 Postman, Inc.</div>
    </div>
  </div>
</div>
    </>
  )
}

export default App

