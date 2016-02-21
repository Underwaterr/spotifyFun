request = require('request-json')
prompt = require('prompt')
spotify = require('./spotify.js')

prompt.start()
prompt.get(['albumName'], function (err, result) {
    spotify.getAlbumIdByAlbumNameSearch(result.albumName, function(response) {
        spotify.getAlbumByAlbumId(response, function(response) {
            spotify.getAlbumAverageTrackLength(response, function(response) {
                spotify.convertMs(response, function(response) {
                    console.log(response);
                })
            })
        })
    })
})