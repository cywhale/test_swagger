import "swagger-ui-react/swagger-ui.css"
//import "swagger-ui-react/dist/swagger-ui.css"
import { Suspense, lazy, memo } from 'preact/compat'  //test dynamic loading

const SwaggerUI = lazy(() => import('swagger-ui-react'))
const Loading = () => <p>Loading...</p>

const SwagX = (props) => (
    <div id="swagger-container">
      <SwaggerUI {...props} />
    </div>
)

const Swagger = (props) => {
  const url = '/public/test04_04_tryerr.json'
              //'/public/test04_04_delOneEnum.json'
  return(
    <Suspense fallback={<Loading />}>
        <SwagX url={url} />
    </Suspense>
  )
}
export default Swagger

