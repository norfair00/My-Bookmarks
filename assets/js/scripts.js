fetch("/assets/js/bookmarks.json")
.then(response => {
   return response.json();
})
.then(bookmarks => {

    for (const colum in bookmarks) {
      bookmarks[colum].forEach(bookmark => {
          addRow(colum, bookmark)
      })
    }

    //bookmarks.colum_one.forEach(row => {

    //})
    //bookmarks.colum_two.forEach(row => {

    //})
    //bookmarks.colum_three.forEach(row => {

    //})
    //bookmarks.colum_four.forEach(row => {

    //})
});

function addRow(colum_id, category) {
    let colum = document.getElementById(colum_id)

    const title = document.createElement("h3");
    title.innerText = category.title;

    colum.appendChild(title);

    category.items.forEach(item => {
        const p = document.createElement("p");
        const a = document.createElement("a");
        const img = document.createElement("img");

        a.innerHTML = ` ${item.name}`;

        a.href = item.url
        if (inIframe ()) {
            a.target = "_parent"
        } else {
            a.target = "_blank";
        }

        img.src = `https://sexual-gray-swallow.faviconkit.com/${removeTrailingSlash(removeHttp(item.url))}/16`;

        a.prepend(img);

        p.appendChild(a);
        colum.appendChild(p);
    })

    const br = document.createElement("br");
    colum.appendChild(br);
}

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function removeHttp(url) {
  return url.replace(/^https?:\/\//, '');
}
function removeTrailingSlash(str) {
  return str.replace(/\/+$/, '');
}