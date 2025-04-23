window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const percent = bar.style.getPropertyValue('--percent');
      setTimeout(() => {
        bar.style.width = percent + '%';
      }, 300);
    });
  });