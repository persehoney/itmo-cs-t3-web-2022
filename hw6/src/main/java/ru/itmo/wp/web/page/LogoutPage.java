package ru.itmo.wp.web.page;

import ru.itmo.wp.model.domain.Event;
import ru.itmo.wp.model.domain.Type;
import ru.itmo.wp.model.domain.User;
import ru.itmo.wp.web.exception.RedirectException;
import ru.itmo.wp.model.service.EventService;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@SuppressWarnings({"unused"})
public class LogoutPage extends Page {

    Type type;

    private final EventService eventService = new EventService();

    @Override
    protected void action(HttpServletRequest request, Map<String, Object> view) {
        User user = getUser();

        Event event = new Event();
        event.setUserId(user.getId());

        type = Type.valueOf("LOGOUT");
        event.setType(type);
        eventService.registerEvent(event);

        setMessage("Good bye. Hope to see you soon!");

        request.getSession().removeAttribute("user");
        throw new RedirectException("/index");
    }
}
