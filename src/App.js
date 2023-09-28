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
import ParallelQueries from "./Components/ParallelQueries.page";
import DynamicParallelPage from "./Components/DynamicParallel.page";
import DependentQueriesPage from "./Components/DependentQueries.page";

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
              <li>
                <NavLink to="/rq-parallel">Parallel Queries</NavLink>
              </li>
              <li>
                <NavLink to="/rq-dynamic-parallel">
                  Dynamic Parallel Queries
                </NavLink>
              </li>
              <li>
                <NavLink to="/rq-dependent-queries">Dependent queries</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/rq-dynamic-parallel">
              <DynamicParallelPage herosId={[1, 3]} />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHero />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/rq-parallel">
              <ParallelQueries />
            </Route>
            <Route path="/rq-dependent-queries">
              <DependentQueriesPage email={"ibrahim@mail.com"} />
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
