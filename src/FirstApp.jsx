import PropTypes from 'prop-types';

// const newMessage = {
//   message: 'Hola putos'
// }

export const FirstApp = ({title, subTitle}) => {

  // console.log(props)

  return (  
    <>
      <h1 data-testid="test-tittle">{title}</h1>
      <p>{subTitle}</p>
    </>

  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,

}

FirstApp.defaultProps = {
  title: 'Sin titutlo',
  subTitle: 'Sin subtitulo'
}