import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ct_Ex41 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            int a = Integer.parseInt(br.readLine());
            int b = Integer.parseInt(br.readLine());

            int r = a-b;

            while(r>b){
                r = r -b;
            }

            System.out.println(String.format("Remainder: %s", r));


        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
