import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editNote} from '../actions/notesAction'
import { Link } from 'react-router-dom';


class NoteEdit extends Component {
    constructor(props){
        super(props)

        this.state= {
            title: this.props.note.title,
            body: this.props.note.body          
        }
    }

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
            uid: this.props.uid
        }

        this.props.editNote(this.props.match.params.id, note)
        this.setState({
            title: '',
            body: ''
        })

        this.props.history.push('/')

    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
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
                                <button className="btn btn-primary col-sm-12">Update</button>
                            </div>
                        </form>
 
                    </div>
                </div>
            </div>
        )
    }
}
 


function mapStateToProps(state, ownProps) {
    return {
        note: state.notes[ownProps.match.params.id],
        uid: state.user.uid
    };
}

export default connect(mapStateToProps, {editNote})(NoteEdit);
