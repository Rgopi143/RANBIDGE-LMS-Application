/**
 * Unit tests for Java Exception Handling.
 * Demonstrates try-catch, finally, and custom exceptions.
 */
public class ExceptionHandlingTest {
    
    public static void main(String[] args) {
        testArithmeticException();
        testNullPointerException();
        testFinallyBlock();
        testCustomException();
        System.out.println("All Exception Handling tests passed!");
    }

    public static void testArithmeticException() {
        try {
            int result = 10 / 0;
            assert false : "ArithmeticException should have been thrown";
        } catch (ArithmeticException e) {
            assert e.getMessage().equals("/ by zero") : "Exception message should be '/ by zero'";
            System.out.println("testArithmeticException: PASSED");
        }
    }

    public static void testNullPointerException() {
        try {
            String str = null;
            str.length();
            assert false : "NullPointerException should have been thrown";
        } catch (NullPointerException e) {
            System.out.println("testNullPointerException: PASSED");
        }
    }

    public static void testFinallyBlock() {
        boolean finallyExecuted = false;
        try {
            int x = 10 / 2;
        } catch (Exception e) {
            // No exception
        } finally {
            finallyExecuted = true;
        }
        assert finallyExecuted : "Finally block should always execute";
        System.out.println("testFinallyBlock: PASSED");
    }

    public static void testCustomException() {
        try {
            throw new MyCustomException("Custom error occurred");
        } catch (MyCustomException e) {
            assert e.getMessage().equals("Custom error occurred") : "Custom exception message mismatch";
            System.out.println("testCustomException: PASSED");
        }
    }
}

class MyCustomException extends Exception {
    public MyCustomException(String message) {
        super(message);
    }
}
