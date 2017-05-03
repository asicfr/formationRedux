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
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {};
    this.state.listPriorite = [
      { key:'1', value:'urgente' },
      { key:'2', value:'normale' },
      { key:'3', value:'faible' }
    ];
  }

  myfunction() {
		this.props.dispatch(push('/'));
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.props.formSave(name, value);
  }
  
  /**
   * @returns rendu de la OtherPage 
   */
  render() {
    let listeOptions = this.state.listPriorite.map(
      entry => <option key={entry.key} value={entry.key}>{entry.value}</option>);

    return (
      <div className="home">
        <Grid>
          <Row className="show-grid">
            <Header title="Other page" cpt={this.props.form.cpt} />
          </Row>
          <Row className="show-grid">
            <Button onClick={this.myfunction} id="hpButton1">
              Exemple
            </Button>
            <br />
            Titre : <input type="text" name="titre" value={this.props.form.titre} onChange={this.handleInputChange} /> <br />
            Détail : <textarea name="detail" value={this.props.form.detail} onChange={this.handleInputChange} /> <br />
            Priorité : <select name="priorite" value={this.props.form.priorite} onChange={this.handleInputChange}>
              <option key="0" value="" />
              {listeOptions}
            </select>
            Terminé : <input type="checkbox" name="done" checked={this.props.form.done} onChange={this.handleInputChange} /> <br />
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
