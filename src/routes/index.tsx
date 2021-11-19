import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from '../context/AuthContext';

import { PageNotFound } from "../pages/PageNotFound";
import { AdminRoom } from '../pages/AdminRoom';
import { Rooms } from "../pages/Rooms";
import { NewRoom } from "../pages/NewRoom";
import { Home } from "../pages/Home";
import { Room } from "../pages/Room";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />

          <Route path="/rooms" component={Rooms} />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}