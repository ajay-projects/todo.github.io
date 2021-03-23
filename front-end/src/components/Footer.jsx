import { Component } from "react";
import "../styles/Footer.css";
import {FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";


class Footer extends Component {
	render() {
		return (
			<div className="footer-row">
				<p>
					Copyright &copy; 2020 All Rights Reserved by
					<a href=" ">Company</a>.
				</p>
				<ul className="footer-icons">
					<li>
						<a href=" ">
							<FaFacebook size="2em" color="white"/>
						</a>
					</li>
					<li>
						<a href=" ">
						<FaTwitter size="2em" color="white"/>
						</a>
					</li>
					<li>
						<a href=" ">
						<FaLinkedin size="2em" color="white"/>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
