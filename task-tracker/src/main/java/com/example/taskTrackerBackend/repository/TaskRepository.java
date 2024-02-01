package com.example.taskTrackerBackend.repository;

import com.example.taskTrackerBackend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long>{
}
