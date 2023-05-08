$(document).ready(function () {
  show_comment();
});

function save_comment() {
  let sample = $("#sample").val();

  let formData = new FormData();
  formData.append("sample_give", sample);

  fetch("/mychat", { method: "POST", body: formData })
    .then((res) => res.json())
    .then((data) => {
      alert(data["msg"]);
      window.location.reload();
    });
}

function show_comment() {
  fetch("/mychat")
    .then((res) => res.json())
    .then((data) => {
      let rows = data["result"];
    });
}
