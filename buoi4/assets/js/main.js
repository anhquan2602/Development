// Cấu trúc cú pháp để xác định các phần tử trên dom đã được load toàn bộ DOM 
// Để chắc chắn là khi query sẽ có phần tử đó.
document.addEventListener("DOMContentLoaded", function() {

    togglePopup();


    const linkNames = document.querySelectorAll(".post-header-name");

    if (linkNames && linkNames.length) {
        linkNames.forEach(ele => {
            ele.onmouseover = function(e) {

            }

            ele.onmouseleave = function(e) {

            }
        })
    }


});

// onmouseover event in javascript

/**
 * Mở Popup
 */
function togglePopup() {
    // Comment more ở phần bình luận
    const commentMoreElm = document.querySelector(".comment-more");

    // Đối tượng Popup
    const popupInsta = document.querySelector(".popup-insta");

    // Background làm mờ
    const bgFilter = document.querySelector(".bg-filter");

    // Thao tác đến body DOM
    const body = document.querySelector("body");


    // Icon close của Popup
    const iconClose = document.querySelector(".icon-close");


    if (commentMoreElm && popupInsta && iconClose) {
        // Thao tác mở Poup
        commentMoreElm.onclick = function() {
                // Show Popup
                popupInsta.classList.add("show");
                bgFilter.classList.add("show");

                // Ẩn Scroll
                if (body) {
                    body.classList.add("overflow-hidden");
                }

                setTimeout(() => {
                    popupInsta.classList.remove("animation-popup");
                }, 1);

            }
            // Thao tác đóng Popup
        iconClose.onclick = function() {
            popupInsta.classList.remove("show");
            bgFilter.classList.remove("show");
            popupInsta.classList.add("animation-popup");

            // Ẩn Scroll
            if (body) {
                body.classList.remove("overflow-hidden");
            }
        }

        // Bấm backgroud đóng popup
        bgFilter.onclick = function() {
            popupInsta.classList.remove("show");
            bgFilter.classList.remove("show");
            popupInsta.classList.add("animation-popup");
            // Ẩn Scroll
            if (body) {
                body.classList.remove("overflow-hidden");
            }
        }


    }
}