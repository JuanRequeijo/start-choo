import html from 'choo/html';

const dashboad = () => html`
  <div class="container center">
    <h2>
      Dashboard
    </h2>    
    <hr />
    <a href='/kanban' class="waves-effect  amber darken-2 btn btn-block">
      kanban
    </a> 
    <br>
    <br>
    <a href='/todos' class="waves-effect  amber darken-2 btn btn-block">
      Todos
    </a>
    <br>
    <br>
    <a href='/' class="waves-effect  amber darken-2 btn btn-block">
      Back to main page
    </a>
  </div>
`;

export default dashboad;