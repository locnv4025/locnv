function execute(url) {
    var doc = Http.get(url).html();

    if (doc)
        return Response.success(doc.select("#noi-dung").html());
    return null;
}