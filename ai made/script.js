function login() {
    const role = document.getElementById("role").value;

    document.getElementById("admin-dashboard").classList.add("hidden");
    document.getElementById("teacher-dashboard").classList.add("hidden");
    document.getElementById("student-dashboard").classList.add("hidden");

    if (role === "admin") {
        document.getElementById("admin-dashboard").classList.remove("hidden");
    } else if (role === "teacher") {
        document.getElementById("teacher-dashboard").classList.remove("hidden");
    } else if (role === "student") {
        document.getElementById("student-dashboard").classList.remove("hidden");
    }
}