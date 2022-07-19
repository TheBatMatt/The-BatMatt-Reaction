import React from "react";

function Footer() {
	return (
		<footer className="footer flex-row navigation">
			<div>
				<a  className="head-foot-a"
					href="https://github.com/TheBatMatt"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
			</div>
			<div>
				<a  className="head-foot-a"
					href="https://www.linkedin.com/in/ted-jablonowski-234b48240/"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
			</div>
			<div>
				<a className="head-foot-a"
					href="https://www.facebook.com/ThankYouAdamEdgeCopeland/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Facebook
				</a>
			</div>
		</footer>
	);
}

export default Footer;