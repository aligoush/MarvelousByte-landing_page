var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dgw1jgpjb/upload';
var CLOUDINARY_UPLOAD_PRESET = 'ntteibfm';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function (event){
  var file = event.target.files[0];
  //let myForm = document.getElementById('myForm');
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
  axios({
    url: CLOUDINARY_URL,
    method :'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function(res){
    console.log(res);
    imgPreview.src = res.data.url;
  }).catch(function(err){
    console.error(err);
  });
});

