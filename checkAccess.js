// checkAccess.js
// Function to check access based on permission
function checkAccess(permission) {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                // Get user's company and permissions
                db.collectionGroup('users').where('email', '==', user.email).get().then(snapshot => {
                    if (!snapshot.empty) {
                        snapshot.forEach(doc => {
                            const userData = doc.data();
                            const userCompanyNo = userData.Company_No;

                            // ดึงข้อมูล permissions ของบริษัท
                            db.collection('companies').doc(userCompanyNo).get().then(doc => {
                                if (doc.exists) {
                                    const companyData = doc.data();
                                    const userRole = userData.role;
                                    const permissions = companyData.permissions || {};

                                    // ตรวจสอบว่า permissions ของบทบาทมี permission ที่ต้องการหรือไม่
                                    if (permissions[userRole] && permissions[userRole].includes(permission)) {
                                        // อนุญาตให้เข้าถึงหน้า
                                        console.log('Access granted to:', permission);
                                        document.getElementById('content').style.display = 'block'; // แสดงเนื้อหาหน้า
                                        resolve(true);
                                    } else {
                                        // ปฏิเสธการเข้าถึง
                                        console.log('Access denied to:', permission);
                                        alert('You do not have permission to access this page.');
                                        window.location.href = 'login.html'; // Redirect to login page or another page
                                        resolve(false);
                                    }
                                }
                            });
                        });
                    }
                });
            } else {
                // หากผู้ใช้ไม่ได้ล็อกอิน
                window.location.href = 'login.html'; // Redirect to login page
                resolve(false);
            }
        });
    });
}


// ฟังก์ชันสำหรับดึง permission จาก URL
function getPermissionFromURL() {
    // ดึง path ของ URL เช่น "/dashboard.html" และตัด ".html" ออก
    let path = window.location.pathname;
    let permission = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    return permission; // จะได้ "dashboard" จาก "/dashboard.html"
}

// เรียกใช้ checkAccess พร้อม permission ที่ได้จาก URL
window.onload = function() {
    let permission = getPermissionFromURL();
    checkAccess(permission);
};
