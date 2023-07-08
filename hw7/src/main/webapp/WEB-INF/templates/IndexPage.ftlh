<#-- @ftlvariable name="articles" type="ru.itmo.wp.model.domain.Article[]" -->
<#import "commons.ftlh" as c>

<@c.page>
    <div class="articles">
        <template>
        <article>
            <div class="title">
                Anything
            </div>
            <div class="author">
                Anyone
            </div>
            <div class="text">
                Anything
            </div>
            <div class="footer">
                <div class="left">
                    <img src="img/voteup.png" title="Vote Up" alt="Vote Up"/>
                    <span class="positive-score">+173</span>
                    <img src="img/votedown.png" title="Vote Down" alt="Vote Down"/>
                </div>
                <div class="right">
                    <img src="img/date_16x16.png" title="Publish Time" alt="Publish Time"/>
                    <p>2 days ago</p>
                    <img src="img/comments_16x16.png" title="Comments" alt="Comments"/>
                    <a href="#">68</a>
                </div>
            </div>
        </article>
        </template>

        <div class="noData">
            No data
        </div>
    </div>


    <script>
        $(function () {
            const $noData = $(".noData");
            $noData.text("Loading articles...");
            $.ajax({
                dataType: "json",
                data: {
                    action: "findAll"
                },
                success: function(response) {
                    response["articles"].forEach(function(article) {
                        $noData.hide();
                        const $article = $($(".articles template").prop("content")).clone();
                        $article.find(".title").text(article["title"]);
                        $article.find(".text").text(article["text"]);
                        $article.find(".author").text(article["userId"]);
                        $(".articles").append($article);
                    });
                },
                type: "POST"
            });
        });
    </script>
</@c.page>
