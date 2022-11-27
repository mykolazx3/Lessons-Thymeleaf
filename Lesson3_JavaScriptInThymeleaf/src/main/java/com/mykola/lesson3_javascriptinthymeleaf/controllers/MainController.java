package com.mykola.lesson3_javascriptinthymeleaf.controllers;

import com.mykola.lesson3_javascriptinthymeleaf.models.Student;
import com.mykola.lesson3_javascriptinthymeleaf.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/")
public class MainController {

    @GetMapping("/first")
    public String firstP(Model model) {

        User user = new User("John", "Doe", "john@example.com",
                29, new Date());
        model.addAttribute("user", user);

        return "first";
    }

    @GetMapping("/second")
    public String secondP(Model model) {
        model.addAttribute("name", "Baeldung Reader");
        return "second";
    }

    @GetMapping("/third")
    public String thirdP(Model model) {
        List<Student> students = new ArrayList<Student>();
        students.add(new Student(1, "MykolaFirst"));
        students.add(new Student(2, "FedSecond"));
        students.add(new Student(3, "PedaThird"));

        model.addAttribute("totalStudents", students.size());
        model.addAttribute("student", students.get(0));
        return "third";
    }




}
