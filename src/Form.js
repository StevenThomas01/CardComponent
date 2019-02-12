import React, { Component } from 'react';


class Form extends Component {
    state = { userName: '' };

    handleSubmit = (event) => {
        // prevents form from refreshing
        event.preventDefault();
        console.log('Event: Form Submit', this.state.userName);
    }

    render() {
        return(
            <div>
                {/* Rule: onSubmit then can use required attribute. */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    value={this.state.userName}
                    onChange={(event) => this.setState( {userName: event.target.value})}
                    placeholder="Github username" required />
                    <input type="submit" value="Add card" />
                </form>
            </div>
        );
    }
}

export default Form;