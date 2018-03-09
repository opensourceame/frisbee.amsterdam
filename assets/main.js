
var disqus_config = function () {
    this.page.url = `http://frisbee.amsterdam${window.location.pathname}`
    this.page.identifier = window.location.pathname;
}

function find(sel, root=document) {
    return root.querySelector(sel)
}

function load_comments() {
    const s = document.createElement('script')
    s.src = 'https://frisbee-amsterdam.disqus.com/embed.js'
    s.setAttribute('data-timestamp', +new Date())
    document.head.appendChild(s)
}

function onload() {
    if(find('#disqus_thread')) {
        load_comments()
    }
}

if (document.readyState !== "loading") {
    onload()
} else {
    window.addEventListener("DOMContentLoaded", onload)
}