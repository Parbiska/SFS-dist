const closeNoticeButton = document.querySelector(
	'.product__purchase-notice-close'
);
const notice = document.querySelector('.product__purchase-notice');

closeNoticeButton.addEventListener('click', () => {
	notice.style.display = 'none';
});
