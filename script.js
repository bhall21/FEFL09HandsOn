let einsteinRequest = new XMLHttpRequest();
einsteinRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let einsteinObject = JSON.parse(this.responseText);
    document.getElementById("nabe").innerHTML = einsteinObject.name;
    document.getElementById("birthday").innerHTML = einsteinObject.birthday;
  }
};
einsteinRequest.open("GET", "einstein.json", true);
einsteinRequest.send();

function showBio() {
  einsteinRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let einsteinObject = JSON.parse(this.responseText);
      document.getElementById("bio").innerHTML = einsteinObject.bio;
    }
  };
  einsteinRequest.open("GET", "einstein.json", true);
  einsteinRequest.send();
}