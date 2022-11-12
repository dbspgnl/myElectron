const threeToastBtn = document.getElementById('threeToastBtn');
const threeToast = document.getElementById('threeToast');
if (threeToastBtn) {
threeToastBtn.addEventListener('click', () => {
    const toast = new bootstrap.Toast(threeToast)
    toast.show()
})}
const chklistToastBtn = document.getElementById('chklistToastBtn');
const chklistToast = document.getElementById('chklistToast');
if (chklistToastBtn) {
    chklistToastBtn.addEventListener('click', () => {
    const toast = new bootstrap.Toast(chklistToast)
    toast.show()
})}
const txtSearchToastBtn = document.getElementById('txtSearchToastBtn');
const txtSearchToast = document.getElementById('txtSearchToast');
if (txtSearchToastBtn) {
    txtSearchToastBtn.addEventListener('click', () => {
    const toast = new bootstrap.Toast(txtSearchToast)
    toast.show()
})}