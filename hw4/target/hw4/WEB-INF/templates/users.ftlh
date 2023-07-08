<#import "./common.ftlh" as c>

<@c.page>
    <div class="datatable">
<#--        <div class="caption">Users</div>-->
        <table>
            <thead>
                <tr>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
            <#list users as u>
                <tr>
                    <td>
                        <#if user?? && user.id == u.id>
                            *<@c.userlink u, "nameOnly"/>
                        <#else>
                            <@c.userlink u, "colorful"/>
                        </#if>
                    </td>
                </tr>
            </#list>
            </tbody>
        </table>
    </div>
</@c.page>