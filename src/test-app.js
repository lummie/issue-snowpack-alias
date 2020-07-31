import { LitElement, html, css } from '@modules/lit-element';
import './components/test-component';

export class TestApp extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`<test-component title="Hello World"></test-component>`;
  }
}
customElements.define('test-app', TestApp);
