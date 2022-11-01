export default url = (urlImg) => {
    if(urlImg.indexOf('watch?v=') == -1){
        return 'https://img.youtube.com'
    } else {
        pos = urlImg.indexOf("&list")
        if(pos != -1) {
            urlImg = urlImg.substr(0, pos)
        }
        urlImg = urlImg.replace("www", "img")
        urlImg = urlImg.replace("watch?v=", "vi/")
        urlImg = urlImg + "/hqdefault.jpg"
        return urlImg
    }
}
