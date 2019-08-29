import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex22 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            System.out.println("Result");
            int number = 0;
            for(int i = 0; i<3; i++){
                System.out.println("Select button: \n" +
                        "10\n" +
                        "20\n" +
                        "30\n" +
                        "40\n");
                number = Integer.parseInt(br.readLine());

                System.out.println(String.format("Result = %s",number));
            }
        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
