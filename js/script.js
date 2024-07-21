if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

$(function () {
  $(".resizable").resizable({
      animate: true,
      animateEasing: 'swing',
      animateDuration: 500
  });
});