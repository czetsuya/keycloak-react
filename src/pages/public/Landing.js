import React from 'react';

export default () => (
	<div className="landing-body">
		<div className="landing-wrapper">
			<div id="header">
				<div className="header-top clearfix">
					<span className="logo" />

					<a id="menu-button" href="/">
						<i className="material-icons">menu</i>
					</a>
					<ul id="menu" className="animated">
						<li>
							<a href="/">
								<i className="pi-md-home" />
								<span>Home</span>
							</a>
						</li>
						<li>
							<a href="#introduction">
								<i className="pi-md-open-in-browser" />
								<span>Introduction</span>
							</a>
						</li>
						<li>
							<a href="#features">
								<i className="pi-md-list" />
								<span>Features</span>
							</a>
						</li>
						<li>
							<a href="#promotion">
								<i className="pi-md-group-work" />
								<span>Promotion</span>
							</a>
						</li>
						<li>
							<a href="#pricing">
								<i className="pi-md-attach-money" />
								<span>Pricing</span>
							</a>
						</li>
						<li>
							<a href="#video">
								<i className="pi-md-videocam" />
								<span>Video</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="header-content clearfix">
					<h1>Your application slogan comes here</h1>
					<a href="/dashboard" className="p-button secondary-btn">
						<span className="p-button-text">Login</span>
					</a>
				</div>
			</div>

			<div id="features">
				<h2>The Ultimate Material Application Template for PrimeReact</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse delectus sit velit, aspernatur
					voluptates molestiae, enim recusandae. Odit dicta, maiores quas ad nesciunt, illum expedita
					veritatis illo quam odio id!
				</p>

				<div className="p-grid">
					<div className="p-col-12 p-md-4">
						<h3>Creative</h3>
						<p>Lorem ipsum dolor sit amet</p>
						<div className="feature-icon">
							<i className="material-icons">&#xE150;</i>
						</div>
					</div>
					<div className="p-col-12 p-md-4">
						<h3>Responsive</h3>
						<p>Lorem ipsum dolor sit amet</p>
						<div className="feature-icon">
							<i className="material-icons">&#xE32C;</i>
						</div>
					</div>
					<div className="p-col-12 p-md-4">
						<h3>Cross Browser</h3>
						<p>Lorem ipsum dolor sit amet</p>
						<div className="feature-icon">
							<i className="material-icons">&#xE89D;</i>
						</div>
					</div>

					<div className="p-col-12 p-md-4">
						<div className="feature-icon">
							<i className="material-icons">&#xE259;</i>
						</div>
						<h3>Well Organized</h3>
						<p>Well Organ</p>
					</div>
					<div className="p-col-12 p-md-4">
						<div className="feature-icon">
							<i className="material-icons">&#xE40A;</i>
						</div>
						<h3>Beautiful</h3>
						<p>Lorem ipsum dolor sit amet</p>
					</div>
					<div className="p-col-12 p-md-4">
						<div className="feature-icon">
							<i className="material-icons">&#xE86C;</i>
						</div>
						<h3>Just For you</h3>
						<p>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
			</div>

			<div id="promotion" className="clearfix">
				<div className="p-grid">
					<div className="p-col-12 p-lg-8">
						<h1>Boost Your Productivity.</h1>
						<a href="/" className="p-button secondary-btn">
							<span className="p-button-text">Sign Up Now</span>
						</a>
					</div>
					<div className="p-col-12 p-lg-4">
						<div className="card">
							<h3>Just</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab perferendis nesciunt ad
								reiciendis explicabo consequatur sapiente odit ipsa harum illum, necessitatibus quaerat
								voluptates aspernatur iure, aperiam possimus sint sit mollitia!
							</p>
						</div>

						<div className="card">
							<h3>Like</h3>
							<p>
								Ab perferendis nesciunt ad reiciendis explicabo consequatur sapiente odit ipsa harum
								illum. Necessitatibus quaerat voluptates aspernatur iure, aperiam possimus sint sit
								mollitia!
							</p>
						</div>

						<div className="card">
							<h3>That</h3>
							<p>
								Necessitatibus quaerat voluptates aspernatur iure, aperiam possimus sint sit mollitia!
								Ab perferendis nesciunt ad reiciendis explicabo consequatur sapiente odit ipsa harum
								illum.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div id="pricing">
				<h2>Pricing</h2>
				<p>
					Esse delectus sit velit, aspernatur voluptates molestiae, enim recusandae. Odit dicta, maiores quas
					ad nesciunt, illum expedita veritatis illo quam odio id!
				</p>

				<div className="p-grid">
					<div className="p-col-12 p-md-4 pricing-box pricing-basic">
						<div className="card">
							<div className="pricing-header">
								<span className="name">BASIC</span>
								<span className="fee">$5</span>
								<span className="type">Monthly</span>
							</div>
							<div className="pricing-content">
								<ul>
									<li>
										<i className="material-icons"></i>
										<span>Responsive</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Push Messages</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="p-col-12 p-md-4 pricing-box pricing-standard">
						<div className="card">
							<div className="pricing-header">
								<span className="name">STANDARD</span>
								<span className="fee">$25</span>
								<span className="type">Monthly</span>
							</div>
							<div className="pricing-content">
								<ul>
									<li>
										<i className="material-icons"></i>
										<span>Responsive</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Push Messages</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>7/24 Support</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Free Shipping</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="p-col-12 p-md-4 pricing-box pricing-professional">
						<div className="card">
							<div className="pricing-header">
								<span className="name">PROFESSIONAL</span>
								<span className="fee">$50</span>
								<span className="type">Monthly</span>
							</div>
							<div className="pricing-content">
								<ul>
									<li>
										<i className="material-icons"></i>
										<span>Responsive</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Push Messages</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>7/24 Support</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Free Shipping</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Unlimited Bandwidth</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Unlimited Storage</span>
									</li>
									<li>
										<i className="material-icons"></i>
										<span>Gift Cards</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="video">
				<div className="video-content">
					<h2>Video</h2>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
					<div className="video-container">
						<iframe
							title="youtube_video"
							src="https://www.youtube.com/embed/B_lYGUtCd0g"
							frameBorder="0"
							width="560"
							height="330"
						/>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="footer-content">
					<div className="p-grid">
						<div className="p-col-12 p-md-6">
							<p>PrimeReact ULTIMA</p>
						</div>
						<div className="p-col-12 p-md-6">
							<ul>
								<li>
									<a href="#mobile">Promotion</a>
								</li>
								<li>
									<a href="#pricing">Pricing</a>
								</li>
								<li>
									<a href="#video">Video</a>
								</li>
							</ul>
							<ul>
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="#introduction">Introduction</a>
								</li>
								<li>
									<a href="#features">Features</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
