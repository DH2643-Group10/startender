const STATUS_CODES = {
    'a112': 'MongoDB write conflict',
    'a200': 'OK',
    'a201': 'Created',
    'a202': 'Accepted',
    'a203': 'Non-Authoritative Information',
    'a204': 'No Content',
    'a205': 'Reset Content',
    'a206': 'Partial Content',
    'a300': 'Multiple Choices',
    'a301': 'Moved Permanently',
    'a302': 'Found',
    'a303': 'See Other',
    'a304': 'Not Modified',
    'a305': 'Use Proxy',
    'a307': 'Temporary Redirect',
    'a400': 'Bad Request',
    'a401': 'Unauthorized',
    'a402': 'Payment Required',
    'a403': 'Forbidden',
    'a404': 'Not Found',
    'a405': 'Method Not Allowed',
    'a406': 'Not Acceptable',
    'a407': 'Proxy Authentication Required',
    'a408': 'Request Timeout',
    'a409': 'Conflict',
    'a410': 'Gone',
    'a411': 'Length Required',
    'a412': 'Precondition Failed',
    'a413': 'Request Entity Too Large',
    'a414': 'Request-URI Too Long',
    'a415': 'Unsupported Media Type',
    'a416': 'Requested Range Not Satisfiable',
    'a417': 'Expectation Failed',
    'a418': 'This username already exist',
    'a500': 'Internal Server Error',
    'a501': 'Not Implemented',
    'a502': 'Bad Gateway',
    'a503': 'Service Unavailable',
    'a504': 'Gateway Timeout',
    'a505': 'HTTP Version Not Supported',
    //'a11000': 'This username already exist'
  
  };
const checkError = (code) => {
if (code==11000){
//for "username alrdy exist"
//406= user does not exist
code=406;
}
  const strKey = 'a' + code.toString();
  //made to string to be able to access object (int can't be used as properties)
  //console.log("strKey:",strKey)
  
  const { [strKey] : result} = STATUS_CODES;
  
  if (result != undefined) {
    return {
      code: code,
      msg: result
    }
  } else return {
    code: code,
    msg: 'Error not known'
  }
} 
module.exports = {checkError};
