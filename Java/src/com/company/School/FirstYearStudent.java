package com.company.School;

public class FirstYearStudent extends Student {
    private String schoolYear = "first year";

    public FirstYearStudent(String name, String[] subjects) {
        super(name, subjects);
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }
}
