import React, { Component } from 'react'
import {connect} from 'react-redux'
import {googleLogin} from '../actions/userAction'
import '../styles/index.css'

class Login extends Component {
    componentWillMount(){
        if(this.props.user !== null){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user !== null){
            nextProps.history.push('/')
        }
    }

    render() {
        return (
            <div className="container-fluid container_index">
                <div className="row text-center">
                    <div className="col-12 jumbotron jumbo" style={{marginTop: '-20px'}}>
                        <h1 className="index_h1">Diary | {new Date().getFullYear()}</h1>
                        <br/>
                        <div className="image_index"></div>
                        <div className="" style={{marginTop: '20px'}}>
                        <button onClick={this.props.googleLogin} className="btn btn-danger btn-lg">Login with Google</button>
                        </div>
             
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps=(state, ownProps)=>{
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {googleLogin})(Login)