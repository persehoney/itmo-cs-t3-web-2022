<#-- @ftlvariable name="id" type="java.lang.Long" -->
<#import "./common.ftlh" as c>

<@c.page>
    <#if id??>
        <#assign key = "id">
        <#assign value = id>
    <#else>
        No such user
    </#if>

    <#assign author = c.findBy(users, "id", id)!/>

    <#if author?has_content>
        <#assign counter = 0>
        <#list posts?reverse as post>
            <#if post.userId == id>
                <#assign counter = 1>
                <@c.getPost post, "cut"/>
            </#if>
        </#list>
        <#if counter == 0>
            User has no posts :(
        </#if>
    <#else>
        No such user
    </#if>

</@c.page>