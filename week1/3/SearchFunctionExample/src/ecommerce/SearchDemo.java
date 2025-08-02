package ecommerce;
import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0) return products[mid];
            else if (cmp < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Shoes", "Footwear"),
            new Product(102, "T-Shirt", "Clothing"),
            new Product(103, "Laptop", "Electronics"),
            new Product(104, "Mobile", "Electronics"),
            new Product(105, "Watch", "Accessories")
        };

        System.out.println("Linear Search for 'Laptop':");

        Product found1 = linearSearch(products, "Laptop");
        System.out.println(found1 != null ? found1 : "Not Found");

        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        System.out.println(" Binary Search for 'Laptop':");
        Product found2 = binarySearch(products, "Laptop");
        System.out.println(found2 != null ? found2 : "Not Found");
    }
}
