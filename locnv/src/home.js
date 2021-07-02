function execute() {
    return Response.success([
        { title: "Huyền huyễn", input: "https://kyhuyen.com/tim-kiem?s=0&o=2&st=-1&c=0&t=0&q=-huyenhuyen", script: "tab.js" },
        { title: "Tiên hiệp", input: "https://kyhuyen.com/tim-kiem?s=0&st=-1&o=2&c=0&q=&cats=7-ttienhiep", script: "tab.js" },
        { title: "Đòng nhân", input: "https://bachngocsach.com/reader/recent-dongnhan", script: "tab.js" },
        { title: "Hoàn thành", input: "https://kyhuyen.com/tim-kiem?s=0&o=0&st=20&c=0&t=0&q=-ht", script: "tab.js" }
    ]);
}
