// Script xử lý đăng nhập và đọc CSV hiển thị bảng dữ liệu

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "admin" && pass === "admin123") {
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
  } else if (user === "teacher1" && pass === "teach123") {
    localStorage.setItem("role", "teacher");
    window.location.href = "teacher.html";
  } else if (user === "student1" && pass === "stud123") {
    localStorage.setItem("role", "student");
    window.location.href = "student.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
  return false;
}

// Hàm dùng để đọc file CSV và hiển thị thành bảng
function parseCSV(fileInputId, tableId) {
  const input = document.getElementById(fileInputId);
  input.addEventListener('change', function (e) {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        const data = results.data;
        const table = document.getElementById(tableId);
        table.innerHTML = "";

        if (!data.length || Object.keys(data[0]).length === 0) {
          table.innerHTML = "<p class='text-danger'>❌ File CSV không hợp lệ hoặc rỗng.</p>";
          return;
        }

        // Render table headers
        const headers = Object.keys(data[0]);
        const thead = "<thead class='table-dark'><tr>" + headers.map(h => `<th>${h}</th>`).join("") + "</tr></thead>";
        table.innerHTML += thead;

        // Render table rows
        const rows = data.map(row =>
          "<tr>" + headers.map(h => `<td>${row[h] || ""}</td>`).join("") + "</tr>"
        ).join("");
        table.innerHTML += "<tbody>" + rows + "</tbody>";
      }
    });
  });
}


function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin123") {
    window.location.href = "admin.html";
  } else if (user === "teacher1" && pass === "teach123") {
    window.location.href = "teacher.html";
  } else if (user === "student1" && pass === "stud123") {
    window.location.href = "student.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
  return false;
}
