<#import "./common.ftlh" as c>

<@c.page>
    <#list posts?reverse as post>
        <@c.getPost post, "cut"/>
    </#list>
</@c.page>