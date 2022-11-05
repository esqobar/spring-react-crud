package com.example.backend.services;

import com.example.backend.exceptions.StudentNotFound;
import com.example.backend.models.Student;
import com.example.backend.repositories.StudentRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student createStudent(Student student){
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    public Student getStudent(Long id){
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFound("No student found with id:" +id));
    }

    public Student updateStudent(@NonNull Student student){
        Student updatedStudent = getStudent(student.getId());

        if(updatedStudent !=null && updatedStudent.getName() !=null && updatedStudent.getEmail() !=null){
            updatedStudent.setName(student.getName());
            updatedStudent.setEmail(student.getEmail());
            studentRepository.save(updatedStudent);
        }
        return student;
    }

    public String deleteStudent(@NonNull Long id){
        studentRepository.deleteById(id);
        return "Student Deleted";
    }
}

