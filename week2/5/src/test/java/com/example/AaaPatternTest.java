package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AaaPatternTest {

    private int a;
    private int b;

    @Before
    public void setUp() {
        // Setup - runs before each test
        a = 5;
        b = 3;
        System.out.println("Setup completed");
    }

    @After
    public void tearDown() {
        // Teardown - runs after each test
        System.out.println("Teardown completed");
    }

    @Test
    public void testAddition() {
        // Arrange is done in setUp()

        // Act
        int result = a + b;

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testMultiplication() {
        // Act
        int result = a * b;

        // Assert
        assertEquals(15, result);
    }
}
