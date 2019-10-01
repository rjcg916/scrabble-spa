import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from "react-router-dom";
import { Board } from "./Board";
import { Rack } from "./Rack";

export class Selector extends Component {

    renderRack = () => <Rack tiles={[
        { letter: "A", value: 1 },
        { letter: "B", value: 1 },
        { letter: "C", value: 3 }]} />

    renderBoard = () => <Board />

    render() {
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <NavLink activeClassName="active" className="m-2 btn btn-block btn-primary"
                            to="/board">Board</NavLink>
                        <NavLink activeClassName="active" className="m-2 btn btn-block btn-primary"
                            to="/rack">Rack</NavLink>

                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/board" render={() => this.renderBoard()} />
                            <Route path="/rack" render={() => this.renderRack()} />
                            <Redirect to="/board" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    }
}