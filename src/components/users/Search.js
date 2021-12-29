import React, {Component} from "react";
import PropTypes from "prop-types";

class Search extends Component {

    state = {
        text: ''
    }

    onsubmit = (e) => {
        e.preventDefault();

        if (this.state.text === '') {
            this.props.setAlert('Enter something', 'light')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({text: ''})
        }
    }

    //interessante Syntax:
    //ich kann die property eines Objekts dynamisch über ein array ansprechen
    onChangeHandler = e => this.setState({[e.target.name]: e.target.value})


    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }



    render() {

        const {showClear, clearUsers } = this.props

        return (
            <div>
                <form  onSubmit={this.onsubmit} className='form'>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search Users...'
                        value={this.state.text}
                        onChange={this.onChangeHandler}

                    />
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'

                    />
                </form>
                {showClear ?
                    <button
                        className='btn btn-sm btn-block'
                        type='button'
                        onClick={clearUsers}
                    >Clear</button> : null}

            </div>
        )
    }
}

export default Search;