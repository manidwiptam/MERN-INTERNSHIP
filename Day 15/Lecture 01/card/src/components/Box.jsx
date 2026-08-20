const Box = ({ user, age }) => {
  return (
    <article className='profile-card'>
      <div className='profile-content'>
        <div className='profile-image-wrap'>
          <img
            className='profile-image'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Sk7DymKP8YMYSB-1LSdwqsR463Apgd13yaaV7yoC9Q&s=10'
            alt={`${user}'s profile`}
          />
        </div>

        <span className='profile-badge'>Profile</span>
        <h2 className='profile-name'>{user}</h2>
        <p className='profile-age'>Age: {age}</p>
        <p className='profile-role'>Software Developer</p>

        <button className='profile-button'>View Profile</button>
      </div>
    </article>
  )
}

export default Box