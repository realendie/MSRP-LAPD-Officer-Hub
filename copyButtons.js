document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', function () {
    const reportId = this.getAttribute('data-report');

    const reportContent = document.getElementById(`${reportId}-report`).innerText;

    const textarea = document.createElement('textarea');
    textarea.value = reportContent;
    document.body.appendChild(textarea);
    textarea.select();

    try {

      document.execCommand('copy');


      const successMessage = document.getElementById(`${reportId}-success`);
      successMessage.style.opacity = '1';

      
      setTimeout(() => {
        successMessage.style.opacity = '0';
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err);
    }

    
    document.body.removeChild(textarea);
  });
});