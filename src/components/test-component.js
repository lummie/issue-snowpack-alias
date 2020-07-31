import { LitElement, html, css } from '@modules/lit-element';

export default class TestComp extends LitElement {
  constructor() {
    super();
    this.title = '';
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  // when the menu button is clicked open the drawer
  menuButtonClicked() {}

  render() {
    return html` <div><p>${this.title}</p></div> `;
  }
}
customElements.define('test-component', TestComp);
