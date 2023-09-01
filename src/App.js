import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SuperHeroesPage from "./Components/Superheroes.page";
import RQSuperHeroesPage from "./Components/RQSuperheroes.page";
import HomePage from "./Components/Home.page";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/super-heroes">SuperHeroes</a>
              </li>
              <li>
                <a href="/rq-super-heroes">RQ SuperHeroes</a>
              </li>
            </ul>
          </nav>
          <Switch>
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
