var client = request.createClient('https://api.spotify.com/v1/');

exports.getAlbumByAlbumId = function(albumId, callback) {
    client.get('albums/' + albumId, function(err, res, body) {
        delete body.available_markets;  // SO ANNOYING
        callback(body);
    });
}

exports.getAlbumIdByAlbumNameSearch = function(albumName, callback) {
    client.get('search?q=' + albumName + '&type=album', function(err, res, body) {
        callback(body.albums.items[0].id);
    });
}

exports.getAlbumAverageTrackLength = function(album, callback) {
    var totalAlbumLength = 0;
    for(var i=0; i<album.tracks.items.length; i++)
        totalAlbumLength += album.tracks.items[i].duration_ms;
    var averageAlbumLength = totalAlbumLength / album.tracks.items.length;
    callback(averageAlbumLength);
}

exports.convertMs = function(milliseconds, callback) {
  var minutes = Math.floor(milliseconds / 60000)
  var seconds = ((milliseconds % 60000) / 1000).toFixed(0)
  var result = minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  callback(result);
}

exports.helloWorld = function(name) {
    console.log("Hello, "+ name + "!");
}