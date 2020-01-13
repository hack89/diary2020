import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NoteDetail from './components/NoteDetail'
import Header from './routes/Header'
import Loading from './components/Loading'
import AuthenticatedComponents from './components/AuthenticatedComponents'
import NoteEdit from './components/NoteEdit'
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import Login from './components/Login'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Loading>
            <div>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Redirect from="/logout" to="/" />
                    <AuthenticatedComponents>
                        <Header />
                        <Route path="/:id/edit" component={NoteEdit} exact/>
                        <Route path="/:id" component={NoteDetail} exact/>
                        <Route path="/" exact component={App} />
                    </AuthenticatedComponents>
                </Switch>
            </div>
        </Loading>
        </BrowserRouter>
    </Provider>
 ,
    document.getElementById('root')
);
