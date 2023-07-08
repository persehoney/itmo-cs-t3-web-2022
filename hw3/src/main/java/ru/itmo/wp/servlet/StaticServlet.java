package ru.itmo.wp.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class StaticServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String uri = request.getRequestURI();

        String[] arr = uri.split("\\+");

        File file;
        List<String> list = new ArrayList<>();

        boolean flag = false;
        for (String str: arr) {
            file = new File("/Users/ksyusha/hw3/src/main/webapp/static/" + str);
            if (file.isFile()) {
                list.add("/Users/ksyusha/hw3/src/main/webapp/static/" + str);
            } else {
                file = new File(getServletContext().getRealPath("/static/") + str);
                if (file.isFile()) {
                    list.add(getServletContext().getRealPath("/static/") + str);
                } else {
                    flag = true;
                    break;
                }
            }
        }

        if (!flag) {
            response.setContentType(getServletContext().getMimeType(arr[0]));
            for (String  str : list) {
                try (OutputStream outputStream = response.getOutputStream()) {
                    Files.copy(new File(str).toPath(), outputStream);
                }
            }
        }
        else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }
}

