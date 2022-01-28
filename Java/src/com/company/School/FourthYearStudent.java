package com.company.School;

import java.util.ArrayList;

public class FourthYearStudent extends Student {
    private String schoolYear = "fourth year";

    public FourthYearStudent(){}

    public FourthYearStudent(String name, String[] subjects) {
        super(name, subjects);
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }
}
