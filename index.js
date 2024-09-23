const Button = props => {
  //  Write your code here.
  const {text, className} = props
  return <button className={`button ${className}`}>{text}</button>
}

const element = (
  //  Write your code here.
  <div className='social-button-bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='buttons-container'>
      <Button className='like-button' text='Like' />
      <Button className='comment-button' text='Comment' />
      <Button className='share-button' text='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
