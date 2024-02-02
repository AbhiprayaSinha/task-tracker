package com.example.taskTrackerBackend.repository;

import java.util.Optional;
import java.util.Set;

import com.example.taskTrackerBackend.entity.Task;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    Optional<Task> findByTitle(String title);
    Set<Task> findByCompleted(boolean completed);
}
