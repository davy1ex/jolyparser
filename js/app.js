// $(document).ready(function() {
    
    
//     $.get(
//         "https://www.googleapis.com/youtube/v3/search", {
//             part: "snippet",
//             type: "video",
//             q: "itpedia+стрим",
//             maxResults: 3,
//             order: "viewCount",
            
//             publishedAfter: "2020-01-01T00:00:00Z",
//             key: "AIzaSyAaIJn9_i2PuO9RvK_WfDhvB97fiK2gGXk"
//         },
//         function(data) {
//             $.each(data.items, function(index, item) {
//                 console.log(item);
//                 $.get("tpl/item.html", function(data) {
//                                     $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
//                                 });
                                
//             })
//         }
//     );
// })



function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

function random_stream() {
    $(".content").show();
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            type: "video",
            q: "itpedia+стрим",
            maxResults: 100,
            order: "viewCount",
            videoDuration: "long",
            
            publishedAfter: String(parseInt(2012 + Math.random() * 10)) + "-" + String(parseInt(1 + Math.random() * 11)) + "-" + String(parseInt(1 + Math.random() * 28)) + "T00:00:00Z",
            key: "AIzaSyAaIJn9_i2PuO9RvK_WfDhvB97fiK2gGXk"
        },
        function(data) {
            items = data.items
            item = items[Math.floor(Math.random()*items.length)]
            
                console.log(item);
                $.get("tpl/item.html", function(data) {
                                    $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
                                });
                                
            
        }
    );

    $("#results").empty()

}

function latest_streams() {
        $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            type: "video",
            q: "itpedia+стрим+jolygolf",
            maxResults: 5,
            order: "date",
            videoDuration: "long",
            publishedAfter: "2020-01-01T00:00:00Z",
            key: "AIzaSyAaIJn9_i2PuO9RvK_WfDhvB97fiK2gGXk"
        },
        function(data) {
            $.each(data.items, function(index, item) {
                console.log(item);
                $.get("tpl/item.html", function(data) {
                                    $(".latest").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
                                });
                                
            })
        }
    );
}

latest_streams()

//$("#re").hide();
