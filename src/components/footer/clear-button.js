import html from 'choo/html';

module.exports = deleteCompleted

function deleteCompleted (emit) {
  return html`
    <button class="clear-completed" onclick=${deleteAllCompleted}>
      Clear completed
    </button>
  `

  function deleteAllCompleted () {
    emit('todos:deleteCompleted')
  }
}
