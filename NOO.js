async function deo() {
  setInterval(() => {
    const url = window.location.href;
    if (url.startsWith("https://www.youtube.com/shorts/")) {
        window.location.href = '../';
    }
  }, 2000); 
}
deo();
