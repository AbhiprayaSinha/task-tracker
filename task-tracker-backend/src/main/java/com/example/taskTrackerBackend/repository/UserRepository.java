package com.example.taskTrackerBackend.repository;

import java.util.Optional;

import com.example.taskTrackerBackend.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByName(String username);

    Boolean existsByEmail(String email);

    Optional<User> findByNameOrEmail(String username, String email);

    Boolean existsByName(String username);
}
