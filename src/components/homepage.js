import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePage extends Component {

render() {
	return (
		<div className="">
        
			<section className="jumbotron text-center">
		      <div className="container">
		        <h1 className="jumbotron-heading">Album example</h1>
		        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
		        <p>
		          <a href="#" className="btn btn-primary">Main call to action</a>
		          <a href="#" className="btn btn-secondary">Secondary action</a>
		        </p>
		      </div>
		    </section>


    		<div className="album text-muted">
      			<div className="container">

	      			<div className="row">
	      			
	          			<div className="card">
							<img data-src="" alt="Card image cap" />
	            			<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	          			</div>

	          			<div className="card">
							<img data-src="" alt="Card image cap" />
	            			<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	          			</div>

	          			<div className="card">
							<img data-src="" alt="Card image cap" />
	            			<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	          			</div>

	          		</div>
      			</div>
      		</div>
		    
           
      	</div> 

		);
	};
}

export default HomePage;