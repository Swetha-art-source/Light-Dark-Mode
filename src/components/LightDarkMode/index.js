// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDarkMode: true,
    }
  }

  toggleMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <div className="container">
        <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <h1 className="heading">Click to change mode</h1>
          <button
            className="mode-toggle"
            onClick={this.toggleMode}
            type="button"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
