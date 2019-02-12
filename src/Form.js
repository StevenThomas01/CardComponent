import React, { Component } from 'react';

class Form extends Component {
    handleSubmit = (event) => {
        // prevents form from refreshing
        event.preventDefault();
        console.log('Event: Form Submit', this.userNameInput.value);
    }

    render() {
        return(
            <div>
                {/* Rule: onSubmit then can use required attribute. */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    ref={(input) => this.userNameInput = input}
                    placeholder="Github username" required />
                    <input type="submit" value="Add card" />
                    <label value={this.userInput} />
                </form>
            </div>
        );
    }
}

export default Form;