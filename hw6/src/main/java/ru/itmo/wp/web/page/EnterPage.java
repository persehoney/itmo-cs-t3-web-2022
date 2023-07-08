package ru.itmo.wp.web.page;

import ru.itmo.wp.model.domain.Event;
import ru.itmo.wp.model.domain.Type;
import ru.itmo.wp.model.domain.User;
import ru.itmo.wp.model.exception.ValidationException;
import ru.itmo.wp.model.service.UserService;
import ru.itmo.wp.model.service.EventService;
import ru.itmo.wp.web.exception.RedirectException;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@SuppressWarnings({"unused"})
public class EnterPage extends Page {
    private final UserService userService = new UserService();

    Type type;

    private final EventService eventService = new EventService();

    private void enter(HttpServletRequest request, Map<String, Object> view) throws ValidationException {
        String loginOrEmail = request.getParameter("loginOrEmail");
        String password = request.getParameter("password");

        if (!loginOrEmail.contains("@")) {
            userService.validateEnterByLogin(loginOrEmail, password);
            User user = userService.findByLoginAndPassword(loginOrEmail, password);
            regEvent(user);
        }
        else {
            userService.validateEnterByEmail(loginOrEmail, password);
            User user = userService.findByEmailAndPassword(loginOrEmail, password);
            regEvent(user);
        }

        throw new RedirectException("/index");
    }

    private void regEvent(User user) {
        setUser(user);
        setMessage("Hello, " + user.getLogin());

        Event event = new Event();
        event.setUserId(user.getId());

        type = Type.valueOf("ENTER");
        event.setType(type);

        eventService.registerEvent(event);
    }
}
