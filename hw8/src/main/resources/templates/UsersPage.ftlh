<#import "commons.ftlh" as c>

<@c.page>
    <#if user??>
    <div class="users datatable">
        <div class="caption">User</div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Login</th>
                <th>Created</th>
                <th>Set status</th>
            </tr>
            </thead>
            <tbody>
            <#if users?size==0>
                <tr class="noData">
                    <td colspan="3">
                        No data
                    </td>
                </tr>
            <#else>
                <#list users as user>
                <tr>
                    <td class="id">${user.id}</td>
                    <td class="login"><a href="/user/${user.id}">${user.login}</a></td>
                    <td class="creationTime">${user.creationTime}</td>
                    <td class="disabled">

                        <#if user.disabled>
                            <#assign status = "Enable">
                        <#else>
                            <#assign status = "Disable">
                        </#if>

                        <form method="post" action="">
                            <input type="hidden" name="action" value="disable"/>
                            <div class="button-field">
                                <input type="submit" value="${status}">
                                <input type="hidden" name="id" value="${user.id}">
                                <input type="hidden" name="disabled" value="${status}">
                            </div>
                        </form>

                    </td>
                </tr>
                </#list>
            </#if>
            </tbody>
        </table>
    </div>
    <#else>
        <h1>404</h1>
        <p>Page not found</p>
    </#if>
</@c.page>
