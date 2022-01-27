package com.company.School;

import java.util.ArrayList;
import java.util.Arrays;

public class School {
    Student firstYearStudent, secondYearStudent, thirdYearStudent, fourthYearStudent;

    public School() {}

    public void registerStudent(Student student) {
        System.out.println(student.getName() + " has been registered.");
    }

    public void getStudentGrades(Student student) {
        System.out.println(student.getName() + " has the following grades: " +
                Arrays.toString(student.getGrades()) + ".");
    }

    public boolean getStudentRemarks(Student student) {
        System.out.println(student.getName() + ": " + student.getRemarksList());
        return true;
    }

    public void getEachYearsSubjects(Student student) {
        System.out.println("Student from the " + student.getSchoolYear() + " has the following subjects: " +
                Arrays.toString(student.getSubjects())+ ".");
    }

    public String[] updateSubjectsList(Student student) {
         return student.updateSubjects(1, "Spanish");
    }

    public static void main(String[] args) {
        String[] firstYearSubjects = new String[]{"English", "Dutch", "Math", "Biology", "Geography"};
        FirstYearStudent firstYearStudent = new FirstYearStudent("Olivia", firstYearSubjects);
        firstYearStudent.setGrades(8, 7, 9, 5, 6);
        firstYearStudent.setRemarksList("Late for school");
        firstYearStudent.setRemarksList("Did not make homework");
//
//        SecondYearStudent secondYearStudent = new SecondYearStudent("Mateo");
//        secondYearStudent.setGrades(6, 7, 8, 7, 7);
//
//
//        ThirdYearStudent thirdYearStudent = new ThirdYearStudent("Ava");
//        FourthYearStudent fourthYearStudent = new FourthYearStudent("Lucas");
//
//        thirdYearStudent.setGrades(8, 7, 8, 8, 6);
//        fourthYearStudent.setGrades(6, 7, 6, 9, 8);

        School school = new School();
        school.registerStudent(firstYearStudent);
//        school.registerStudent(secondYearStudent);
//        school.registerStudent(thirdYearStudent);
//        school.registerStudent(fourthYearStudent);

        school.getEachYearsSubjects(firstYearStudent);
//        school.getEachYearsSubjects(secondYearStudent);
//        school.getEachYearsSubjects(thirdYearStudent);
//        school.getEachYearsSubjects(fourthYearStudent);

        school.getStudentGrades(firstYearStudent);
//        school.getStudentGrades(secondYearStudent);
//        school.getStudentGrades(thirdYearStudent);
//        school.getStudentGrades(fourthYearStudent);

        System.out.println(Arrays.toString(school.updateSubjectsList(firstYearStudent)));

        System.out.println(school.getStudentRemarks(firstYearStudent));
        System.out.println(firstYearStudent.getRemarksList().size());

//        FirstYearHonor firstPotentialHonorStudent = new FirstYearHonor();
//        firstPotentialHonorStudent.addToProgram("Olivia");
//        System.out.println(firstPotentialHonorStudent.getFirstHonorStudent());
//        firstPotentialHonorStudent.checkForNotes();
//        System.out.println();
//
//        firstPotentialHonorStudent.removeFromProgram("Olivia");
//        System.out.println(firstPotentialHonorStudent.getFirstHonorStudent());
    }
}
