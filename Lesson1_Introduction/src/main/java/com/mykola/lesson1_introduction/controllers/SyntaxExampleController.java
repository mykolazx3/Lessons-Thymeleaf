package com.mykola.lesson1_introduction.controllers;

import com.mykola.lesson1_introduction.model.dictionary.Gender;
import com.mykola.lesson1_introduction.model.dto.EmployeeDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/syntax")
public class SyntaxExampleController {

    @GetMapping("/example")
    public String getSyntaxExamplePage(Model model){
        model.addAttribute("defaultName", "Peter Parker");
        model.addAttribute("greetings", "Hello World");
        model.addAttribute("employee", getTestEmployee());
        model.addAttribute("employeeMap", getMapWithEmployees());
        model.addAttribute("employeeList", getListOfEmployees());
        model.addAttribute("employeeUrl", "/api/companies");
        model.addAttribute("employeeObject", getTestEmployee());
        model.addAttribute("totalStudents", 5);

        return "syntaxExample";
    }

    @GetMapping("/syntax/example/link-expression")
    public ModelAndView linkExpressionMethod(@RequestParam(required = false) String status,
                                             @RequestParam(required = false) String position){
        System.out.println("link-expression");
        System.out.println(status);
        System.out.println(position);
        ModelAndView model = new ModelAndView();
        model.setView(new RedirectView("/syntax/example"));
        return model;
    }

    @GetMapping("/syntax/example/context-relative")
    public ModelAndView contextRelativeExample(ModelAndView model){
        model.setView(new RedirectView("/syntax/example"));
        return model;
    }

    @GetMapping("/inline-example")
    public String getSyntaxInlineExamplePage(Model model){
        model.addAttribute("defaultName", "Peter Parker");
        model.addAttribute("inlineMessage", "Hello <b> World </b>");
        model.addAttribute("appleJuiceName", "Apple Juice");
        model.addAttribute("classname", "body");
        model.addAttribute("color", "#f5826e");

        return "syntaxInlineExample";
    }



    private EmployeeDto getTestEmployee(){
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setFirstName("Peter");
        employeeDto.setLastName("Parker");
        employeeDto.setEmail("peterParker@mail.com");
        employeeDto.setGender(Gender.MALE);
        return employeeDto;
    }

    private Map<String, EmployeeDto> getMapWithEmployees() {
        Map<String, EmployeeDto> employeeMap = new HashMap<>();
        employeeMap.put("Peter", getTestEmployee());

        return employeeMap;
    }

    private List<EmployeeDto> getListOfEmployees(){
        EmployeeDto first = getTestEmployee();
        EmployeeDto second = getTestEmployee();
        second.setFirstName("Jon");
        second.setLastName("Malkovich");
        second.setEmail("malkovich@mail.com");
        second.setGender(Gender.MALE);

        EmployeeDto third= getTestEmployee();
        third.setFirstName("Kety");
        third.setLastName("Mitchel");
        third.setEmail("kety@mail.com");
        third.setGender(Gender.FEMALE);

        return Arrays.asList(
                first,second,third);
    }



}

