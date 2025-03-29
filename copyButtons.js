document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function () {
      const reportId = this.getAttribute('data-report');
      
      const detailsSection = document.querySelector(`#${reportId}-report #details-section`);
      
      if (!detailsSection) {
        console.error('Details section not found');
        return;
      }
  
      const reportContent = detailsSection.innerText;
      
      const textarea = document.createElement('textarea');
      textarea.value = reportContent;
      document.body.appendChild(textarea);
      textarea.select();
      
      try {
        document.execCommand('copy');
        
        const successMessage = document.getElementById(`${reportId}-success`);
        if (successMessage) {
          successMessage.style.opacity = '1';
          setTimeout(() => {
            successMessage.style.opacity = '0';
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      
      document.body.removeChild(textarea);
    });
  });