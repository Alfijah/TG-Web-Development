package com.company.School;

import java.util.Collections;

public class FirstYearStudent extends Student {
    private String name;
    private int[] grades;
    private String[] subjects = new String[]{"English", "Dutch", "Math", "Biology", "Geography"};

    public String[] subjects() {
        return subjects;
    }

    public FirstYearStudent(String name, String remark) {
        super(name, remark);
    }

    public FirstYearStudent(String schoolYear, String[] subjects) {
        super(schoolYear);
        this.subjects = subjects;
    }

    public FirstYearStudent(String name, int[] grades) {
        super(name, grades);
    }

    @Override
    public String passYear() {
        for (int grade : grades) {
            if (grade == 4) {
                return "Unfortunately, you have not passed this year.";
            }
        }
        return "Congratulations, you have passed this year!";
    }
}
