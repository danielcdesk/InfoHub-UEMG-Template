document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.setor-faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) document.querySelectorAll('.setor-faq-item[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
});
