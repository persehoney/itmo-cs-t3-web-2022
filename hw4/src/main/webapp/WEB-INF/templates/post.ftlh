<#-- @ftlvariable name="id" type="java.lang.Long" -->
<#import "./common.ftlh" as c>

<@c.page>
    <#if id??>
        <#assign key = "id">
        <#assign value = id>
    <#else>
        No such post
    </#if>

    <#assign post = c.findBy(posts, "id", id)!/>
    <#if post?has_content>
        <@c.getPost post, "full"/>
    <#else>
        No such post
    </#if>
</@c.page>