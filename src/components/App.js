import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash';
import {getNotes, saveNote, deleteNote} from './../actions/notesAction'
import {getUser} from '../actions/userAction'
import NoteCard from './NoteCard'
import './../styles/index.css'

class App extends Component {
    constructor(props){
        super(props)

        this.state= {
            title: '',
            body: ''            
        }
    }


    // componentDidMount(){
    //     this.props.getNotes()
    //     this.props.getUser()
    // }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const note = {
            title: this.state.title,
            body: this.state.body,
            uid: this.props.user.uid
        }

        this.props.saveNote(note)
        this.setState({
            title: '',
            body: ''
        })

    }



    renderNotes(){
        return _.map(this.props.notes, (note, key)=>{
            return (
                <NoteCard key={key}>
                    <Link to={`/${key}`}>
                        <h2>{note.title}</h2>
                    </Link>
                        <p>{note.body}</p>
                        {note.uid === this.props.user.uid && 
                            (<div>
                                <button className="btn btn-danger btn-xs" onClick={()=>this.props.deleteNote(key)}>X</button>
                            <button className="btn btn-info btn-xs pull-right"><Link to={`/${key}/edit`}>Update</Link></button>
                            </div>
                            )
                            }
                        
                </NoteCard>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 text-center user_flex">
                        <img 
                            src={this.props.user.photoURL}
                            height="50px"
                            className="img img-circle img-responsive"
                            style={{padding: '20px'}} 
                            alt="userprofile"/>
                            <h4 className="username">Welcome back <span className="user_name">{this.props.user.displayName}</span></h4>
                    </div>
                    <div className="col-sm-10">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <div className="form-group">
                                <input
                                onChange={e => this.handleChange(e)}
                                value={this.state.title}
                                    type="text"
                                    name="title"
                                    className="form-control no-border"
                                    placeholder="Title..."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                onChange={e => this.handleChange(e)}
                                value={this.state.body}
                                    type="text"
                                    name="body"
                                    className="form-control no-border"
                                    placeholder="Body..."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary col-sm-12">Save</button>
                            </div>
                        </form>
                        <br/>
                        <br/>
                        <br/>
                        {this.renderNotes()}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps=(state, ownProps)=>{
   return { 
       notes: state.notes,
       user: state.user,
       
    }
}




export default connect(mapStateToProps, {getNotes, saveNote, deleteNote, getUser})(App)