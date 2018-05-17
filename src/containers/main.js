import html from 'choo/html';

var Header = require('../components/header')
var Footer = require('../components/footer')
var Todos = require('../components/todos')
var Info = require('../components/info')

module.exports = mainView

function mainView (state, emit) {
  return html`
    <body>
      <section class="todoapp">
        ${Header.render()}
        ${Todos.render()}
        ${Footer.render()}
      </section>
      ${Info.render()}
    </body>
  `
}
