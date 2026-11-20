const poster = document.querySelector('.poster img');
const dialog = document.querySelector('#poster-dialog');
const enlargedPoster = dialog.querySelector('#enlarged-poster');

function showPoster() {
  poster.hidden = false;
  document.querySelector('.poster-art').hidden = true;
  enlargedPoster.src = poster.currentSrc || poster.src;
  enlargedPoster.hidden = false;
  dialog.querySelector('#poster-status').hidden = true;
}

poster.addEventListener('load', showPoster);
if (poster.complete && poster.naturalWidth > 0) showPoster();

document.querySelector('#open-poster').addEventListener('click', () => {
  dialog.showModal();
});
