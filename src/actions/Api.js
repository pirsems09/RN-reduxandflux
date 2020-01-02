import { AUTHORIZATION } from "./types";

export const post = (
  url,
  token,
  details,
  contentType,
  isFormBody,
  dispatch,
  start,
  success,
  fail
) => {

  console.log('POST Servisine Çıkılan URL: ', url);

  let _headers = '';
  var formBody = [];

  dispatch({ type: start });

  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  if (!isFormBody) {
    _headers = {
      'Content-Type': contentType == 1 ? 'application/x-www-form-urlencoded' : 'application/json',
      'Authorization': 'Bearer '.concat(token)
    };
  } else {
    _headers = {
      'Content-Type': contentType == 1 ? 'application/x-www-form-urlencoded' : 'application/json'
    };
  }

  fetch(url, {
    method: 'POST',
    headers: _headers,
    body: isFormBody ? formBody : JSON.stringify(details)
  })
    .then((response) => response.json()).then((responseJson) => {

      if (responseJson !== null) {

        if (responseJson.Message == AUTHORIZATION) {

          console.log('token bitmiş', responseJson.AUTHORIZATION);

          httpRequest(url, details, dispatch, start, success, fail, 'post');

        } else {

          console.log('Dönene POST Responsu:: ', responseJson);
          dispatch({ type: success, payload: responseJson });

        }

      } else {

        console.log('Post elseye düştü')
        httpRequest(url, details, dispatch, start, success, fail, 'post');

      }


    }).catch(error => {
      

      console.log('Error.. Message catch: Post url', url + error);
      dispatch({ type: fail });
      //httpRequest(url, details, dispatch, start, success, fail, 'post');

    })
}

export const get = (url, token, contentType,
  dispatch,
  start,
  success,
  fail) => {
  let _headers = '';

  console.log('GET Servisine Çıkılan URL: ', url);

  dispatch({ type: start });

  _headers = {
    'Content-Type': contentType == 1 ? 'application/x-www-form-urlencoded' : 'application/json',
    'Authorization': 'Bearer '.concat(token)
  };

  fetch(url, {
    method: 'GET',
    headers: _headers,
  })
    .then((response) => response.json()).then((responseJson) => {

      if (responseJson !== null) {
        console.log('Dönene GET Responsu: ', responseJson);

        if (responseJson.Message == AUTHORIZATION) {
          console.log('token bitmiş', responseJson.AUTHORIZATION);
          httpRequest(url, null, dispatch, start, success, fail, 'get');

        } else {
          dispatch({ type: success, payload: responseJson });
        }

      } else {
        httpRequest(url, null, dispatch, start, success, fail, 'get');
      }

    }).catch(error => {
      

      console.log('Error.. Message catch: get url', url + error);
      dispatch({ type: fail });
      //httpRequest(details, 'get');

    })

}
