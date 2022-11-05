package com.example.backend.exceptions;

import lombok.Data;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ApiError {

    private String message;
    private HttpStatus status;
    private LocalDateTime timeStamp;
}
