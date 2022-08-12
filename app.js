//Ajax,callback
class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
//veri getirme 
  get(url, callback) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }

  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
  //put request data güncelleme amaçlı çalışır 
  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
  delete(url, callback) {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }
}

const request = new Request();
