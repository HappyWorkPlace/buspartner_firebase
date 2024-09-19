// app.js
function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // อัปเดตเนื้อหาใน div#content
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = data;

            // ประมวลผล <script> ในเนื้อหาที่โหลดมาใหม่
            contentDiv.querySelectorAll('script').forEach(script => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript).parentNode.removeChild(newScript);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// โหลดเนื้อหาเริ่มต้น
window.onload = function() {
    loadContent('register.html');
};
