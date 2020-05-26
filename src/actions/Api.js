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
        console.log('Dönene POST Responsu:: ', responseJson);
        dispatch({ type: success, payload: responseJson });

      } else {
        console.log('Error.. ', url + 'null değer döndü');
        dispatch({ type: fail });
      }


    }).catch(error => {

      console.log('Error.. Message catch: Post url', url + error);
      dispatch({ type: fail });

    })
}

export const get = (
  url,
  dispatch,
  start,
  success,
  fail
) => {

  let _headers = '';

  console.log('GET Servisine Çıkılan URL: ', url);

  dispatch({ type: start });

  _headers = {
    'Content-Type': 'application/json',
    'apikey': 'okcbf281a2-9529-4bad-be47-d523d4001a24'
  };

  fetch(url, {
    method: 'GET',
    headers: _headers,
  })
    .then((response) => response.json()).then((responseJson) => {

      if (responseJson !== null) {
        console.log('GET servisinden dönen reponse: ', responseJson);
        dispatch({ type: success, payload: responseJson });

      } else {
        console.log('Error.. ', url + 'null değer döndü');

        dispatch({ type: fail });
      }

    }).catch(error => {

      console.log('Error.. Message catch: get url', url + error);
      dispatch({ type: fail });
    })

}
