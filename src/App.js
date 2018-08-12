import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => <h2>Welcome to the best contacts app!</h2>;

const Contacts = ({ match }) => (
  <Fragment>
    <ul>
      <li>
        <Link to="/contacts/lynn">Lynn</Link>
      </li>
      <li>
        <Link to="/contacts/jisu">Jisu Kumchi</Link>
      </li>
      <li>
        <Link to="/contacts/japan">Japan Guy</Link>
      </li>
    </ul>
    <Route
      exact
      path={`${match.path}`}
      render={() => <h3>Please select a contact</h3>}
    />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </Fragment>
);

const Contact = ({ match }) =>
  `Your friend's name is ${match.params.contactName}`;

export default App;
