package ru.itmo.web.hw4.util;

import ru.itmo.web.hw4.model.User;
import ru.itmo.web.hw4.model.Post;

import javax.servlet.http.HttpServletRequest;
import java.net.URLDecoder;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class DataUtil {
    private static final List<User> USERS = Arrays.asList(
            new User(1, "MikeMirzayanov", "Mike Mirzayanov", "green"),
            new User(6, "pashka", "Pavel Mavrin", "green"),
            new User(9, "geranazavr555", "Georgiy Nazarov", "blue"),
            new User(11, "tourist", "Gennady Korotkevich", "red")
    );

    private static final List<Post> POSTS = Arrays.asList(
            new Post(1, "Cute kitties", "Cute kitties watch online free with no registration", 9),
            new Post(2, "Cute kitties 2", "Kitties aren't available anymore :(", 11),
            new Post(3, "Still cute kitties", "CUTE KITTIES ON CODEFORCES AGAIN", 1),
            new Post(4, "Another cute kitties page", "Cute animals are a dime a dozen, but why do we keep returning to the same old animals? Many times, it’s because they’re so darn cute. Cats and dogs are two of the cutest pets around, and both are beloved by many people. However, there are differences between these two lovable creatures. Let’s take a look at the similarities and differences between cats and dogs.", 11)
    );

    public static void addData(HttpServletRequest request, Map<String, Object> data) {
        data.put("users", USERS);
        data.put("posts", POSTS);

        for (User user : USERS) {
            if (Long.toString(user.getId()).equals(request.getParameter("logged_user_id"))) {
                data.put("user", user);
            }
        }
        String current_page = request.getRequestURI();
        data.put("current_page", current_page);
    }
}
