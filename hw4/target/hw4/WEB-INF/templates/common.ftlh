<#macro page>
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Codeforces</title>
        <link rel="stylesheet" href="/css/normalize.css">
        <link rel="stylesheet" href="/css/style.css">
        <link rel="icon" href="/favicon.ico">
    </head>
    <body>
    <@header/>
    <div class="middle">
        <@sidebar/>
        <main>
            <#nested/>
        </main>
    </div>
    <@footer/>
    </body>
    </html>
</#macro>

<#macro header>
    <header>
        <a href="#" class="logo"><img alt="Codeforces" title="Codeforces"
                                      src="/img/codeforces-logo-with-telegram.png"></a>
        <div class="languages">
            <a href="#"><img alt="In English" title="In English"
                             src="/img/gb.png"></a>
            <a href="#"><img alt="In Russian" title="In Russian"
                             src="/img/ru.png"></a>
        </div>
        <div class="enter-or-register-box">
            <#if user??>
                <@userlink user, "colorful"/>
                |
                <a href="/logout">Logout</a>
            <#else>
                <a href="/enter">Enter</a>
                |
                <a href="/register">Register</a>
            </#if>
        </div>
        <nav>
            <#assign items=[
            {"href": "/index", "name": "Home"},
            {"href": "/users", "name": "Users"},
            {"href": "/misc/help", "name": "Help"},
            {"href": "/contests", "name": "Contests"},
            {"href": "/cutekitties", "name": "Cute kitties"}
            ]/>
            <ul>
                <#if current_page != "/notfound">
                    <#list items as item>
                        <li>
                        <#if current_page == item.href>
                            <a href="${item.href}" class="current_page">${item.name}</a>
                        <#else>
                            <a href="${item.href}">${item.name}</a>
                        </#if>
                        </li>
                    </#list>
                <#else>
                    <#list items as item>
                        <li>
                        <#if item.href == "/contests">
                            <a href="${item.href}" class="current_page">${item.name}</a>
                        <#else>
                            <a href="${item.href}">${item.name}</a>
                        </#if>
                        </li>
                    </#list>
                </#if>
            </ul>
        </nav>
    </header>
</#macro>

<#macro sidebar>
    <aside>
        <#list posts?reverse as post>
            <section>
                <div class="header">Post #${post.id}</div>
                <#if post.text?length gt 350>
                    <div class="body">${post.text?substring(0, 350)}...</div>
                <#else>
                    <div class="body">${post.text}</div>
                </#if>
                <div class="footer">
                    <a href="/post?post_id=${post.id}">View all</a>
                </div>
            </section>
        </#list>
    </aside>
</#macro>

<#macro footer>
    <footer>
        2010-2021 &copy; by Mike Mirzayanov
    </footer>
</#macro>

<#macro userlink user mode>
<#-- @ftlvariable name="user" type="ru.itmo.web.hw4.model.User" -->
    <#if mode == "nameOnly">
        <a href="/user?handle=${user.handle}">${user.name}</a>
    <#else>
        <a href="/user?handle=${user.handle}" style="color: ${user.color};" class="colorful_userlink">${user.name}</a>
    </#if>
</#macro>

<#macro getPost post typeOfPost>
    <article>
        <#assign creator = findBy(users, "id", post.userId)>
        <div class="title">${post.title}</div>
        <div class="information">
            <#if user?? && user.id == creator.id>
                By <@userlink creator, "nameOnly"/>
            <#else>
                By <@userlink creator, "colorful"/>
            </#if>
        </div>
        <#if post.text?length gt 350 && typeOfPost == "cut">
            <div class="body">${post.text?substring(0, 350)}...</div>
        <#else>
            <div class="body">${post.text}</div>
        </#if>
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
</#macro>

<#function findBy items key value>
    <#list items as item>
        <#if item[key] == value>
            <#return item/>
        </#if>
    </#list>
</#function>

<#function findPrevUser users, key_user>
    <#if users?seq_index_of(key_user) != 0 >
        <#list users as user>
            <#if users?seq_index_of(user) == users?seq_index_of(key_user) - 1>
                <#return "/user?handle=${user.handle}">
                <#break>
            </#if>
        </#list>
    <#else>
        <#return "#">
    </#if>
</#function>

<#function findNextUser users, key_user>
    <#if users?seq_index_of(key_user) != users?size - 1 >
        <#list users as user>
            <#if users?seq_index_of(user) == users?seq_index_of(key_user) + 1>
                <#return "/user?handle=${user.handle}">
                <#break>
            </#if>
        </#list>
    <#else>
        <#return "#">
    </#if>
</#function>

<#function postsCounter author_id>
    <#assign counter = 0>
    <#list posts?reverse as post>
        <#if post.userId == author_id>
            <#assign counter = counter + 1>
        </#if>
    </#list>
    <#return counter>
</#function>