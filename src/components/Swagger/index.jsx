import "swagger-ui-react/swagger-ui.css"
//import SwaggerUI from 'swagger-ui-react'
import DatePicker from "react-datepicker"
import { Suspense, lazy, memo } from 'preact/compat'  //test dynamic loading

const SwaggerUI = lazy(() => import('swagger-ui-react'))
const Loading = () => <p>Loading...</p>

const SwagX = (props) => (
    <div id="swagger-container">
      <SwaggerUI {...props} />
    </div>
)

// https://gist.github.com/s-bauer/7ecfaf62c24a17c6a92c8599f414de37#file-app-js-L16
const JsonSchema_string_date = (props) => {
  const dateNumber = Date.parse(props.value);
  const date = dateNumber
    ? new Date(dateNumber)
    : new Date();

  return (
    <DatePicker
      selected={date}
      onChange={d => props.onChange(d.toISOString().substring(0, 10))}
    />
  );
}

const JsonSchema_string_time = (props) => {
  const dateNumber = Date.parse(props.value);
  const date = dateNumber
    ? new Date(dateNumber)
    : new Date();

  return (
    <DatePicker
      selected={date}
      onChange={d => props.onChange(d.toISOString().substring(11))}
    />
  );
}

const JsonSchema_string_date_time = (props) => {
  const dateNumber = Date.parse(props.value);
  const date = dateNumber
    ? new Date(dateNumber)
    : new Date();

  return (
    <DatePicker
      selected={date}
      onChange={d => props.onChange(d.toISOString())}
      showTimeSelect
      timeFormat="p"
      dateFormat="Pp"
    />
  )
}

const Swagger = (props) => {
  const url = '/public/test04_03_noEnum.json'
              //'https://api.odb.ntu.edu.tw/search/schema?node=odb_v1_ctd_sadcp_bio_202210&num=1'
  const DateTimeSwaggerPlugin = {
    components: {
      "JsonSchema_string_time": JsonSchema_string_time,
      "JsonSchema_string_date": JsonSchema_string_date,
      "JsonSchema_string_date-time": JsonSchema_string_date_time
    }
  }

  return(
    <Suspense fallback={<Loading />}>
        <SwagX url={url} plugins={[DateTimeSwaggerPlugin]} />
    </Suspense>
  )
}
export default Swagger

