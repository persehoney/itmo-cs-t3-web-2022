package ru.itmo.wp.web.page;

import ru.itmo.wp.model.domain.Article;
import ru.itmo.wp.model.domain.User;
import ru.itmo.wp.model.exception.ValidationException;
import ru.itmo.wp.model.service.ArticleService;
import ru.itmo.wp.web.annotation.Json;
import ru.itmo.wp.web.exception.RedirectException;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/** @noinspection unused*/
public class ArticlePage {
    private final ArticleService articleService = new ArticleService();

    private void action(HttpServletRequest request, Map<String, Object> view) {
        // No operations.
    }

    @Json
    private void postArticle(HttpServletRequest request, Map<String, Object> view) throws ValidationException {
        Article article = new Article();

        article.setTitle(request.getParameter("title"));
        article.setText(request.getParameter("text"));

        User user = (User) request.getSession().getAttribute("user");
        article.setUserId(user.getId());

        articleService.validateArticle(article);
        articleService.postArticle(article);

        request.getSession().setAttribute("message", "Your article is published!");
        throw new RedirectException("/index");
    }
}
