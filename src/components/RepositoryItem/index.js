import './index.css'

const RepositoryItem = props => {
  const {repositoryData} = props
  const {
    name,

    issuesCount,
    forksItem,
    starsCount,
    avatarUrl,
  } = repositoryData

  return (
    <li className="repository-list">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <h1>{name}</h1>
      <div className="star">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="star-img"
        />
        <p>{starsCount}</p>
      </div>

      <div className="forks">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="forks-img"
        />
        <p>{forksItem}</p>
      </div>

      <div className="issues">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="issue-img"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
