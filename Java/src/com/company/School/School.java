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

    public void getStudentRemarks(Student student) {
        System.out.println(student.getName() + ": " + student.getRemarks());
    }

    public void getEachYearsSubjects(Student student) {
        System.out.println("Student from the " + student.getSchoolYear() + " has the following subjects: " +
                Arrays.toString(student.getSubjects())+ ".");
    }

    public ArrayList<Student> createStudentsRemarksList() {

    }

    public String[] updateSubjectsList() {
        return firstYearStudent.setSubjects(1, "Spanish");
    }

    public void updateStudentsRemarksList() {

    }

    public ArrayList<String> studentsDataList() {
        ArrayList<String> school = new ArrayList<String>();
        ArrayList<String> students = new ArrayList<String>();
        firstYearStudent = new FirstYearStudent();
        students.add("Alfjah");
        school.addAll(students);
        return students;
    }

    public static void main(String[] args) {
        School school = new School();
        school.studentsDataList();
        FirstYearStudent firstYearStudent = new FirstYearStudent("Olivia");
//        SecondYearStudent secondYearStudent = new SecondYearStudent("Mateo");
//        ThirdYearStudent thirdYearStudent = new ThirdYearStudent("Ava");
//        FourthYearStudent fourthYearStudent = new FourthYearStudent("Lucas");
//
//        firstYearStudent.setGrades(8, 7, 9, 5, 6);
//        secondYearStudent.setGrades(6, 7, 8, 7, 7);
//        thirdYearStudent.setGrades(8, 7, 8, 8, 6);
//        fourthYearStudent.setGrades(6, 7, 6, 9, 8);
//
//        school.registerStudent(firstYearStudent);
//        school.registerStudent(secondYearStudent);
//        school.registerStudent(thirdYearStudent);
//        school.registerStudent(fourthYearStudent);
//
//        school.getEachYearsSubjects(firstYearStudent);
//        school.getEachYearsSubjects(secondYearStudent);
//        school.getEachYearsSubjects(thirdYearStudent);
//        school.getEachYearsSubjects(fourthYearStudent);
//
//        school.getStudentGrades(firstYearStudent);
//        school.getStudentGrades(secondYearStudent);
//        school.getStudentGrades(thirdYearStudent);
//        school.getStudentGrades(fourthYearStudent);
//
//        firstYearStudent.setRemarks("Too late for school.");
//
//        school.getStudentRemarks(firstYearStudent);
//
//        System.out.println(school.studentsDataList());
//
////        System.out.println(Arrays.toString(firstYearStudent.getSubjects()));
        System.out.println(Arrays.toString(firstYearStudent.getSubjects()));
    }
}
