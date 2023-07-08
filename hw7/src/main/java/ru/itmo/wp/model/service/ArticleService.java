package ru.itmo.wp.model.service;

import com.google.common.base.Strings;
import ru.itmo.wp.model.exception.ValidationException;
import ru.itmo.wp.model.repository.ArticleRepository;
import ru.itmo.wp.model.repository.impl.ArticleRepositoryImpl;
import ru.itmo.wp.model.domain.Article;

import java.util.List;

/** @noinspection UnstableApiUsage*/
public class ArticleService {
    private final ArticleRepository articleRepository = new ArticleRepositoryImpl();

    public void validateArticle(Article article) throws ValidationException {
        if (Strings.isNullOrEmpty(article.getTitle())) {
            throw new ValidationException("Title is required");
        }
        if (Strings.isNullOrEmpty(article.getText())) {
            throw new ValidationException("Text is required");
        }
        if (article.getTitle().length() > 255) {
            throw new ValidationException("Title can't be longer than 255 characters");
        }
        if (article.getText().length() > 65535) {
            throw new ValidationException("Text can't be longer than 65535 characters");
        }
    }

    public void postArticle(Article article) { articleRepository.post(article); }

    public List<Article> findAll() {
        return articleRepository.findAll();
    }
}
