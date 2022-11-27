package com.mykola.lesson1_introduction.model.dto;

import com.mykola.lesson1_introduction.model.dictionary.Gender;

public class EmployeeDto {
    String firstName;
    String lastName;
    String email;
    Gender gender;

    public String getFullName(){
        return firstName.concat(" ").concat(lastName);
    }
    public boolean isMan(){return Gender.MALE.equals(gender);}

    public EmployeeDto() {
    }

    public EmployeeDto(String firstName, String lastName, String email, Gender gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return firstName + " " + lastName + " " + email + " " + gender;
    }
}
