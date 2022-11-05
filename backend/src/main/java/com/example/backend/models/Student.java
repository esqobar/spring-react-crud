package com.example.backend.models;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "employees")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}
