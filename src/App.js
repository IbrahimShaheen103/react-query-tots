import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import SuperHeroesPage from "./Components/Superheroes.page";
import RQSuperHeroesPage from "./Components/RQSuperheroes.page";
import HomePage from "./Components/Home.page";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHero from "./Components/RQSuperHero.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home </NavLink>
              </li>
              <li>
                <NavLink to="/super-heroes">SuperHeroes</NavLink>
              </li>
              <li>
                <NavLink to="/rq-super-heroes">RQ SuperHeroes</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHero />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
