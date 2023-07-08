import './index.css'

const color = ['green', 'yellow', 'blue', 'skyblue', 'red', 'orange', 'grey']

const UserPasswords = props => {
  const {userDetails, onDeletePassword, showPassword} = props
  const {id, webSite, userName, pass} = userDetails
  const initialLetter = webSite.slice(0, 1).toUpperCase()

  const randomColors = color[Math.floor(Math.random() * 7)]

  const deletePassword = () => {
    onDeletePassword(id)
  }

  return (
    <li className="list-container">
      <div className="letter-website-container">
        <div className={`letter-container ${randomColors}`}>
          <p>{initialLetter}</p>
        </div>
        <div className="website-container">
          <p className="website-name">{webSite}</p>
          <p className="website-name">{userName}</p>
          {showPassword ? (
            <p className="website-name">{pass}</p>
          ) : (
            <img
              className="stars-icon"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
      </div>

      <button
        className="delete-button"
        data-testid="delete"
        onClick={deletePassword}
        type="button"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default UserPasswords
