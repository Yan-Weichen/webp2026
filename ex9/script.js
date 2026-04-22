var imglist_Url =
    'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_Url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var photos = data.photos.photo;
            var gallery = document.getElementById('gallery');
            gallery.innerHTML = '';

            photos.forEach(function(photo) {
                // 先建立 img 元素佔位，保持順序
                var img = document.createElement('img');
                gallery.appendChild(img);
                // 用 getSizes API 取得每張照片的實際 URL
                getPhotoUrl(photo.id, img);
            });
        }
    };
}

function getPhotoUrl(photoId, imgElement) {
    var img_Url =
        'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=' +
        photoId + '&format=json&nojsoncallback=1';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', img_Url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var sizes = data.sizes.size;
            // 優先選擇 Medium 640 或 Medium 尺寸
            var target = null;
            for (var i = 0; i < sizes.length; i++) {
                if (sizes[i].label === 'Medium 640' || sizes[i].label === 'Medium') {
                    target = sizes[i];
                    break;
                }
            }
            if (!target) {
                target = sizes[sizes.length - 1];
            }
            imgElement.src = target.source;
        }
    };
}
