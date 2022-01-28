package com.company.School;

import java.util.ArrayList;

public class ThirdYearStudent extends Student{
    private String schoolYear = "third year";

    public ThirdYearStudent(){}

    public ThirdYearStudent(String name, String[] subjects) {
        super(name, subjects);
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }
}
