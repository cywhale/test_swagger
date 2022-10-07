import "swagger-ui-react/swagger-ui.css"
import SwaggerUI from 'swagger-ui-react'

const Swagger = (props) => {
  const url = '/public/test.json'

  return (
    <div id="swagger-container">
      <SwaggerUI url={url} />
    </div>
  )
}
export default Swagger

