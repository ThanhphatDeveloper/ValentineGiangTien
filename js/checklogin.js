function checkCredentials() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "GiangTien" && password === "GiangTien") {
        setTimeout(() => {
            checkCredentials();
        }, 4000);
        window.location.href = "slide.html";
    } else {
        alert("Đăng nhập không thành công !!!");
    }
}