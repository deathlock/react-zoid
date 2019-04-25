import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';

let MyLoginZoidComponent = zoid.create({
    tag: 'my-login-component',
    url: 'https://www.my-site.com/login'
});

ReactDom.render(<App { ...window.xprops } />, document.querySelector('#container'));
