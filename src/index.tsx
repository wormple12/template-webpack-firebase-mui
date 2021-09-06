import join from 'lodash/join';
import { default as React } from 'react';
import { default as ReactDOM } from 'react-dom';
import App from './components/App';

function webpackElement() {
    const element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    return element;
}
const root = webpackElement();
document.body.appendChild(root);

ReactDOM.render(<App />, root);