document.querySelectorAll('ul.navbar-nav .nav-link').forEach(link => {
    link.addEventListener(
        'click', 
        () => onChangePage(link.getAttribute('id'))
    );
});

let currentPageID;
const onChangePage = linkID => {
    if (currentPageID) {
        const oldList = document.querySelector(`#${currentPageID}`).classList;
        oldList.add('d-none');
    }

    linkID = linkID ?? 'home-page-link';
    currentPageID = linkID.replace('-link', '');
    const newList = document.querySelector(`#${currentPageID}`).classList;
    newList.remove('d-none');
}
onChangePage();
