import React, { Component } from 'react'
import {connect} from 'react-redux'
import {saveComment} from '../actions/notesAction'

class SubmitComment extends Component {
    constructor(props){
        super(props);

        this.state = {
            commentBody: ''
        }

    } 


    handleChange(e){
        this.setState({
            commentBody: e.target.value
        })
    }

   handleSubmit(e){
       e.preventDefault();
       const comment = {
           commentBody: this.state.commentBody,
           uid: this.props.uid
       }
       this.props.saveComment(this.props.id, comment)
       this.setState({
           commentBody: ''
       })
   }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="form-group">
                        <textarea 
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.commentBody}
                            type="text" 
                            name="commentBody" 
                            className="form-control no-border" 
                            placeholder="write comment..."
                            required/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Add comment</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps=(state, ownProps)=>{
    return {
        uid: state.user.uid
    }
}

export default connect(mapStateToProps, {saveComment})(SubmitComment)