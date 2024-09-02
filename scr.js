// ใช้ JavaScript เพื่อจัดการการเลื่อนอ่อน ๆ ไปยังส่วน "เกี่ยวกับฉัน" เมื่อคลิกปุ่ม "ดูประวัติ"
VANTA.CLOUDS({
    el: "#page-header",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})

// โหมดมืด-สว่าง
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const mode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', mode);
});

// ปุ่มกด
window.addEventListener('load', function() {
    const savedMode = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedMode);
});

document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn1').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#soft').scrollIntoView({ behavior: 'smooth' });
});

// topbar ตาม
window.addEventListener('scroll', function() {
    const topBar = document.getElementById('top-bar');
    if (window.scrollY > 50) {
        topBar.classList.add('transparent');
    } else {
        topBar.classList.remove('transparent');
    }
});