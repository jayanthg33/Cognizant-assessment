package forecast;

public class ForecastDemo {
    
    // Recursive method to calculate future value
    public static double forecastValue(double currentValue, double rate, int years) {
        if (years == 0) return currentValue;
        return forecastValue(currentValue * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        double startValue = 1000.0; // initial revenue
        double annualGrowthRate = 0.10; // 10% growth
        int futureYears = 5;

        double futureValue = forecastValue(startValue, annualGrowthRate, futureYears);
        System.out.printf("Projected value after %d years: ₹%.2f\n", futureYears, futureValue);
    }
}
