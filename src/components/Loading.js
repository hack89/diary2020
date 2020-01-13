import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom' //you can get access to the history object's property
import {getUser} from '../actions/userAction'
import {getNotes} from '../actions/notesAction'
import Loading_2 from './Loading_2'

class Loading extends Component {
    
    componentWillMount(){
        const {userLoading, notesLoading } = this.props;
        if(userLoading === undefined){
            this.props.getUser()
        } 

        if(notesLoading === undefined){
            this.props.getNotes()
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.notesLoading === -1 && nextProps.userLoading !== null){
            this.props.getNotes()
        }
    }

    render() {
        const {userLoading, notesLoading, children} = this.props;
        if((!userLoading && !notesLoading) || this.props.user === null ){
            return  (
            <div>
               {children}
            </div>
            )
        } else {
            return (
            
                <Loading_2 />
            )
        }
    }
}

const mapStateToProps=(state)=>{
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    }
}

export default withRouter(connect(mapStateToProps, {getNotes, getUser})(Loading))