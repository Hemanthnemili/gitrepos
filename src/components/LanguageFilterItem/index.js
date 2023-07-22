import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, setActiveLanguageId} = props
  const {id, language} = languageDetails
  const btnClassName = isActive
    ? `language-btn active-language-btn`
    : `language-btn`

  const onClickChange = () => {
    setActiveLanguageId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickChange} className={btnClassName}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
