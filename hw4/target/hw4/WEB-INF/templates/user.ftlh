<#-- @ftlvariable name="handle" type="java.lang.String" -->
<#-- @ftlvariable name="id" type="java.lang.Long" -->
<#import "./common.ftlh" as c>

<@c.page>
    <#if handle??>
        <#assign key = "handle">
        <#assign value = handle>
    <#elseif id??>
        <#assign key = "id">
        <#assign value = id>
    <#else>
        No such user
    </#if>

    <#assign u = c.findBy(users, key, value)!/>

    <#if u?has_content>
        <#assign prev_u = c.findPrevUser(users, u)>
        <#assign next_u = c.findNextUser(users, u)>

        <section class = "user_main">
            <div>
                <div class="user">${u.name}</div>
                <ul>
                    <li>id: ${u.id}</li>
                    <li>handle: ${u.handle}</li>
                    <li>name: ${u.name}</li>
                    <#if c.postsCounter(u.id) != 0>
                        <li>posts: <a href="/posts?user_id=${u.id}">${c.postsCounter(u.id)}</a></li>
                    <#else>
                        <li>posts: 0</li>
                    </#if>
                </ul>
            </div>
            <img class="user_pic" src="/img/user.jpg">
        </section>

        <div class = "no_decoration">
            <#if prev_u == "#">
                <a class = "prev_user" style="color:lightgray;"></a>
            <#else>
                <a href="${prev_u}" class = "prev_user" style="color:#3B5998;"></a>
            </#if>
            <#if next_u == "#">
                <a class = "next_user" style="color:lightgray;"></a>
            <#else>
                <a href="${next_u}" class = "next_user" style="color:#3B5998;"></a>
            </#if>
        </div>
    <#else>
        No such user
    </#if>
</@c.page>
