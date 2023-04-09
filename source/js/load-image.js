const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const Picture = {
  WIDTH: 600,
  HEIGHT: 600,
};

const uploadFile = document.querySelector('#upload-file');
const uploadPreviewContainer = document.querySelector('.img-upload__preview');
const uploadPreview = uploadPreviewContainer.querySelector('img');
const previews = document.querySelectorAll('.effects__preview');

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      uploadPreview.src = reader.result;
      uploadPreview.width = Picture.WIDTH;
      uploadPreview.height = Picture.HEIGHT;

      previews.forEach((filter) => {
        filter.style.backgroundImage = `url(${reader.result})`;
      });
    });

    reader.readAsDataURL(file);
  }
});
