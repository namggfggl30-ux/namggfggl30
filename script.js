// Xử lý đổi màu viền neon toàn trang
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--neon-color', e.target.value);
});

// Chuyển đổi qua lại giữa form Đăng nhập và Đăng ký
function toggleForm(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (type === 'register') {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    } else {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}

// Lấy danh sách thành viên từ LocalStorage (hoặc mảng rỗng nếu chưa có)
function getMembers() {
    let members = localStorage.getItem('neon_members');
    return members ? JSON.parse(members) : [];
}

// Lưu danh sách thành viên vào LocalStorage
function saveMembers(members) {
    localStorage.setItem('neon_members', JSON.stringify(members));
}

// Xử lý Đăng ký
function handleRegister() {
    const username = document.getElementById('regUser').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPass').value.trim();

    if (!username || !email || !password) {
        alert('Vui lòng điền đầy đủ thông tin đăng ký!');
        return;
    }

    let members = getMembers();

    // Kiểm tra xem tên đăng nhập hoặc email đã tồn tại chưa
    let exists = members.some(m => m.username === username || m.email === email);
    if (exists) {
        alert('Tên người dùng hoặc Email này đã tồn tại!');
        return;
    }

    // Thêm thành viên mới
    members.push({ username, email, password });
    saveMembers(members);

    alert('Đăng ký thành công! Hãy đăng nhập.');
    toggleForm('login');
    
    // Xóa trắng input
    document.getElementById('regUser').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPass').value = '';
}

// Xử lý Đăng nhập
function handleLogin() {
    const userInput = document.getElementById('loginUser').value.trim();
    const passInput = document.getElementById('loginPass').value.trim();

    if (!userInput || !passInput) {
        alert('Vui lòng nhập tài khoản và mật khẩu!');
        return;
    }

    let members = getMembers();

    // Kiểm tra tài khoản đặc biệt để xem danh sách thành viên (Ví dụ: user: admin, pass: admin)
    if (userInput === 'admin' && passInput === 'admin') {
        showAdminPanel();
        return;
    }

    // Kiểm tra trong danh sách thành viên đã đăng ký
    let validUser = members.find(m => (m.username === userInput || m.email === userInput) && m.password === passInput);

    if (validUser) {
        alert(`Xin chào ${validUser.username}! Đăng nhập thành công.`);
    } else {
        alert('Sai tên đăng nhập, email hoặc mật khẩu! (Gợi ý: Dùng tài khoản admin / admin để xem danh sách thành viên).');
    }
}

// Hiển thị bảng quản lý thành viên (Dành cho Admin)
function showAdminPanel() {
    document.getElementById('authBox').classList.add('hidden');
    document.getElementById('adminBox').classList.remove('hidden');
    renderMemberList();
}

// Quay lại khung đăng nhập từ bảng Admin
function logoutAdmin() {
    document.getElementById('adminBox').classList.add('hidden');
    document.getElementById('authBox').classList.remove('hidden');
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
}

// Hiển thị danh sách thành viên lên bảng HTML
function renderMemberList() {
    const tbody = document.getElementById('memberListBody');
    tbody.innerHTML = '';

    let members = getMembers();

    if (members.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #777;">Chưa có thành viên nào đăng ký.</td></tr>`;
        return;
    }

    members.forEach((member, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${member.username}</td>
            <td>${member.email}</td>
            <td><button class="delete-btn" onclick="deleteMember(${index})">Xóa</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// Tính năng Xóa thành viên
function deleteMember(index) {
    let members = getMembers();
    let deletedName = members[index].username;

    if (confirm(`Bạn có chắc chắn muốn xóa thành viên "${deletedName}" không?`)) {
        members.splice(index, 1); // Xóa phần tử khỏi mảng
        saveMembers(members);     // Cập nhật lại bộ nhớ
        renderMemberList();       // Vẽ lại bảng
    }
}
