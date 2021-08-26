$(document).ready(function() {
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            type: "video",
            q: "itpedia+стрим",
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2020-01-01T00:00:00Z",
            key: "AIzaSyAaIJn9_i2PuO9RvK_WfDhvB97fiK2gGXk"
        },
        function(data) {
            $.each(data.items, function(index, item) {
                console.log(item);
                $.get("tpl/item.html", function(data) {
                                    $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
                                });
                                
            })
        }
    );
})



function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

