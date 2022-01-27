package com.company.School;

public class FirstYearStudent extends Student {
    private String schoolYear = "first year";

    public FirstYearStudent(String name, String[] subjects) {
        super(name, subjects);
    }

    @Override
    public String passYear() {
        for (int grade : getGrades()) {
            if (grade == 4) {
                return "Unfortunately, you have not passed this year.";
            }
        }
        return "Congratulations, you have passed this year!";
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }
}
