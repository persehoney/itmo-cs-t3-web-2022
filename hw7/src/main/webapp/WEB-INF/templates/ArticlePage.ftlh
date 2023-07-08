<#import "commons.ftlh" as c>

<@c.page>
<#if user??>
    <div class="form-box">
        <div class="header">Article</div>
        <div class="body">
            <form class="article-form" method="post" action="">
                <input type="hidden" name="action" value="postArticle"/>
                <div class="field">
                    <div class="name">
                        <label for="title">Title</label>
                    </div>
                    <div class="value">
                        <input id="title" name="title"/>
                    </div>
                </div>
                <div class="field">
                    <div class="name">
                        <label for="text">Text</label>
                    </div>
                    <div class="value">
                        <textarea id="text" name="text"></textarea>
                    </div>
                </div>
                <div class="error"></div>
                <div class="button-field">
                    <input type="submit" value="Create">
                </div>
            </form>
        </div>
    </div>

    <script>
        $(function () {
            $(".article-form").submit(function () {
                const title = $(this).find("input[name='title']").val();
                const text = $(this).find("textarea[name='text']").val();
                const error = $(this).find(".error");

                $(function () {
                    post_request(title, text, error, "postArticle");
                })
                return false;
            })
        })
    </script>
<#else>
    <h1>404</h1>
    <p>Page not found</p>
</#if>

</@c.page>
