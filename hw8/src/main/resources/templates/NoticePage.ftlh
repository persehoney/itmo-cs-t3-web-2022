<#import "commons.ftlh" as c>

<@c.page>
    <#if user??>
        <div class="form-box">
            <div class="header">Notice</div>
            <div class="body">
                <form class="article-form" method="post" action="">
                    <input type="hidden" name="action" value="postArticle"/>
                    <div class="field">
                        <div class="name">
                            <label for="text">Notice</label>
                        </div>
                        <div class="value">
                            <textarea id="text" name="content"></textarea>
                        </div>
                        <@c.error "noticeForm.content"/>
                    </div>
                    <div class="button-field">
                        <input type="submit" value="Add">
                    </div>
                </form>
            </div>
        </div>

    <#else>
        <h1>404</h1>
        <p>Page not found</p>
    </#if>
</@c.page>
