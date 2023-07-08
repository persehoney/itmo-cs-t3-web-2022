<#-- @ftlvariable name="userr" type="ru.itmo.wp.domain.Userr" -->
<#import "commons.ftlh" as c>

<@c.page>
    <#if userr??>
        <section class = "user_main">
            <div>
                <div class="user">${userr.login}</div>
                <ul>
                    <li>id: ${userr.id}</li>
                    <li>creation time: ${userr.creationTime}</li>
                </ul>
            </div>
            <img class="user_pic" src="/img/user.jpg" alt="user_pic">
        </section>
    <#else>
        No such user
    </#if>
</@c.page>
