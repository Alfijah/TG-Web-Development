package com.company.School;

public class FirstYearStudent extends Student {
    private static final String schoolYear = "first year";

    public FirstYearStudent(){}

    public FirstYearStudent(String name, String[] subjects) {
        super(name, subjects);
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }
}
