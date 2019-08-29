import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex20 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            System.out.println("Hit Enter:");
            String input = br.readLine();
            double chk = Math.random();
            int number = (int) Math.round(chk);
                if(number==1){
                    System.out.println(String.format("Yes"));
                }
            //System.out.println(String.format("%s",chk));
        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
