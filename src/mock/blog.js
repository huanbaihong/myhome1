import Mock from "mockjs";

//获取博客文章分类
Mock.mock("/api/blogtype", "get", {
    code: 0,
    msg: "",
    "data|10-20": [
        {
            "id|+1": 1,
            name: "分类@id",
            "articleCount|0-300": 0,
            "order|+1": 1,
        }
    ]
});

//分页获取博客列表数据
Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function(options){
    const searchParams = new URLSearchParams(options.url);
    const limit = searchParams.get("limit");
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
          "total|2000-3000": 0,
          [`rows|${limit || 10}`]: [
            {
              id: "@guid",
              title: "@ctitle",
              description: "@cparagraph(1, 10)",
              category: {
                "id|1-10": 0,
                name: "分类@id",
              },
              "scanNumber|0-3000": 0,
              "commentNumber|0-300": 30,
              thumb: Mock.Random.image("300x250", "#000", "#fff", "Random Image"),
              createDate: `@date('T')`,
            },
          ]
        },
    });
});