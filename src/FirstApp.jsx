import PropTypes from 'prop-types';

// const newMessage = {
//   message: 'Hola putos'
// }

export const FirstApp = ({title, subTitle}) => {

  // console.log(props)

  return (  
    <>
      <h1>{title}</h1>
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