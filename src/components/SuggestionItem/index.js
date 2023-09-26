// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItems, onSuggestionSelect} = props
  const {suggestion} = suggestionItems
  const onSuggestion = () => {
    onSuggestionSelect(suggestion)
  }
  return (
    <li className="li-container">
      <p className="suggest-name">{suggestion}</p>
      <button type="button" className="button" onClick={onSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
