import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar dark>
					<div className="container">
						<NavbarBrand href='/'>Ristorante ConFusion </NavbarBrand>
					</div>
				</Navbar>
				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1> Ristorante ConFusion </h1>
								<p> We take inspiration from the worlds best cusines, and create unique food experiences. </p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Header;