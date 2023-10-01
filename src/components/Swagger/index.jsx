import "swagger-ui-react/swagger-ui.css"
//import SwaggerUI from 'swagger-ui-react'
import { Suspense, lazy, memo } from 'preact/compat'  //test dynamic loading

const SwaggerUI = lazy(() => import('swagger-ui-react'))
const Loading = () => <p>Loading...</p>

const SwagX = (props) => (
    <div id="swagger-container">
      <SwaggerUI {...props} />
    </div>
)

const Swagger = (props) => {
  const url = 'https://api.odb.ntu.edu.tw/search/schema?node=odb_v1_ctd_sadcp_bio_202210&num=1' // '/public/test03.json'

  return(
    <Suspense fallback={<Loading />}>
        <SwagX url={url} />
    </Suspense>
  )
}
export default Swagger

