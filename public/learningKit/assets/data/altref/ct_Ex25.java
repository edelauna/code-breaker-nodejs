import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class ct_Ex25 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            Date today = Calendar.getInstance().getTime();
            System.out.println(today);

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
