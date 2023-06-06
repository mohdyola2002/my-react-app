import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { Component } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/home";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    let counters = this.state.counters.map((x) => {
      if (x.id === counter.id) x.value++;
      return x;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <BrowserRouter>
          <Navbar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/counter"
                element={
                  <Counters
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onReset={this.handleReset}
                    counters={this.state.counters}
                  />
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
