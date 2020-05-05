import React from "react"
// import styles from "../styles/layout.module.css";
import '../utils/global.css'
import { Link } from "gatsby";
// import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import Toggle from './Toggle/Toggle';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import gatsbyLogo from '../assets/Gatsby-Logo.svg';

// const Layout = ({ children }) => {
// 	const style = {
//           color: 'var(--textNormal)',
//           background: 'var(--bg)',
//           minHeight: '100vh',
//           margin: '3rem auto', 
// 		  maxWidth: '650px', 
// 		  padding: '0 1rem',
//     }

// 	const [theme, setTheme] = useState("null");

//     useEffect(() => {
// 	    setTheme(window.__theme);
// 	    window.__onThemeChange = () => setTheme(window.__theme);
// 	}, [theme]); // these are defined in html.js 

// 	return (
// 		 <div style={style}>
// 		   <header>
// 		   		<Link to="/">yinhow home</Link>
// 			    {theme !== null ? (
// 	              <Toggle
// 	                icons={{
// 	                  checked: (
// 	                    <img
// 	                      src={moon}
// 	                      width="16"
// 	                      height="16"
// 	                      role="presentation"
// 	                      style={{ pointerEvents: 'none' }}
// 	                    />
// 	                  ),
// 	                  unchecked: (
// 	                    <img
// 	                      src={sun}
// 	                      width="16"
// 	                      height="16"
// 	                      role="presentation"
// 	                      style={{ pointerEvents: 'none' }}
// 	                    />
// 	                  ),
// 	                }}
// 	                checked={theme === 'dark'}
// 	                onChange={e =>
// 	                  window.__setPreferredTheme(
// 	                    e.target.checked ? 'dark' : 'light'
// 	                  )
// 	                }
// 	              />
// 	            ) : (
// 	              <div style={{ height: '24px' }} />
// 	            )}	
// 		   </header>
// 		   {children}
// 		   <footer>yinhow footer</footer>
// 		 </div>
//  		)
// }

// export default Layout

class Layout extends React.Component {
  state = {
    theme: null,
  };

  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

   render() {
		const { children } = this.props;

		const style = {
			section: {
		          color: 'var(--textNormal)',
		          background: 'var(--bg)',
		          minHeight: '100vh',
		          margin: '3rem auto', 
				  maxWidth: '650px', 
				  padding: '0 1rem',				
			},
			header: {
				display: "flex", 
				justifyContent: "space-between",
			},
			footer: {
				display: "flex", 
				justifyContent: "space-between",
				fontSize: "0.8em",
			},
			footerRight: {
				display: "flex", 
				alignItems: "flex-start"
			},
			footerImage: {
				margin: "0",
				marginLeft: "5px",
				width: "20px"
			}
		}

		return (
				 <div style={style.section}>
				   <header style={style.header}>
				   		<Link to="/">home</Link>
				   		<div style={{ display: "flex", flexDirection: "row" }}>
				   			<Link to="/about" style={{ marginRight: "20px"}}>about</Link>
				   			<div>
							    {this.state.theme !== null ? (
					              <Toggle
					                icons={{
					                  checked: (
					                    <img
					                      src={moon}
					                      width="16"
					                      height="16"
					                      alt="presentation"
					                      style={{ pointerEvents: 'none' }}
					                    />
					                  ),
					                  unchecked: (
					                    <img
					                      src={sun}
					                      width="16"
					                      height="16"
					                      alt="presentation"
					                      style={{ pointerEvents: 'none' }}
					                    />
					                  ),
					                }}
					                checked={this.state.theme === 'dark'}
					                onChange={e =>
					                  window.__setPreferredTheme(
					                    e.target.checked ? 'dark' : 'light'
					                  )
					                }
					              />
					            ) : (
					              <div style={{ height: '24px' }} />
					            )}	
				            </div>
			            </div>
				   </header>
				   {children}
				   <br />
				   <hr />
				   <footer style={style.footer}>
  				   	<p> © 2020 yinhow </p>	
				   	<div style={style.footerRight}>
				   		<p>built with</p>
				   		<a href="https://www.gatsbyjs.org/"><img src={gatsbyLogo} style={style.footerImage} alt="Gatsby Logo" /></a> 
				   	</div>
				   </footer>
				 </div>
		 )
	}	
}

export default Layout


// const Layout = ({ children }) => {

// body:  header/navbar, section, footer


// export default ({ children }) => (
//  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
//    {children}
//  </div>
// )



