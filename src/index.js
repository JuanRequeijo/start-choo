import choo from 'choo';

/* Containers */
import dashboad from './containers/dashboad';
import todos from './containers/todos';
import notFound from './containers/notFound';
import kanban from '../node_modules/choo-ban/src/containers/kanban';

/* Styles */
import 'materialize-css/dist/css/materialize.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import './style/style.css';

/* Events */
import persistence from '../node_modules/choo-ban/src/events/persistence';
import boards from '../node_modules/choo-ban/src/events/boards';
import boardItems from '../node_modules/choo-ban/src/events/boardItems';

/* App */
const app = choo();

app.use(persistence);
app.use(boards);
app.use(boardItems);

/* Routes */
app.route('/', dashboad);
app.route('/todos', todos);
app.route('/kanban', kanban);
app.route('/*', notFound);

app.mount(document.getElementById('App'))



