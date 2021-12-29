import './App.css';
import React, {Component, Fragment} from "react";
import Users from "./components/users/Users";
import NavBar from "./components/layout/NavBar";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


class App extends Component {

    state = {
        users: [],
        loading: false,
        alert: null
    }

    searchUsers = async text => {
        console.log(`clientid: ${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
        console.log(`secret: ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        this.setState({users: [], loading: true})
        //setTimeout(() => console.log('waiting...'), 3000)

        const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: res.data.items, loading: false, alert: null})

    }


    clear = () => {
        this.setState({users: [], loading: false});
    }

    setAlert = (msg, type) => {
        this.setState({alert: {msg: msg, type: type}});
        setTimeout(() => this.setState({alert: null}), 5000)
    }


    render() {
        const {users, loading} = this.state

        return (
            <Router>
            <div className="App">
                <NavBar/>
                <div className='container'>
                <Alert alert={this.state.alert}/>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <Fragment>
                            <Search
                                searchUsers={this.searchUsers}
                                clearUsers={this.clear}
                                showClear={users.length > 0}
                                setAlert={this.setAlert}
                            />
                            <Users loading={loading} users={users}/>

                            </Fragment>

                        }
                    />
                    <Route
                        exact
                        path='/about'
                        element={<About/>}
                    />
                </Routes>
            </div>
            </div>
            </Router>
        );
    }
}

export default App;

/*


 /*   async componentDidMount() {


        this.setState({users: [], loading: true})


        const res = await axios.get(
            `https://api.github.com/users?client_id=${
                process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: res.data, loading: false})


    }



    testusers = [
        {
            "login": "mojombo",
            "id": 1,
            "node_id": "MDQ6VXNlcjE=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mojombo",
            "html_url": "https://github.com/mojombo",
            "followers_url": "https://api.github.com/users/mojombo/followers",
            "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
            "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
            "organizations_url": "https://api.github.com/users/mojombo/orgs",
            "repos_url": "https://api.github.com/users/mojombo/repos",
            "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mojombo/received_events",
            "type": "User",
            "site_admin": false
        }
    ];


 */