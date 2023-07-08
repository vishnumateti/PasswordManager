import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import UserPasswords from '../UserPasswords'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    showPassword: false,
    searchInput: '',
  }

  addNewPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: uuidv4(),
      webSite: website,
      userName: username,
      pass: password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  userPassword = event => {
    this.setState({password: event.target.value})
  }

  inputUser = event => {
    this.setState({username: event.target.value})
  }

  inputWebsite = event => {
    this.setState({website: event.target.value})
  }

  searchInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeletePassword = id => {
    const {passwordsList} = this.state

    const newPasswordList = passwordsList.filter(eachUser => id !== eachUser.id)
    this.setState({passwordsList: newPasswordList})
  }

  showsPassword = event => {
    if (event.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      searchInput,
      showPassword,
    } = this.state
    const newPasswordList = passwordsList.filter(eachList =>
      eachList.webSite.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <nav>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </nav>
        <div className="card-container">
          <form className="form-container" onSubmit={this.addNewPassword}>
            <h1>Add New Password</h1>
            <div className="input-elements-container">
              <img
                className="input-logos"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                className="input-elements"
                onChange={this.inputWebsite}
                type="text"
                placeholder="Enter Website"
                value={website}
              />
            </div>
            <div className="input-elements-container">
              <img
                className="input-logos"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                className="input-elements"
                onChange={this.inputUser}
                type="text"
                placeholder="Enter Username"
                value={username}
              />
            </div>
            <div className="input-elements-container">
              <img
                className="input-logos"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                className="input-elements"
                type="password"
                placeholder="Enter Password"
                value={password}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <img
            className="locked-image"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
          />
        </div>
        <div className="bottom-container">
          <div className="password-search-container">
            <div className="password-length-container">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="pass-length">{newPasswordList.length}</p>
            </div>
            <div className="input-elements-container-search">
              <img
                className="search-logo"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                className="input-elements"
                type="search"
                placeholder="Search"
                onChange={this.searchInputValue}
                value={searchInput}
              />
            </div>
          </div>
          <div>
            <div className="checkbox-container">
              <input
                onClick={this.showsPassword}
                className="checkbox"
                id="check"
                type="checkbox"
              />
              <label className="show-password" htmlFor="check">
                Show Passwords
              </label>
            </div>
            {newPasswordList.length === 0 && (
              <div className="no-password-container">
                <img
                  className="no-password-image"
                  alt="no passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                />
                <p className="no-password">No Passwords</p>
              </div>
            )}
            {newPasswordList.length !== 0 && (
              <ul className="passwords-container">
                {newPasswordList.map(eachUserPassword => (
                  <UserPasswords
                    key={eachUserPassword.id}
                    userDetails={eachUserPassword}
                    onDeletePassword={this.onDeletePassword}
                    showPassword={showPassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
