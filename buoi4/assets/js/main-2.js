// Cấu trúc cú pháp để xác định các phần tử trên dom đã được load toàn bộ DOM 
// Để chắc chắn là khi query sẽ có phần tử đó.
document.addEventListener("DOMContentLoaded", function() {

    togglePopup();


    const linkNames = document.querySelectorAll(".post-header-name");

    if (linkNames && linkNames.length) {
        linkNames.forEach(ele => {
            ele.onmouseover = function(e) {

                if (Array.from(e.target.classList).includes("post-header-name")) {


                    // console.log(e.target.getAttribute("data-id"));
                    const nameInsta = e.target.getAttribute("data-name");
                    let dataPost = e.target.getAttribute("data-post");
                    // dataPost = dataPost || 0;
                    // dataPost = dataPost != null ? dataPost : 0;

                    if (dataPost != null) {

                    } else {
                        dataPost = 0;
                    }


                    console.log(nameInsta);
                    const poupProfile = document.querySelector(".popup-hover-profile");

                    const existPopup = e.target.querySelector(".popup-hover-profile");

                    // console.log(existPopup);

                    const clone = poupProfile.cloneNode(true);
                    clone.style.display = "block";
                    const postHeaderName = e.target;


                    const nameElement = clone.querySelector(".name-user-popup");
                    const postCount = clone.querySelector(".posst-count");

                    if (nameElement) {
                        nameElement.innerHTML = nameInsta;
                    }
                    if (postCount) {
                        postCount.innerHTML = `${dataPost} bài viết`;
                    }

                    if (postHeaderName && existPopup == null) {
                        postHeaderName.append(clone);
                    }
                }

            }

            ele.onmouseleave = function(e) {
                const postHeaderName = e.target;
                if (postHeaderName && Array.from(e.target.classList).includes("post-header-name")) {
                    const existPopup = e.target.querySelector(".popup-hover-profile");
                    if (existPopup) {
                        existPopup.remove();
                    }
                }
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