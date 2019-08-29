import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex37 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            for(int i = 1; i<=10; i++){
                int fact = 1;
                for(int j = 1; j<=i; j++){
                    fact=fact*j;
                }
                System.out.println(String.format("Factorial of %s is: %s", i, fact));
            }


        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
