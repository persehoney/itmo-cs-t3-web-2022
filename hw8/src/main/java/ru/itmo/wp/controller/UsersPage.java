package ru.itmo.wp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import ru.itmo.wp.form.DisabledForm;
import ru.itmo.wp.service.UserService;

import javax.servlet.http.HttpSession;

@Controller
public class UsersPage extends Page {
    private final UserService userService;

    public UsersPage(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users/all")
    public String users(Model model) {
        model.addAttribute("users", userService.findAll());
        model.addAttribute("disabledForm", new DisabledForm());
        return "UsersPage";
    }

    @PostMapping("/users/all")
    public String setStatus(@ModelAttribute("disabledForm") DisabledForm disabledForm,
                                                        HttpSession httpSession) {

        if (disabledForm.getDisabled().equals("Disable")) {
            userService.updateStatus(disabledForm.getId(), true);
        }
        else if (disabledForm.getDisabled().equals("Enable")) {
            userService.updateStatus(disabledForm.getId(), false);
        }

        if ( getUser(httpSession) != null && getUser(httpSession).getId() == disabledForm.getId()) {
            return "redirect:/logout";
        }

        return "redirect:/users/all";
    }
}
