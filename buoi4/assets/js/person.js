// Cấu trúc cú pháp để xác định các phần tử trên dom đã được load toàn bộ DOM 
// Để chắc chắn là khi query sẽ có phần tử đó.
document.addEventListener("DOMContentLoaded", function () {
    const changePage = document.querySelectorAll(".toggle-change li");
    if (changePage && changePage.length) {
        for (let index = 0; index < changePage.length; index++) {

            const element = changePage[index];

            element.onclick = function (e) {

                removeActive();

                addActive(e.target);
            }
        }
    }

});

/** 
* Mô tả: Xóa class active 
* Created By: Quansensodyne - 02/08/2022 
*/
function removeActive() {
    const hasActive = document.querySelector(".active");

    if (hasActive) {
        hasActive.classList.remove("active");
    }
}

/** 
* Mô tả: Thêm class active cho element truyền vào 
* @param element: Element cần thêm class active
* Created By: Quansensodyne - 02/08/2022 
*/
function addActive(element) {
    if (element && element.classList) {
        element.classList.add("active");
    }
}