import "swagger-ui-react/swagger-ui.css"
import { Suspense, lazy, memo } from 'preact/compat'  //test dynamic loading

const SwaggerUI = lazy(() => import('swagger-ui-react'))
const Loading = () => <p>Loading...</p>

const SwagX = (props) => (
    <div id="swagger-container">
      <SwaggerUI {...props} />
    </div>
)

const Swagger = (props) => {
  const url = '/public/test04_04_tryerr.json' //test04_02_noDatetime.json //test04_03_noEnum.json
              //'https://api.odb.ntu.edu.tw/search/schema?node=odb_v1_ctd_sadcp_bio_202210&num=1'
  return(
    <Suspense fallback={<Loading />}>
        <SwagX url={url} />
    </Suspense>
  )
}
export default Swagger

