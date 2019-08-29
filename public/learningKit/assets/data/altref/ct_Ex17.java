import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex17 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            int number;

            int sum1 = 0;
            int sum2 = 0;

            for(int i = 1; i <=4; i++){
                System.out.println("Input number:");
                number = Integer.parseInt(br.readLine());
                sum1 += number;
            }

            for (int i = 1; i <= 4; i++){
                System.out.println("Input number:");
                number = Integer.parseInt(br.readLine());
                sum2 +=number;
            }

            if(sum1 == sum2) {
                System.out.println(String.format("Yes"));
            } else {
                System.out.println(String.format("No"));
            }

        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
