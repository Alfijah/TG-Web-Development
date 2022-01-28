package com.company.School;

import java.util.ArrayList;

public class SecondYearStudent extends Student{
    private String schoolYear = "second year";

    public SecondYearStudent(){}

    public SecondYearStudent(String name, String[] subjects) {
        super(name, subjects);
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }
}


