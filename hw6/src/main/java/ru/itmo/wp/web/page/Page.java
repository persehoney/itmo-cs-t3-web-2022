package ru.itmo.wp.web.page;

//import com.google.common.base.Strings;
import com.google.common.base.Strings;
import ru.itmo.wp.model.domain.User;
import ru.itmo.wp.model.service.UserService;
import ru.itmo.wp.web.exception.RedirectException;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

public abstract class Page {

    protected void action(HttpServletRequest request, Map<String, Object> view) { }

    HttpServletRequest currRequest;
    private final UserService userService = new UserService();

    private void before(HttpServletRequest request, Map<String, Object> view) {
        currRequest = request;
        Integer userCount = userService.findCount();
        request.getSession().setAttribute("userCount", userCount);
        view.put("userCount", userCount);

        putUser(request, view);
        putMessage(request, view);

    }

    private void putUser(HttpServletRequest request, Map<String, Object> view) {
        User user = getUser();
        if (user != null) {
            view.put("user", user);
        }
    }

    private void putMessage(HttpServletRequest request, Map<String, Object> view) {
        String message = (String) request.getSession().getAttribute("message");
        if (!Strings.isNullOrEmpty(message)) {
            view.put("message", message);
            request.getSession().removeAttribute("message");
        }
    }

    public void setMessage(String message) {
        currRequest.getSession().setAttribute("message", message);
    }

    public void setUser(User user) {
        currRequest.getSession().setAttribute("user", user);
    }

    public User getUser() {
        User user = (User) currRequest.getSession().getAttribute("user");
        return user;
    }

    private void after(HttpServletRequest request, Map<String, Object> view) {
        //No operations
    }
}
