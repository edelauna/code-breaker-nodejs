import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex30 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            System.out.println("Input a:");
            int a = Integer.parseInt(br.readLine());
            System.out.println("Input b:");
            int b = Integer.parseInt(br.readLine());

            int product = 0;
            for(int i = 0; i<b; i++){
                product+=a;
            }

            System.out.println(String.format("a*b: %s",product));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
