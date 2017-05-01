import React, { Component } from 'react';
import { Grid, Row, Button } from 'react-bootstrap';
import { push } from 'react-router-redux';
import Header from 'components/Header/Header.jsx';

if (process.env.BROWSER) {
    require('./OtherPage.scss');
}


/**
 * Composant d'affichage de la home page
 * 
 * @class OtherPage
 * @extends {Component}
 */
class OtherPage extends Component {

  /**
   * Creates an instance of OtherPage.
   * @param {any} props 
   */
  constructor(props) {
    // appel au super obligatoire
    super(props);

    // binding des fonctions pour permettre l'utilisation du this
    this.myfunction = this.myfunction.bind(this);
  }

  myfunction() {
		this.props.dispatch(push('/'));
  }

  /**
   * @returns rendu de la OtherPage 
   */
  render() {
    return (
      <div className="home">
        <Grid>
          <Row className="show-grid">
            <Header title="Other page" />
          </Row>
          <Row className="show-grid">
            <Button onClick={this.myfunction} id="hpButton1">
              Exemple
            </Button>
          </Row>
          <Row className="show-grid" />
        </Grid>
      </div>
    );
  }
}

/**
 * Validation des proprietes du composant
 */
OtherPage.propTypes = {
};

export default OtherPage;
