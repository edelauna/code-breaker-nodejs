import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex13 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());
            int fact = 1;

            for (int i = 1; i<=number; i++){
                fact = fact*i;
            }
            System.out.println(String.format("Factorial of %s is %s", number, fact));


        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
