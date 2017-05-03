import React, { Component } from 'react';
import { Grid, Row, Button } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { exampleActionCreator } from 'actions';
import Header from 'components/Header/Header.jsx';

if (process.env.BROWSER) {
    require('./HomePage.scss');
}


/**
 * Composant d'affichage de la home page
 * 
 * @class HomePage
 * @extends {Component}
 */
class HomePage extends Component {

  /**
   * Creates an instance of HomePage.
   * @param {any} props 
   */
  constructor(props) {
    // appel au super obligatoire
    super(props);

    // binding des fonctions pour permettre l'utilisation du this
    this.myfunction = this.myfunction.bind(this);
    this.setText = this.setText.bind(this);
  }

  myfunction() {
		this.props.dispatch(push('/other'));
  }

  setText(event) {
		this.props.dispatch(exampleActionCreator(event.target.value));
  }

  /**
   * @returns rendu de la HomePage 
   */
  render() {
    return (
      <div className="home">
        <Grid>
          <Row className="show-grid">
            <Header title="Home page" cpt={this.props.form.cpt} />
          </Row>
          <Row className="show-grid">
            <Button onClick={this.myfunction} id="hpButton1">
              Routage
            </Button>
          </Row>
          <Row className="show-grid">
            <input type="text" value={this.props.data} onChange={this.setText} />
          </Row>
        </Grid>
      </div>
    );
  }
}

/**
 * Validation des proprietes du composant
 */
HomePage.propTypes = {
};

export default HomePage;
