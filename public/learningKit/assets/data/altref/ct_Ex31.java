import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class ct_Ex31 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            System.out.println("Input a:");
            int a = Integer.parseInt(br.readLine());
            String r = "";
            while(a>1){
                r = r + a%2;
                a = (int) Math.floor(a/2);
            }
            StringBuilder sb = new StringBuilder(r);
            System.out.println(String.format("Binary Output: %s", sb.reverse().toString()));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
