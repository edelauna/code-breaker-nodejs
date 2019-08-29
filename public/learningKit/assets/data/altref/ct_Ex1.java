import java.io.*;

public class Main {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input x:");
            int x = Integer.parseInt(br.readLine());

            System.out.println("Input y:");
            int y = Integer.parseInt(br.readLine());

            System.out.println(String.format("Sum: %2d",x+y));
        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
